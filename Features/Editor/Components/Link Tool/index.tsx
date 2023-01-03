import {} from "react";
import { RichTextEditor } from "@mantine/tiptap";
function LinkTool() {
  return (
    <RichTextEditor.ControlsGroup>
      <RichTextEditor.Link />
      <RichTextEditor.Unlink />
    </RichTextEditor.ControlsGroup>
  );
}

export default LinkTool;
