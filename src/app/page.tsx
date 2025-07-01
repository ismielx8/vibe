'use client';

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const invokeInngestFunction = useMutation(trpc.invoke.mutationOptions({
    onSuccess : () => {
      toast.success("Background job invoked successfully!");
    }
  }));
  

  return (
    <div className="p-4">
      <Button onClick={() => invokeInngestFunction.mutate({text : "Ismiel"})}>
        INVOKE INNGEST FUNCTION
      </Button>
    </div>
  );
};

export default Page;
