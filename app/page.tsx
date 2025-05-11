import Editor from "@/components/Editor";
import Preview from "@/components/Preview";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Editor/>
      </div>
      <div>
        <Preview/>
      </div>
    </div>
  )
}