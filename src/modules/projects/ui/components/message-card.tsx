import { Card } from "@/components/ui/card";
import { Fragment, MessageRole, MessageType } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { formart, format } from "date-fns";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import Image from "next/image";

interface MessageProps {
  content: string;
  role: MessageRole;
  fragment: Fragment | null;
  type: MessageType;
  isActiveFragment: boolean;
  onFragmentClick: (fragment: Fragment) => void;
  createdAt: Date;
}

interface UserMessageProps {
  content: string;
}

interface AssistantMessageProps {
  content: string;
  role: MessageRole;
  fragment: Fragment | null;
  type: MessageType;
  isActiveFragment: boolean;
  onFragmentClick: (fragment: Fragment) => void;
  createdAt: Date;
}

interface FragmentProps {
  fragment: Fragment | null;
  isActiveFragment: boolean;
  onFragmentClick: (fragment: Fragment) => void;
}

const FragmentCard = ({
  fragment,
  isActiveFragment,
  onFragmentClick,
}: FragmentProps) => {
  return (
    <button
      className={cn(
        "flex items-start gap-2 border rounded-lg bg-muted w-fit p-3 hover:bg-secondary transition-colors",
        isActiveFragment && "bg-primary text-primary-foreground border-primary hover:bg-primary",
      
      )}
      onClick={() => onFragmentClick(fragment)}
    >
      <Code2Icon className="size-4 mt-0.5"/>
      <div className="flex flex-col flex-1">
        <span className="text-sm font-value line-clamp-1">{fragment.title}</span>
        <span className="text-sm">Preview</span>
      </div>
      <div className="flex items-center justify-center mt-0.5">
        <ChevronRightIcon className="size-4"/>
      </div>
    </button>
  );
};

const UserMessage = ({ content }: UserMessageProps) => {
  return (
    <div className="flex justify-end pb-4 pr-2">
      <Card className="rounded-2xl bg-muted shadow-none border-none max-w-[88%] break-words p-0 pr-2 pl-2 pt-3 pb-3">
        {content}
      </Card>{" "}
    </div>
  );
};

const AssistantMessage = ({
  content,
  fragment,
  type,
  createdAt,
  isActiveFragment,
  onFragmentClick,
}: AssistantMessageProps) => {
  return (
    <div
      className={cn(
        "flex flex-col group px-2 pb-4",
        type === "ERROR" && "text-red-700 dark:text-red-500"
      )}
    >
      <div className="flex items-center gap-2 pl-2 mb-2">
        <Image
          src="/logo.svg"
          alt="Promptlyx"
          width={18}
          height={18}
          className="shrink-0"
        />
        <span className="text-sm font-md font-bold">Promptlyx</span>
        <span className="text-xsm text-foreground opacity-0 transition-opacity font-md group-hover:opacity-100">
          {format(createdAt, "HH:mm 'on' MMM dd, yyyy")}
        </span>
      </div>
      <div className="pl-7 flex flex-col gap-y-4">
        <span>{content}</span>
        {fragment && type === "RESULT" && (
          <FragmentCard
            fragment={fragment}
            isActiveFragment={isActiveFragment}
            onFragmentClick={onFragmentClick}
          />
        )}
      </div>
    </div>
  );
};

const MessageCard = ({
  content,
  role,
  fragment,
  type,
  createdAt,
  isActiveFragment,
  onFragmentClick,
}: MessageProps) => {
  if (role === "ASSISTANT") {
    return (
      <AssistantMessage
        content={content}
        role={role}
        fragment={fragment}
        createdAt={createdAt}
        isActiveFragment={isActiveFragment}
        onFragmentClick={onFragmentClick}
        type={type}
      />
    );
  }
  return <UserMessage content={content} />;
};

export default MessageCard;
