import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import NavigationMenu from "../../components/NavigationMenu";
import * as Styles from "./styles";
export default function RootLayout() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <Styles.MainLayout>
        <Outlet />
      </Styles.MainLayout>
    </>
  );
}
