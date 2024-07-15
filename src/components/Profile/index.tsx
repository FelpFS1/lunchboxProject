import { User } from "@phosphor-icons/react";
import * as Styles from "./styles";

export default function Profile() {
  return (
    <Styles.Container>
      <Styles.Avatar>
        <User size={24} />
      </Styles.Avatar>
      <span>Felipe</span>
    </Styles.Container>
  );
}
