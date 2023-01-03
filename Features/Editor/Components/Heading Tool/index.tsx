import {} from "react";
import { RichTextEditor } from "@mantine/tiptap";
function HeadingTool() {
  return (
    <RichTextEditor.ControlsGroup>
      <RichTextEditor.H1 />
      <RichTextEditor.H2 />
      <RichTextEditor.H3 />
      <RichTextEditor.H4 />
    </RichTextEditor.ControlsGroup>
  );
}

export default HeadingTool;
