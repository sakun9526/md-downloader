import { create } from "zustand";

type MarkdownState = {
  value: string;
  setValue: (value: string) => void;
};

export const useMarkdownStore = create<MarkdownState>((set) => ({
  value: `# This is a H1  \n## This is a H2  \n###### This is a H6`,
  setValue: (value: string) => set((state) => ({ value: value })),
}));
