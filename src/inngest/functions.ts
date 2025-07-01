import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const writer = createAgent({
      name: "writer",
      system: "You are an expert writer.  You write readable, concise, simple content.",
      model: gemini({ model: "gemini-1.5-flash-8b"}),
    });

    const { output } = await writer.run(`Write a essay on how AI works ${event.data.email}`);
    
    console.log("Output from writer agent:", output);
    return { output};
  },
);

