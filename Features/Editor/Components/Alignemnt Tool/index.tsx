import {} from "react";
import { RichTextEditor } from "@mantine/tiptap";
function AlignmentTool() {
  return (
    <RichTextEditor.ControlsGroup>
      <RichTextEditor.AlignLeft />
      <RichTextEditor.AlignCenter />
      <RichTextEditor.AlignJustify />
      <RichTextEditor.AlignRight />
    </RichTextEditor.ControlsGroup>
  );
}

export default AlignmentTool;
