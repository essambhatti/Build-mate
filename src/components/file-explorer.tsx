import React, { useState } from "react";
import Hint from "./hint";
import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "./ui/button";
import { Check,  CopyIcon } from "lucide-react";
import CodeView from "./code-view";
import { TreeView } from "./tree-view";
import { Breadcrumb } from "./bread-crumb";

type FileCollection = { [path: string]: string };

function buildTree(files: FileCollection): TreeNode[] {
  const root: TreeNode[] = [];

  Object.keys(files).forEach((filePath) => {
    const parts = filePath.split("/");
    let currentLevel = root;

    parts.forEach((part, idx) => {
      const existing = currentLevel.find((n) => n.name === part);

      if (existing) {
        if (!existing.children) existing.children = [];
        currentLevel = existing.children;
      } else {
        const node: TreeNode = {
          name: part,
          path: parts.slice(0, idx + 1).join("/"),
          isFile: idx === parts.length - 1,
          children: idx === parts.length - 1 ? undefined : [],
        };
        currentLevel.push(node);
        currentLevel = node.children || [];
      }
    });
  });

  return root;
}

function getLanguageFromExtension(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase();
  return extension || "text";
}

export interface FileExplorerProps {
  files: FileCollection;
}

const FileExplorer = ({ files }: FileExplorerProps) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(() => {
    const fileKeys = Object.keys(files);
    return fileKeys.length > 0 ? fileKeys[0] : null;
  });

  const [copied, setCopied] = useState(false)

   const handleCopy = () => {
        if (selectedFile && files[selectedFile]) {
            navigator.clipboard.writeText(files[selectedFile]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={30} minSize={15} className="bg-sidebar">
        <TreeView
          data={buildTree(files)}
          value={selectedFile}
          onSelect={(path) => setSelectedFile(path)}
        />
      </ResizablePanel>
      <ResizableHandle className="hover:bg-primary transition-colors" />
      <ResizablePanel defaultSize={70} minSize={70}>
        {selectedFile && files[selectedFile] ? (
          <div className="h-full w-full flex flex-col">
            <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
              {selectedFile && (
                <Breadcrumb
                  path={selectedFile}
                  onSelect={(path) => setSelectedFile(path)}
                />
              )}

              <Hint text="Copy to Clipboard" side="bottom">
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto"
                  onClick={handleCopy}
                  disabled={false}
                >
                {copied ? <Check /> : <CopyIcon />}
                </Button>
              </Hint>
            </div>
            <div className="flex-1 overflow-auto">
              <CodeView
                code={files[selectedFile]}
                lang={getLanguageFromExtension(selectedFile)}
              />
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Select a file to view it`s content
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default FileExplorer;
