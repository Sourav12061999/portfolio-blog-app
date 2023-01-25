import { ChangeEvent } from "react";
import { Modal, Textarea } from "@mantine/core";
import Input from "Components/Input";

interface PropTypes {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}
function BlogModal({ isOpened, setIsOpened }: PropTypes) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <Modal
      opened={isOpened}
      onClose={() => setIsOpened(false)}
      title="Create a Blog"
      zIndex={1001}
    >
      <Input
        label="Topic"
        isRequired
        type="text"
        size="md"
        placeHolder="Topics"
        isError={false}
        errorMsg=""
        stateKey="topic"
        onChange={handleChange}
      />
      <Textarea
        placeholder="Your comment"
        label="Your comment"
        withAsterisk
        minRows={4}
        maxRows={10}
      />
    </Modal>
  );
}

export default BlogModal;
