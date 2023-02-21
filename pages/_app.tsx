import GlobalStyle from "../components/styles/globalStyles";
import Variables from "../components/styles/variables";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/ Footer";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Variables />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
