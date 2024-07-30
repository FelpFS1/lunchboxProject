import { Eye, Funnel, Pencil, Trash } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";

import Summary from "../../components/Summary";
import * as Styles from "./styles";
import DataTable from "../../components/DataTable";
import AddCustomerButton from "./components/AddCustomerButton";

export default function Clients() {
  return (
    <Styles.ClientsContainer>
      <Summary
        firstCard={{ title: "pessoal", content: "100" }}
        secondCard={{ title: "obras", content: "10" }}
        thirdCard={{ title: "total", content: "110" }}
      />
      <Styles.OptionsContainer>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Styles.FilterButton>
              <Funnel size={24} />
            </Styles.FilterButton>
          </Popover.Trigger>
          <Popover.Portal>
            <Styles.PopoverContent>
              <h4>Filtre</h4>
              <form action="">
                <Styles.RadioRoot>
                  <Styles.Group>
                    <Styles.RadioItem value="all" id="all">
                      <Styles.RadioIndicator />
                    </Styles.RadioItem>
                    <label htmlFor="all">Todos</label>
                  </Styles.Group>
                  <Styles.Group>
                    <Styles.RadioItem value="person" id="person">
                      <Styles.RadioIndicator />
                    </Styles.RadioItem>
                    <label htmlFor="person">Pessoal</label>
                  </Styles.Group>
                  <Styles.Group>
                    <Styles.RadioItem value="constructions" id="constructions">
                      <Styles.RadioIndicator />
                    </Styles.RadioItem>
                    <label htmlFor="constructions">Obras</label>
                  </Styles.Group>
                </Styles.RadioRoot>
                <Styles.PopoverButtonsContainer>
                  <Styles.CancelButton>Cancelar</Styles.CancelButton>
                  <Styles.FilterCustomerButton>
                    Filtrar
                  </Styles.FilterCustomerButton>
                </Styles.PopoverButtonsContainer>
              </form>
              <Styles.PopoverArrow />
            </Styles.PopoverContent>
          </Popover.Portal>
        </Popover.Root>
        <AddCustomerButton />
      </Styles.OptionsContainer>
      <DataTable>
        <tbody>
          <tr>
            <td>OSMAR</td>
            <td>VALE DAS PALMEIRAS</td>
            <td>OBRA</td>
            <Styles.TdButtons>
              <Eye size={20} />
              <Pencil size={20} />
              <Trash size={20} />
            </Styles.TdButtons>
          </tr>
          <tr>
            <td>Heitor</td>
            <td>Del Rey</td>
            <td>OBRA</td>
            <Styles.TdButtons>
              <Eye size={20} />
              <Pencil size={20} />
              <Trash size={20} />
            </Styles.TdButtons>
          </tr>
        </tbody>
      </DataTable>
    </Styles.ClientsContainer>
  );
}
