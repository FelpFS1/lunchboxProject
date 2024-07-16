import { MagnifyingGlass } from "@phosphor-icons/react";
import * as Styles from "./styles";

export default function SearchForm() {
  return (
    <Styles.SearchFormContainer>
      <input type="text" placeholder="Busque por nomes ou obras" />
      <button type="submit">
        <MagnifyingGlass size={24} /> Buscar
      </button>
    </Styles.SearchFormContainer>
  );
}
