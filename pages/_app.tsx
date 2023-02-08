import GlobalStyle from "../components/styles/globalStyles";
import Variables from "../components/styles/variables";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/ Footer";

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
