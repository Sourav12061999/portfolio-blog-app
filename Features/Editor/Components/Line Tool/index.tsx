import {} from "react";
import { RichTextEditor } from "@mantine/tiptap";
function LineTool() {
  return (
    <RichTextEditor.ControlsGroup>
      <RichTextEditor.Bold />
      <RichTextEditor.Italic />
      <RichTextEditor.Underline />
      <RichTextEditor.Strikethrough />
      <RichTextEditor.ClearFormatting />
      <RichTextEditor.Highlight />
      <RichTextEditor.Code />
    </RichTextEditor.ControlsGroup>
  );
}

export default LineTool;
