import React from "react";
import { cn } from "@/lib/utils";
import { FileIcon, Folder, FolderClosed } from "lucide-react";

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
    <div className="p-2 text-sm">
      {data.map((node) => (
        <TreeItem
          key={node.path}
          node={node}
          value={value}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function TreeItem({
  node,
  value,
  onSelect,
}: {
  node: TreeNode;
  value: string | null;
  onSelect: (path: string) => void;
}) {
  const [open, setOpen] = React.useState(true);

  if (node.isFile) {
    return (
      <div
        onClick={() => onSelect(node.path)}
        className={cn(
          "cursor-pointer px-2 py-1 rounded hover:bg-muted flex items-center gap-1",
          value === node.path && "bg-background text-primary"
        )}
      >
          <FileIcon size={15} /> {node.name}
      </div>
    );
  }

  return (
    <div className="ml-2">
      <div
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer font-medium px-2 py-1 hover:bg-muted rounded flex items-center gap-1"
      >
        <Folder size={15} /> {node.name}
      </div>
      {open && node.children && (
        <div className="ml-4">
          {node.children.map((child) => (
            <TreeItem
              key={child.path}
              node={child}
              value={value}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
