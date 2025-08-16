"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast("Background Job started")
    }
  }));
  return (
    <div className="m-5 p-2">
      <Button
        className="text-lg hover:bg-gray-600"
        onClick={() => invoke.mutate({ text: "Essam" })}
      >
        Invoke Background job
      </Button>
    </div>
  );
}
