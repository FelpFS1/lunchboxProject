import { Gear, House, List, UserList } from "@phosphor-icons/react";
import * as Styles from "./styles";
import { Link, useLocation } from "react-router-dom";
export default function NavigationMenu() {
  const { pathname } = useLocation();

  return (
    <Styles.Container>
      <Link to="/">
        <Styles.Button $variant={pathname === "/" ? "true" : "false"}>
          <House size={24} />
          <span>HOME</span>
        </Styles.Button>
      </Link>
      <Link to="/clients">
        <Styles.Button $variant={pathname === "/clients" ? "true" : "false"}>
          <UserList size={24} />
        </Styles.Button>
      </Link>
      <Link to="/report">
        <Styles.Button $variant={pathname === "/report" ? "true" : "false"}>
          <List size={24} />
        </Styles.Button>
      </Link>
      <Styles.Button>
        <Gear size={24} />
      </Styles.Button>
    </Styles.Container>
  );
}
