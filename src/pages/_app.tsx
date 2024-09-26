import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
      <ToastContainer />{" "}
      {/* Add the ToastContainer to render toasts globally */}
    </PrimeReactProvider>
  );
}
