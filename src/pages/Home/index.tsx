import DataTable from "../../components/DataTable";
import SearchForm from "../../components/SearchForm";
import Summary from "../../components/Summary";
import * as Styles from "./styles";
export default function Home() {
  return (
    <Styles.HomeContainer>
      <Summary
        firstCard={{ title: "Quantidade mensal", content: "42" }}
        secondCard={{ title: "Quantidade semanal", content: "42" }}
        thirdCard={{ title: "Quantidade diaria", content: "7" }}
      />
      <SearchForm />
      <DataTable>
        <tbody>
          <tr>
            <td>OSMAR</td>
            <td>VALE DAS PALMEIRAS</td>
            <td>19 MARMITAS</td>
            <td>08/07/2024</td>
          </tr>
          <tr>
            <td>aaaa</td>
            <td>nnnn</td>
            <td>cccc</td>
            <td>oooo</td>
          </tr>
        </tbody>
      </DataTable>
    </Styles.HomeContainer>
  );
}
