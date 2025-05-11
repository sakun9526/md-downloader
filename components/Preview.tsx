'use client'

import { useMarkdownStore } from '@/store/useMarkdownStore';
import MarkdownEditor from '@uiw/react-markdown-editor';

function Preview() {
     const markdownValue = useMarkdownStore((state) => state.value)
  return <MarkdownEditor.Markdown source={markdownValue} />;
}

export default Preview