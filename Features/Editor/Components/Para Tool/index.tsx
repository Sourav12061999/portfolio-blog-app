import {} from "react";
import { RichTextEditor } from "@mantine/tiptap";
function ParaTool() {
  return (
    <RichTextEditor.ControlsGroup>
      <RichTextEditor.Blockquote />
      <RichTextEditor.Hr />
      <RichTextEditor.BulletList />
      <RichTextEditor.OrderedList />
      <RichTextEditor.Subscript />
      <RichTextEditor.Superscript />
    </RichTextEditor.ControlsGroup>
  );
}

export default ParaTool;
