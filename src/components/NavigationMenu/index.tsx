import {
  CaretLeft,
  CaretRight,
  Gear,
  House,
  List,
  UserList,
} from "@phosphor-icons/react";

import * as Dialog from "@radix-ui/react-dialog";
import { Link, useLocation } from "react-router-dom";

import * as Styles from "./styles";

import Modal from "../Modal";
import EditAvatar from "./components/EditAvatar";
import { useState } from "react";

export default function NavigationMenu() {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Styles.Container data-state={isOpen}>
      <Styles.ToggleMenu onClick={handleToggleMenu}>
        {isOpen ? <CaretLeft /> : <CaretRight />}
      </Styles.ToggleMenu>
      <Link to="/">
        <Styles.Button
          $variant={pathname === "/" ? "true" : "false"}
          onClick={handleToggleMenu}
        >
          <House size={24} />
          <span>Home</span>
        </Styles.Button>
      </Link>
      <Link to="/clients">
        <Styles.Button
          $variant={pathname === "/clients" ? "true" : "false"}
          onClick={handleToggleMenu}
        >
          <UserList size={24} />
          <span>Clientes</span>
        </Styles.Button>
      </Link>
      <Link to="/report">
        <Styles.Button
          $variant={pathname === "/report" ? "true" : "false"}
          onClick={handleToggleMenu}
        >
          <List size={24} />
          <span>Relatórios</span>
        </Styles.Button>
      </Link>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Styles.Button onClick={handleToggleMenu}>
            <Gear size={24} />
            <span>Configurações</span>
          </Styles.Button>
        </Dialog.Trigger>
        <Modal title="Configurações">
          <Styles.EditProfileContainer>
            <div>
              <img src="https://i.ibb.co/vcRV7wr/9334402.jpg" alt="" />
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
