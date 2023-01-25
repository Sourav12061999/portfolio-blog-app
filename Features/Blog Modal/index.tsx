import { ChangeEvent, useState } from "react";
import { Button, Modal, Textarea, MultiSelect } from "@mantine/core";
import Input from "Components/Input";
import { Topics } from "@Constants";
import { IconSelectOption, IconSelectChips } from "Components/Icon Select";

export interface BlogDataType {
  title: string;
  description: string;
  topics: string[];
}
interface PropTypes {
  onSubmit?: (data: BlogDataType) => void;
}
function BlogModal({ onSubmit }: PropTypes) {
  const [isOpened, setIsOpened] = useState(false);
  const [blogData, setBlogData] = useState<BlogDataType>({
    title: "",
    description: "",
    topics: ["Javascript"],
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    key?: string
  ) => {
    if (!key) return;
    setBlogData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };
  return (
    <>
      <Button
        mb={"md"}
        style={{ width: "100px" }}
        onClick={() => setIsOpened(true)}
      >
        Create
      </Button>
      <Modal
        opened={isOpened}
        onClose={() => setIsOpened(false)}
        title="Create a Blog"
        zIndex={1001}
      >
        <Input
          label="Blog Title"
          isRequired
          type="text"
          size="md"
          placeHolder="Title"
          isError={false}
          errorMsg=""
          stateKey="title"
          onChange={handleChange}
        />
        <Textarea
          placeholder="Your comment"
          label="Your comment"
          withAsterisk
          minRows={4}
          maxRows={10}
          onChange={(e) => {
            handleChange(e, "description");
          }}
        />
        <MultiSelect
          data={Topics}
          valueComponent={IconSelectOption}
          itemComponent={IconSelectChips}
          searchable
          defaultValue={["Javascript"]}
          placeholder="Pick topics"
          label="Topics of your blog"
          mt={10}
          clearable
          withAsterisk
          onChange={(e) => {
            setBlogData((prev) => ({
              ...prev,
              ["topics"]: e,
            }));
          }}
        />
        <Button
          mt={"lg"}
          fullWidth
          onClick={() => {
            if (!onSubmit) {
              return console.log(blogData);
            }

            onSubmit(blogData);
          }}
        >
          Submit
        </Button>
      </Modal>
    </>
  );
}

export default BlogModal;
