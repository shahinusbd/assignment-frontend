import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
      <ToastContainer />{" "}
    </PrimeReactProvider>
  );
}
