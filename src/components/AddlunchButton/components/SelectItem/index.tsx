import * as Select from "@radix-ui/react-select";
import * as Styles from "./styles";
import { ReactNode } from "react";
import { Check } from "@phosphor-icons/react";

interface SelectItemProps extends Select.SelectItemProps {
  children: ReactNode;
  value: string;
}
export default function SelectItem({ children, value }: SelectItemProps) {
  return (
    <Styles.SelectItem value={value}>
      <Select.ItemText>{children}</Select.ItemText>
      <Styles.ItemIndicator>
        <Check />
      </Styles.ItemIndicator>
    </Styles.SelectItem>
  );
}
