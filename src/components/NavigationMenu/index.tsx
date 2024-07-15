import { Gear, House, List, UserList } from "@phosphor-icons/react";
import * as Styles from "./styles";
export default function NavigationMenu() {
  return (
    <Styles.Container>
      <Styles.Button>
        <House size={24} />
      </Styles.Button>
      <Styles.Button>
        <UserList size={24} />
      </Styles.Button>
      <Styles.Button>
        <List size={24} />
      </Styles.Button>
      <Styles.Button>
        <Gear size={24} />
      </Styles.Button>
    </Styles.Container>
  );
}
