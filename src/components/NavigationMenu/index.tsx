import { Gear, House, List, UserList } from "@phosphor-icons/react";
import * as Styles from "./styles";
import { Link, useLocation } from "react-router-dom";
export default function NavigationMenu() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Styles.Container>
      <Link to="/">
        <Styles.Button variant={pathname === "/"}>
          <House size={24} />
        </Styles.Button>
      </Link>
      <Link to="/clients">
        <Styles.Button variant={pathname === "/clients"}>
          <UserList size={24} />
        </Styles.Button>
      </Link>
      <Link to="/report">
        <Styles.Button variant={pathname === "/report"}>
          <List size={24} />
        </Styles.Button>
      </Link>
      <Styles.Button>
        <Gear size={24} />
      </Styles.Button>
    </Styles.Container>
  );
}
