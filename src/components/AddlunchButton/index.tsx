import { CaretDown, CaretUp, Plus } from "@phosphor-icons/react";
import * as Styles from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import AddModal from "../AddModal";
import * as Select from "@radix-ui/react-select";
import SelectItem from "./components/SelectItem";
import { FormEvent } from "react";

export default function AddlunchButton() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Styles.ButtonContainer>
          <Plus />
        </Styles.ButtonContainer>
      </Dialog.Trigger>
      <AddModal>
        <Styles.ModalTitle>Adicionar marmitas</Styles.ModalTitle>
        <Styles.FormContainer onSubmit={handleSubmit}>
          <Select.Root>
            <Styles.SelectTrigger aria-label="Food">
              <Select.Value placeholder="Select food..." />

              <Select.Icon className="SelectIcon">
                <CaretDown size={24} />
              </Select.Icon>
            </Styles.SelectTrigger>
            <Select.Portal>
              <Styles.SelectContent>
                <Styles.SelectScrollButton>
                  <CaretUp size={24} />
                </Styles.SelectScrollButton>
                <Select.Viewport>
                  <Select.Group>
                    <SelectItem value="apple">apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Styles.SelectContent>
            </Select.Portal>
          </Select.Root>
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
