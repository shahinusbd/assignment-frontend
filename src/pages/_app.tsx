import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux"; // Import Redux Provider

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { store } from "@/features/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the app with Redux Provider */}
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </Provider>
  );
}
