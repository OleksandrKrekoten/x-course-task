import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FlexWrapper } from "./PageLayout";

export const Layout = () => {
  return (
    <FlexWrapper>
      <Header />
      <Outlet />
      <Footer />
    </FlexWrapper>
  );
};
