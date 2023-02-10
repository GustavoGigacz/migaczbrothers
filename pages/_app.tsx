import GlobalStyle from "../components/styles/globalStyles";
import Variables from "../components/styles/variables";
import type { AppProps } from "next/app";
import NavBar from "../components/shared/Navbar/NavBar";
import Footer from "../components/shared/Footer/ Footer";
import MobileNavbar from "../components/shared/Navbar/MobileNavbar";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Variables />
    {/* <NavBar /> */}
    <MobileNavbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
