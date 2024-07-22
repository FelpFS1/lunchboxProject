import { Plus } from "@phosphor-icons/react";
import * as Styles from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import AddModal from "../AddModal";

export default function AddlunchButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Styles.ButtonContainer>
          <Plus />
        </Styles.ButtonContainer>
      </Dialog.Trigger>
      <AddModal>
        <Styles.ModalTitle>Adicionar marmitas</Styles.ModalTitle>
        <Styles.FormContainer action="">
          <select name="" id="">
            <option value="default" defaultChecked>
              Escolha o cliente
            </option>
          </select>
          <input
            type="number"
            name=""
            id=""
            placeholder="Quantidade de marmitas"
          />
          <Styles.AddButton type="submit">Adicionar</Styles.AddButton>
        </Styles.FormContainer>
      </AddModal>
    </Dialog.Root>
  );
}
