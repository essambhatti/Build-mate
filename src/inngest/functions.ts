import { inngest } from "@/inngest/client";
import {  openai, createAgent } from "@inngest/agent-kit";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summarizer = createAgent({
      name: "summarizer",
      system: "You are an expert summarizer. You summarize in two words.",
      model: openai({ model: "gpt-4o" }),
    });
    const { output } = await summarizer.run(`Summarize the following text: ${event.data.value}`);

    console.log(output)
    return { output };
  }
);
