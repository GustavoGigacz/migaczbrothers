import styled from "styled-components";

import MigaczBrothersIcon from "../../icons/MigaczBrothersIcon";
import MobileMenuIcon from "../../icons/MobileMenuIcon";
import SunIcon from "../../icons/SunIcon";

import MobileNavbarMenu from "./MobileNavbarMenu";

const MobileNavbar = (): JSX.Element => {
  return (
    <>
      <NavbarMobileContainer>
        <NavbarMobileContent>
          <ButtonSunIcon>
            <SunIcon />
          </ButtonSunIcon>
          <IconContent>
            <MigaczBrothersIcon />
          </IconContent>
          <ButtonMobileContent>
            <MobileMenuIcon />
          </ButtonMobileContent>
        </NavbarMobileContent>
      </NavbarMobileContainer>
      <MobileNavbarMenu />
    </>
  );
};

const NavbarMobileContainer = styled.div`
  background-color: var(--dark-primary);
  width: 100%;
`;

const NavbarMobileContent = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
`;

const ButtonSunIcon = styled.div`
  justify-self: flex-start;
`;

const IconContent = styled.div`
  justify-self: center;
`;

const ButtonMobileContent = styled.button`
  justify-self: flex-end;
`;

export default MobileNavbar;
