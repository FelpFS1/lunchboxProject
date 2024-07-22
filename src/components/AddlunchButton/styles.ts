import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";

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

export const SelectTrigger = styled(Select.Trigger)`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 0.8rem 0.5rem;

  text-align: left;
  background-color: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-100"]};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
export const SelectContent = styled(Select.Content)`
  position: relative;

  display: flex;
  margin: 2.5rem auto;
  width: 80%;
  overflow: hidden;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectScrollButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: purple;
  cursor: default;
`;
