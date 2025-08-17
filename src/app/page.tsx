"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [value, setValue] = useState("")
  const trpc = useTRPC();
  const {data : messages} = useQuery(trpc.messages.getMany.queryOptions())
  const createMessage = useMutation(trpc.messages.create.mutationOptions({
    onSuccess: () => {
      toast("<essage Created")
    }
  }));
  return (
    <div className="m-5 p-2" >
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        className="text-lg hover:bg-gray-600"
        onClick={() => createMessage.mutate({ value: value })}
        disabled={createMessage.isPending}
      >
        Invoke Background job
      </Button>
      {JSON.stringify(messages, null , 2)}
    </div>
  );
}
