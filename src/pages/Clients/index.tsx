import { Eye, Funnel, Pencil, Trash } from "@phosphor-icons/react";
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
        <Styles.FilterButton>
          <Funnel size={24} />
        </Styles.FilterButton>
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
