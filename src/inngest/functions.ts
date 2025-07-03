import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";
import { Sandbox } from '@e2b/code-interpreter';
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event , step}) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("vibe-the-app-builder-nextjs");
        return sandbox.sandboxId;
      });

    const writer = createAgent({
      name: "code-agent",
      system: "You are a code writer agent. You will write code based on the user's request.",
      model: gemini({ model: "gemini-1.5-flash-8b"}),
    });

    const { output } = await writer.run(`Write a code : ${event.data.email}`);

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    });
    
    console.log("Output from writer agent:", output);
    return { output , sandboxUrl};
  },
);

