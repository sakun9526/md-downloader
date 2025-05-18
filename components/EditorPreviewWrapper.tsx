"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });
const Preview = dynamic(() => import("@/components/Preview"), { ssr: false });

export default function EditorPreviewWrapper() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Editor />
      </div>
      <div>
        <Preview />
      </div>
    </div>
  );
}
