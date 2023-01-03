import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import AlignmentTool from "./Components/Alignemnt Tool";
import ParaTool from "./Components/Para Tool";
import HeadingTool from "./Components/Heading Tool";
import LineTool from "./Components/Line Tool";
import LinkTool from "./Components/Link Tool";

interface PropTypes {
  content?: string;
}
function Editor({ content }: PropTypes) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: content || "",
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <LineTool />
        <HeadingTool />
        <ParaTool />
        <LinkTool />
        <AlignmentTool />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content
        onChange={(e) => {
          console.warn(e.currentTarget);
        }}
      />
    </RichTextEditor>
  );
}

export default Editor;
