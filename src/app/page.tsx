"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [value, setValue] = useState("")
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast("Background Job started")
    }
  }));
  return (
    <div className="m-5 p-2" >
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        className="text-lg hover:bg-gray-600"
        onClick={() => invoke.mutate({ value: value })}
      >
        Invoke Background job
      </Button>
    </div>
  );
}
