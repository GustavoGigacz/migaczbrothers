import styled from "styled-components";
import MigaczBrothersIcon from "../../icons/MigaczBrothersIcon";
import Link from "next/link";

const DesktopNavbar = (): JSX.Element => {
  return (
    <NavContainer>
      <Nav>
        <MigaczBrothersIcon />
        <NavList>
          <NavLink>
            <Link href={"/"}>Home</Link>
          </NavLink>
          <NavLink>
            <Link href={"/"}>Service</Link>
          </NavLink>
          <NavLink>
            <Link href='/about-us'> About us</Link>
          </NavLink>
          <ContactButton>
            <Link href={"./contact-us"}> Contact Us</Link>
          </ContactButton>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: var(--dark-primary);
  width: 100%;
  padding: 24px 0;
`;

const Nav = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: var(--dark-primary);

  @media (max-width: 980px) {
    padding: 8px 16px;
  }
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
  font-size: 16px;
`;
export default DesktopNavbar;
