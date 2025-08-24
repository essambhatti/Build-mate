import { auth } from "@clerk/nextjs/server";
import { prisma } from "./db";

const PLAN_CREDITS = {
  FREE: 5,
  PRO: 100, // or whatever you set
};


export async function initUserUsage(userId: string, plan: "FREE" | "PRO" = "FREE") {
  const now = new Date();
  const DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days
  const expiresAt = new Date(now.getTime() + DURATION);

  let usage = await prisma.usage.findUnique({ where: { userId } });

  if (!usage) {
    usage = await prisma.usage.create({
      data: {
        userId,
        plan,
        credits: PLAN_CREDITS[plan],
        expiresAt,
      },
    });
  } else {
    // If user upgraded/downgraded
    if (usage.plan !== plan) {
      usage = await prisma.usage.update({
        where: { userId },
        data: {
          plan,
          credits: PLAN_CREDITS[plan], // reset credits to plan limit
          expiresAt,
        },
      });
    }
    // If subscription cycle expired → reset credits
    else if (usage.expiresAt < now) {
      usage = await prisma.usage.update({
        where: { userId },
        data: {
          credits: PLAN_CREDITS[plan],
          expiresAt,
        },
      });
    }
  }

  return usage;
}



export async function consumeCredits(plan: "FREE" | "PRO" = "FREE") {
  const { userId } = await auth();
  if (!userId) throw new Error("User not authenticated");

  const usage = await initUserUsage(userId, plan);

  if (usage.credits <= 0) {
    throw new Error("No credits left");
  }

  return await prisma.usage.update({
    where: { userId },
    data: { credits: { decrement: 1 } },
  });
}
