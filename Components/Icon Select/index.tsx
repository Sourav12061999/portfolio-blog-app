import { forwardRef } from "react";
import { TopicsTypes } from "@Constants";
import {
  MultiSelect,
  MultiSelectProps,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
} from "@mantine/core";

function IconSelectOption({
  value,
  label,
  onRemove,
  classNames,
  Icon,
  color,
  ...others
}: MultiSelectValueProps & TopicsTypes) {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: "flex",
          cursor: "default",
          alignItems: "center",
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[4]
          }`,
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <Box mr={10} mt={5}>
          <Icon color={color} size={20} />
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: 12 }}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const IconSelectChips = forwardRef<
  HTMLDivElement,
  SelectItemProps & TopicsTypes
>(({ label, value, color, Icon, ...others }, ref) => {
  return (
    <div ref={ref} {...others}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box mr={10} mt={3}>
          <Icon size={20} color={color} />
        </Box>
        <div>{label}</div>
      </Box>
    </div>
  );
});

export { IconSelectOption, IconSelectChips };
