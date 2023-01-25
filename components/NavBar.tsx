import styled from "styled-components";
import MigaczBrothersIcon from "./icons/MigaczBrother";

const NavBar = (): JSX.Element => {
  return (
    <NavBarContent>
      <MigaczBrothersIcon />
    </NavBarContent>
  );
};

const NavBarContent = styled.div`
  background: var(--dark-primary);
`;
export default NavBar;
