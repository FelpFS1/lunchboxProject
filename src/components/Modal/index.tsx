import * as Dialog from "@radix-ui/react-dialog";
import * as Styles from "./styles";
import { ReactNode } from "react";
import { X } from "@phosphor-icons/react";

interface ModalProps {
  children: ReactNode;
  title: string;
}
export default function AddModal({ children, title }: ModalProps) {
  return (
    <Dialog.Portal>
      <Styles.Overlay />
      <Styles.Content>
        <Styles.CloseModalButton>
          <X size={24} />
        </Styles.CloseModalButton>
        <Dialog.Description />
        <Styles.ModalTitle>{title}</Styles.ModalTitle>
        {children}
      </Styles.Content>
    </Dialog.Portal>
  );
}
