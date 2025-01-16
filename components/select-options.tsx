"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type OptionTypes = {
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  onChange: (value: string) => void;
};

const SelectOptions = (options: OptionTypes) => {
  return (
    <Select onValueChange={(value) => options.onChange(value)}>
      <SelectTrigger>
        <SelectValue placeholder={options.placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.options.map((option, index) => {
          return (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectOptions;
