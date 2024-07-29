import { FileText } from "@phosphor-icons/react";
import DataTable from "../../components/DataTable";
import SearchForm from "../../components/SearchForm";
import * as Styles from "./styles";

export default function WeeklyReport() {
  return (
    <Styles.ReportContainer>
      <Styles.ReportTitle>Relatórios</Styles.ReportTitle>
      <Styles.ReportMain>
        <SearchForm />
        <DataTable>
          <tbody>
            <td>OSMAR</td>
            <td>VALE DAS PALMEIRAS</td>
            <td>OBRA</td>
            <td>
              <FileText size={20} />
            </td>
          </tbody>
        </DataTable>
      </Styles.ReportMain>
    </Styles.ReportContainer>
  );
}
