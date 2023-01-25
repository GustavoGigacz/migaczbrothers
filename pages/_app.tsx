import GlobalStyle from "../components/styles/globalStyles";
import Variables from "../components/styles/variables";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <Variables />
    </>
  );
}
