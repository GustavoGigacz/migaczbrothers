import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import CloseMobileMenuIcon from "../components/icons/CloseMobileMenuIcon";
import MobileMenuIcon from "../components/icons/MobileMenuIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import EmailIcon from "../components/icons/MailIcon";

const MobileMenu = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggleOpen} aria-label='Open menu'>
        <MobileMenuIcon />
      </Button>
      <AnimatePresence>
        {open ? (
          <MobileNavigationContainer
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <CloseMenuButton onClick={toggleOpen} aria-label='Close menu'>
              <CloseMobileMenuIcon />
            </CloseMenuButton>
            <LinksList>
              <NavItemContainer
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0,
                }}
              >
                <NavigationLink href='/' onClick={closeMenu}>
                  Home
                </NavigationLink>
              </NavItemContainer>
              <NavItemContainer
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.1,
                }}
              >
                <NavigationLink href='/about-us' onClick={closeMenu}>
                  About
                </NavigationLink>
              </NavItemContainer>
              <NavItemContainer
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.2,
                }}
              >
                <NavigationLink href='/contact' onClick={closeMenu}>
                  Contact
                </NavigationLink>
              </NavItemContainer>
            </LinksList>
            <SocialLinksList
              initial={{
                y: 60,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              <li>
                <SocialLinkContainer
                  href='https://www.linkedin.com/company/migacz-brothers'
                  aria-label='Company Linkedin'
                >
                  <LinkedinIcon />
                </SocialLinkContainer>
              </li>
              <li>
                <SocialLinkContainer
                  href='mailto:hello@migaczbrothers.com'
                  aria-label='Company Email'
                >
                  <EmailIcon />
                </SocialLinkContainer>
              </li>
            </SocialLinksList>
          </MobileNavigationContainer>
        ) : null}
      </AnimatePresence>
    </>
  );
};

const Button = styled.button`
  order: 2;
  padding: 7px 5.5px;
  margin: -7px -5.5px;

  @media (min-width: 980px) {
    display: none;
  }
`;

const MobileNavigationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;

  background-color: var(--background-primary);
  color: var(--text-primary);

  padding-top: 22px;
`;

const CloseMenuButton = styled.button`
  border: 0;
  align-self: flex-end;
  padding: 6px;
  margin: -6px 15px -6px -6px;

  path {
    stroke: var(--text-primary) !important;
  }
`;

const LinksList = styled.ul`
  width: 100%;
  text-align: center;
  margin-bottom: 60px;
  margin-top: auto;
`;

const NavigationLink = styled(Link)`
  font-size: 72px;
  font-weight: bold;
`;

const NavItemContainer = styled(motion.li)`
  display: block;
  margin-bottom: 28px;
`;

const SocialLinksList = styled(motion.ul)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: auto;
`;

const SocialLinkContainer = styled(Link)`
  margin: 12px;
  padding: 4px;

  svg {
    scale: 1.1;
  }
`;

export default MobileMenu;
