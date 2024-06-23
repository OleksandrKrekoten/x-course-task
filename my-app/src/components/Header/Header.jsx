import { AuthContext } from "../../contexts/AuthContext";
import { Container } from "../Container.styled";
import {
  SiteHeader,
  HeaderWrapper,
  Logo,
  LogoName,
  HeaderUserInfo,
  Cart,
  Btn,
  User,
} from "./Header.styled";
import { useContext } from "react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  const storedUsername = localStorage.getItem("username");

  const handleSignOut = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <SiteHeader>
      <Container>
        <HeaderWrapper>
          <Logo>
            <LogoName>js band store</LogoName> / Krekoten Oleksandr
          </Logo>
          {isLoggedIn && (
            <HeaderUserInfo>
              <Cart to="/cart">
                <img src="/cart.svg" alt="cart" width="50" />
              </Cart>
              <Btn to="/" onClick={handleSignOut}>
                Sign-Out
              </Btn>
              <User>
                <img src="/avatar.png" alt="user avatar" width="40" />
                <p>{storedUsername}</p>
              </User>
            </HeaderUserInfo>
          )}
        </HeaderWrapper>
      </Container>
    </SiteHeader>
  );
};
