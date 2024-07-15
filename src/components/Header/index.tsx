import * as Styles from "./styles";
import logoImg from "../../assets/lunch-logo.svg";
import Profile from "../Profile";

export default function Header() {
  return (
    <Styles.Container>
      <Styles.Logo>
        <img src={logoImg} alt="Logo" />
      </Styles.Logo>
      <Profile />
    </Styles.Container>
  );
}
