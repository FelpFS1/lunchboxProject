import DataTable from "../../components/DataTable";
import SearchForm from "../../components/SearchForm";
import Summary from "../../components/Summary";
import * as Styles from "./styles";
export default function Home() {
  return (
    <Styles.HomeContainer>
      <Summary />
      <SearchForm />
      <DataTable />
    </Styles.HomeContainer>
  );
}
