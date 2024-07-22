import { Eye, Funnel, Pencil, Trash } from "@phosphor-icons/react";
import Summary from "../../components/Summary";

import * as Styles from "./styles";
import DataTable from "../../components/DataTable";

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
        <Styles.AddCustomerButton>Adicionar</Styles.AddCustomerButton>
      </Styles.OptionsContainer>
      <DataTable>
        <tbody>
          <tr>
            <td>OSMAR</td>
            <td>VALE DAS PALMEIRAS</td>
            <td>OBRA</td>
            <Styles.TdButtons>
              <Eye size={24} />
              <Pencil size={24} />
              <Trash size={24} />
            </Styles.TdButtons>
          </tr>
          <tr>
            <td>Heitor</td>
            <td>Del Rey</td>
            <td>OBRA</td>
            <Styles.TdButtons>
              <Eye size={24} />
              <Pencil size={24} />
              <Trash size={24} />
            </Styles.TdButtons>
          </tr>
        </tbody>
      </DataTable>
    </Styles.ClientsContainer>
  );
}
