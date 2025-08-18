"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const createProject = useMutation(
    trpc.projects.create.mutationOptions({
      onError: (err) => {
        toast.error(err.message);
      },
      onSuccess: (data) => {
        console.log("Redirecting to:", `/projects/${data.id}`);

        router.push(`/projects/${data.id}`);
      },
    })
  );
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto gap-y-4">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className="text-lg hover:bg-gray-600"
          onClick={() => createProject.mutate({ value: value })}
          disabled={createProject.isPending}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
