import styled from "styled-components";

import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";

const Footer = (): JSX.Element => {
  return (
    <FooterSection>
      <FooterContent>
        <FooterContainer>
          <LanguageContent>
            <Language>EN</Language>
            <Language>PT</Language>
          </LanguageContent>
          <IconContent>
            <LinkedinIcon />
            <MailIcon />
          </IconContent>
          <NavContent>
            <NavLink>Home</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Contact Us</NavLink>
          </NavContent>
        </FooterContainer>
        <CopyrightContainer>
          Copyright © 2023 Migacz Brothers
        </CopyrightContainer>
      </FooterContent>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: var(--dark-secondary);
  width: 100%;
`;
const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 44px 16px;
`;
const LanguageContent = styled.ul`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  gap: 30px;
`;
const Language = styled.li`
  color: var(--white-color-font);
  text-decoration: underline;
`;
const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 30px;
  color: var(--white-color-font);
`;
const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 30px;
`;
const NavLink = styled.li`
  color: var(--white-color-font);
`;
const CopyrightContainer = styled.div`
  text-align: center;
  color: var(--secondary-color-font);
`;

export default Footer;
