import { MagnifyingGlass } from "@phosphor-icons/react";
import * as Styles from "./styles";
import AddlunchButton from "../AddlunchButton";
import { useState } from "react";

export default function SearchForm() {
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <Styles.SearchFormContainer>
      <AddlunchButton />
      {isShow && (
        <>
          <input type="text" placeholder="Busque por nomes ou obras" />
          <Styles.SearchButton type="submit">
            <MagnifyingGlass size={24} /> Buscar
          </Styles.SearchButton>
        </>
      )}
    </Styles.SearchFormContainer>
  );
}
