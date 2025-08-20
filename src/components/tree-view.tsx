import React from "react";
import { cn } from "@/lib/utils";
import { File, Folder, FolderOpen } from "lucide-react";

export type TreeNode = {
  name: string;
  path: string;
  children?: TreeNode[];
  isFile: boolean;
};

type TreeViewProps = {
  data: TreeNode[];
  value: string | null;
  onSelect: (path: string) => void;
};

export function TreeView({ data, value, onSelect }: TreeViewProps) {
  return (
    <div className="p-2 text-sm select-none">
      {data.map((node, idx) => (
        <TreeItem
          key={node.path}
          node={node}
          value={value}
          onSelect={onSelect}
          isLast={idx === data.length - 1}
          level={0}
        />
      ))}
    </div>
  );
}

function TreeItem({
  node,
  value,
  onSelect,
  isLast,
  level,
}: {
  node: TreeNode;
  value: string | null;
  onSelect: (path: string) => void;
  isLast: boolean;
  level: number;
}) {
  const [open, setOpen] = React.useState(true);
  const Icon = node.isFile ? File : open ? FolderOpen : Folder;

  return (
    <div>
      {/* Row with connector */}
      <div
        onClick={() => node.isFile ? onSelect(node.path) : setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-1 px-1 py-1 rounded cursor-pointer transition-colors",
          "hover:bg-muted",
          value === node.path && "bg-primary text-primary-foreground"
        )}
        style={{ paddingLeft: `${level * 1}px` }}
      >
        <Icon className="h-4 w-4 shrink-0" />
        <span className="truncate">{node.name}</span>
      </div>

      {/* Children with lines */}
      {open && node.children && (
        <div className="ml-2">
          {node.children.map((child, idx) => (
            <div key={child.path} className="flex">
              {/* Line column */}
              <div
                className={cn(
                  "w-4 flex justify-center",
                  isLast ? "" : "border-l border-border"
                )}
              ></div>
              {/* Child item */}
              <TreeItem
                node={child}
                value={value}
                onSelect={onSelect}
                isLast={idx === node.children!.length - 1}
                level={level + 1}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
