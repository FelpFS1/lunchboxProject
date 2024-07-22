import * as Dialog from "@radix-ui/react-dialog";
import * as Styles from "./styles";
import { ReactNode } from "react";
import { X } from "@phosphor-icons/react";

interface ModalProps {
  children: ReactNode;
}
export default function AddModal({ children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Styles.Overlay />
      <Styles.Content>
        <Styles.CloseModalButton>
          <X size={24} />
        </Styles.CloseModalButton>
        <Dialog.Description />
        {children}
      </Styles.Content>
    </Dialog.Portal>
  );
}
