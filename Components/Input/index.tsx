import { ChangeEvent, useState } from "react";
import { TextInput, Tooltip } from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";
import { MantineSize } from "@mantine/core";

interface PropType {
  label: string;
  description?: string;
  isRequired: boolean;
  isError: boolean;
  errorMsg: string;
  type: string;
  placeHolder: string;
  size: MantineSize;
  tooltipPos?: FloatingPosition;
  showTooltip?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, key?: string) => void;
  stateKey: string;
  toolTipMsg?: string;
}
function InputComp({
  label,
  description,
  isRequired,
  isError,
  errorMsg,
  type,
  placeHolder,
  size,
  tooltipPos,
  showTooltip,
  onChange,
  stateKey,
  toolTipMsg,
}: PropType) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <TextInput
      mt="xl"
      onChange={(e) => {
        onChange(e, stateKey);
      }}
      label={label}
      placeholder={placeHolder}
      description={description}
      error={isError && errorMsg}
      inputWrapperOrder={["label", "description", "input", "error"]}
      size={size}
      withAsterisk={isRequired}
      required={isRequired}
      type={type}
      onFocus={() => setIsFocused(showTooltip || false)}
      onBlur={() => setIsFocused(false)}
      inputContainer={(children) => (
        <Tooltip
          label={toolTipMsg}
          position={tooltipPos || "right"}
          opened={isFocused}
          color="black"
          withArrow
        >
          {children}
        </Tooltip>
      )}
    />
  );
}

export default InputComp;
