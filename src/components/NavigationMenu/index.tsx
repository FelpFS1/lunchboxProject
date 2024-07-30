import { Gear, House, List, UserList } from "@phosphor-icons/react";

import * as Dialog from "@radix-ui/react-dialog";
import { Link, useLocation } from "react-router-dom";

import * as Styles from "./styles";
import ProfileImg from "../../assets/exemploProfile.jpg";

import Modal from "../Modal";
import EditAvatar from "./components/EditAvatar";
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
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Styles.Button>
            <Gear size={24} />
          </Styles.Button>
        </Dialog.Trigger>
        <Modal title="Configurações">
          <Styles.EditProfileContainer>
            <div>
              <img src={ProfileImg} alt="" />
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Editar perfil</button>
                </Dialog.Trigger>
                <Modal title="Selecione seu avatar">
                  <EditAvatar />
                </Modal>
              </Dialog.Root>
            </div>
          </Styles.EditProfileContainer>
        </Modal>
      </Dialog.Root>
    </Styles.Container>
  );
}
