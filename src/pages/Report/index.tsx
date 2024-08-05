import { FileText } from "@phosphor-icons/react";
import DataTable from "../../components/DataTable";
import SearchForm from "../../components/SearchForm";
import * as Dialog from "@radix-ui/react-dialog";
import * as Styles from "./styles";
import Modal from "../../components/Modal";
import Calendar from "./components/Calendar";

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
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <FileText size={20} />
                </Dialog.Trigger>
                <Modal title="Data do relatório">
                  <Calendar />
                </Modal>
              </Dialog.Root>
            </td>
          </tbody>
        </DataTable>
      </Styles.ReportMain>
    </Styles.ReportContainer>
  );
}
