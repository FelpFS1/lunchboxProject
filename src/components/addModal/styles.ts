import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 25vw;
  border-radius: 6px;
  padding: 1rem;
  background: ${(props) => props.theme["gray-400"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseModalButton = styled(Dialog.Close)`
  position: fixed;
  right: 1rem;
  top: 1rem;
  line-height: 0;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
  }
`;
export const ModalTitle = styled(Dialog.Title)`
  color: ${(props) => props.theme.white};
`;
