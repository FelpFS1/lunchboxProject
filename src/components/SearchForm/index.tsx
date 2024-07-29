import { MagnifyingGlass } from "@phosphor-icons/react";
import * as Styles from "./styles";

import { ReactNode } from "react";

interface SearchFormProps {
  children?: ReactNode;
}
export default function SearchForm({ children }: SearchFormProps) {
  return (
    <Styles.SearchFormContainer>
      {children}

      <input type="text" placeholder="Busque por nomes ou obras" />
      <Styles.SearchButton type="submit">
        <MagnifyingGlass size={24} /> Buscar
      </Styles.SearchButton>
    </Styles.SearchFormContainer>
  );
}
