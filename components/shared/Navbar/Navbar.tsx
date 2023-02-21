import styled from "styled-components";
import DesktopNavbar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavbar";

const Navbar = (): JSX.Element => {
  return (
    <>
      <DisplayDesktop>
        <DesktopNavbar />
      </DisplayDesktop>
      <DisplayMobile>
        <MobileNavbar />
      </DisplayMobile>
    </>
  );
};

const DisplayMobile = styled.div`
  @media (min-width: 980px) {
    display: none;
  }
`;

const DisplayDesktop = styled.div`
  @media (max-width: 980px) {
    display: none;
  }
`;

export default Navbar;
