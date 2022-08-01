import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Form from "../pages/form";
import Index from "../pages/index";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Form />;
  return <Index />;
}

export default MyApp;
