import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

export const SelectItem = styled(Select.Item)`
  width: 100%;
  color: ${(props) => props.theme["gray-500"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 0;
  padding: 0.8rem 0.5rem;
  position: relative;
  user-select: none;
  outline: none;

  &[data-disabled] {
    color: red;
    pointer-events: none;
  }

  &[data-highlighted]:hover {
    outline: none;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["gray-100"]};
  }
`;

export const ItemIndicator = styled(Select.ItemIndicator)`
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["green-300"]};
`;
