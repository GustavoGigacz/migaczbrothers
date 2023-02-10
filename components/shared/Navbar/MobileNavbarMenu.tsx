import styled from "styled-components";

import CloseIcon from "../../icons/CloseIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import MailIcon from "../../icons/MailIcon";

const MobileNavbarMenu = (): JSX.Element => {
  return (
    <MobileMenuContainer>
      <MobilmeMenuContent>
        <CloseIconButton>
          <CloseIcon />
        </CloseIconButton>
        <NavLinkContent>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinkContent>
        <IconContent>
          <LinkedinIcon />
          <MailIcon />
        </IconContent>
      </MobilmeMenuContent>
    </MobileMenuContainer>
  );
};

const MobileMenuContainer = styled.div`
  background-color: var(--dark-primary);
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  padding-top: 22px;

  position: fixed;
  z-index: 999;
`;
const MobilmeMenuContent = styled.div``;
const CloseIconButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`;
const NavLinkContent = styled.ul`
  text-align: center;
  padding: 240px 16px 60px;
  display: grid;
  gap: 30px;
`;
const NavLink = styled.li`
  color: var(--primary-color-font);
  font-size: 72px;
  font-weight: bold;
`;
const IconContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0 16px;
`;

export default MobileNavbarMenu;
