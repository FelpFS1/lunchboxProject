import * as Dialog from "@radix-ui/react-dialog";
import * as Styles from "./styles";
import AddModal from "../../../../components/AddModal";
import { HardHat, User } from "@phosphor-icons/react";
import { useState } from "react";
export default function AddCustomerButton() {
  const [customerRadioValue, setCustomerRadioValue] = useState<
    string | undefined
  >(undefined);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Styles.AddCustomerButtonContainer>
          Adicionar
        </Styles.AddCustomerButtonContainer>
      </Dialog.Trigger>
      <AddModal title="Novo cliente">
        <Styles.FormContainer>
          <Styles.CustomerType
            onValueChange={(value) => setCustomerRadioValue(value)}
          >
            <Styles.CustomerTypeButton value="person" variant="person">
              <User size={24} />
              Pessoal
            </Styles.CustomerTypeButton>
            <Styles.CustomerTypeButton
              value="constructions"
              variant="constructions"
            >
              <HardHat size={24} />
              Obra
            </Styles.CustomerTypeButton>
          </Styles.CustomerType>
          {customerRadioValue === "person" && (
            <>
              <input type="text" placeholder="Nome do cliente" />
              <input type="text" placeholder="Endereço do cliente" />
              <input type="tel" placeholder="Número de telefone" />

              <Styles.AddCustomerButtonForm>
                Adicionar
              </Styles.AddCustomerButtonForm>
            </>
          )}
          {customerRadioValue === "constructions" && (
            <>
              <input type="text" placeholder="Nome do responsável" />
              <input type="text" placeholder="Nome da empresa" />
              <input type="text" placeholder="Local da obra" />
              <input type="tel" placeholder="Número de telefone" />

              <Styles.AddCustomerButtonForm>
                Adicionar
              </Styles.AddCustomerButtonForm>
            </>
          )}
        </Styles.FormContainer>
      </AddModal>
    </Dialog.Root>
  );
}
