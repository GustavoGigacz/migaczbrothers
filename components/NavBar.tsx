import styled from "styled-components";
import MigaczBrothersIcon from "./icons/MigaczBrother";

const NavBar = (): JSX.Element => {
  return (
    <NavContainer>
      <Nav>
        <MigaczBrothersIcon />
        <NavList>
          <NavLink>Início</NavLink>
          <NavLink>Sobre nós</NavLink>
          <NavLink>Depoimentos</NavLink>
          <ContactButton>Contacte-nos</ContactButton>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background: var(--dark-primary);
  width: 100%;
  padding: 24px 0;
`;

const Nav = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavLink = styled.li`
  color: var(--white-color-font);
  font-size: 16px;
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`;

const ContactButton = styled.button`
  width: 220px;
  height: 42px;
  background-color: var(--green-color);
  color: var(--white-color-font);
  border-radius: var(--rounded);
`;
export default NavBar;
