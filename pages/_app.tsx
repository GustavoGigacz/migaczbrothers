import GlobalStyle from "../components/styles/globalStyles";
import Variables from "../components/styles/variables";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Variables />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
