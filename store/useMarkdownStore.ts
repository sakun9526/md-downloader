import { create } from "zustand";
import markdownSample from "@/utils/markdownSample";

type MarkdownState = {
  value: string;
  setValue: (value: string) => void;
  fileName: string;
  setFileName: (value: string) => void
}

export const useMarkdownStore = create<MarkdownState>((set) => ({
  value: markdownSample,
  setValue: (value: string) => set(() => ({ value: value })),
  fileName: 'Untitled',
  setFileName: (value:string) => set(() => ({fileName: value}))
}));
