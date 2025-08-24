// src/server/api/routers/usage.ts
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { initUserUsage } from "@/lib/usage"; // the helper we wrote

export const usageRouter = createTRPCRouter({
  getCredits: protectedProcedure.query(async ({ ctx }) => {
    const { userId } = ctx.auth;
    if (!userId) throw new Error("Not authenticated");

    // Assume you have a way to check user’s plan from DB or Clerk
    const plan = "FREE"; // or "PRO" based on your logic

    const usage = await initUserUsage(userId, plan);

    return {
      credits: usage.credits,
      plan: usage.plan,
      expiresAt: usage.expiresAt,
    };
  }),
});
