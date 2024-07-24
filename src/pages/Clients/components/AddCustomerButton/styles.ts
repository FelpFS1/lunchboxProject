import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const AddCustomerButtonContainer = styled.button`
  height: 50px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  padding: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme["gray-400"]};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 0.8rem 0.5rem;
    border: 0;
    border-radius: 8px;
    &::placeholder {
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;

export const CustomerType = styled(RadioGroup.Root)`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

interface CustomerTypeProps {
  variant: "constructions" | "person";
}
export const CustomerTypeButton = styled(RadioGroup.Item)<CustomerTypeProps>`
  width: 50%;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-300"]};

  svg {
    color: ${(props) =>
      props.variant === "person"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === "person"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const AddCustomerButtonForm = styled.button`
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: ${(props) => props.theme["green-500"]};
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  cursor: pointer;
`;
