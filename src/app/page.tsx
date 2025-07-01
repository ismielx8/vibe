'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const invokeInngestFunction = useMutation(trpc.invoke.mutationOptions({
    onSuccess : () => {
      toast.success("Background job invoked successfully!");
    }
  }));
  

  return (
    <div className="p-4">
      <Input value={value} onChange={(e) => setValue(e.target.value)}/>
      <Button onClick={() => invokeInngestFunction.mutate({text : value})}>
        INVOKE INNGEST FUNCTION
      </Button>
    </div>
  );
};

export default Page;
