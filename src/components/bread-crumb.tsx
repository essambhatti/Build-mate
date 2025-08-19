import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbProps = {
  path: string;
  onSelect: (path: string) => void;
};

export function Breadcrumb({ path, onSelect }: BreadcrumbProps) {
  const parts = path.split("/");

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      {parts.map((part, idx) => {
        const fullPath = parts.slice(0, idx + 1).join("/");
        const isLast = idx === parts.length - 1;

        return (
          <div key={fullPath} className="flex items-center gap-1">
            <span
              onClick={() => !isLast && onSelect(fullPath)}
              className={cn(
                "cursor-pointer hover:underline",
                isLast && "font-medium text-foreground cursor-default hover:no-underline"
              )}
            >
              {part}
            </span>
            {!isLast && <ChevronRight className="h-4 w-4 opacity-70" />}
          </div>
        );
      })}
    </div>
  );
}
