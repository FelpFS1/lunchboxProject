import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const ButtonContainer = styled.button`
  width: 48px;
  height: 36px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["gray-400"]};
  transition: all 0.2s ease-in-out;
  svg {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalTitle = styled(Dialog.Title)`
  color: ${(props) => props.theme.white};
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  align-items: center;
  width: 100%;
  select {
    cursor: pointer;
    option {
      color: red;
    }
  }

  select,
  input {
    width: 100%;
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 0.8rem 0.5rem;
    border: 0;
    border-radius: 8px;

    -moz-appearance: textfield;
    appearance: textfield;
    &::placeholder {
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;

export const AddButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme["green-500"]};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
