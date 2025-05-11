'use client'

import MarkdownEditor from "@uiw/react-markdown-editor";
import { useMarkdownStore } from "@/store/useMarkdownStore";


function Editor() {
    const markdownValue = useMarkdownStore((state) => state.value)
    const setMarkdownValue = useMarkdownStore((state) => state.setValue)
  return (
    <MarkdownEditor
      value={markdownValue}
      height="588px"
      enablePreview={false}
      onChange={(value) => {
       setMarkdownValue(value)
    }}
    />
  );
}

export default Editor;
