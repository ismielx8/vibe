import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Imagine this is a trancription step that takes a while
    await step.sleep("transcribe-audio", "10s");
    // Imagine this is a summary step that takes a while
    await step.sleep("summarize-transcript", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);

