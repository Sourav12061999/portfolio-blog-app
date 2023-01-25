import { ChangeEvent } from "react";
import { Button, Modal, Textarea, MultiSelect } from "@mantine/core";
import Input from "Components/Input";
import { Topics } from "@Constants";
import { IconSelectOption, IconSelectChips } from "Components/Icon Select";

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
      <MultiSelect
        data={Topics}
        limit={20}
        valueComponent={IconSelectOption}
        itemComponent={IconSelectChips}
        searchable
        defaultValue={["Javascript"]}
        placeholder="Pick topics"
        label="Topics of your blog"
        // {...props}
      />
      <Button mt={"lg"} fullWidth>
        Submit
      </Button>
    </Modal>
  );
}

export default BlogModal;
