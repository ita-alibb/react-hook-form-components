import { FieldValues } from "react-hook-form";
import { CommonInputProps } from "./CommonInputProps";
import { LabelValueOption } from "./LabelValueOption";

export type TypeaheadOptions = LabelValueOption[] | string[];

interface CommonTypeaheadProps<T extends FieldValues> extends Omit<CommonInputProps<T>, "onChange"> {
  multiple?: boolean;
  defaultSelected?: TypeaheadOptions;
  onChange?: (selected: string | string[]) => void;
}

export { CommonTypeaheadProps };
