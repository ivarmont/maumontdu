import React, { FC, useState } from "react";
import {
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from "./styles/Navbar.style";
import LogoImage from "../assets/maumontdu-logo.png";
export const Navbar: FC = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to={"/"}>Home</NavbarLink>
            <NavbarLink to={"/fun"}>Fun</NavbarLink>
            <NavbarLink to={"/blog"}>Blog</NavbarLink>
            <NavbarLink to={"/about"}>About</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {" "}
              {extendNavbar ? <> &#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImage}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick={() => setExtendNavbar(false)} to={"/"}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            to={"/fun"}
          >
            Fun
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            to={"/blog"}
          >
            Blog
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            to={"/about"}
          >
            About
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
