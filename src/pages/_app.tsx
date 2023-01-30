import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/pages/app/store/store";
import { useEffect } from "react";
import { useActions } from "@/pages/app/hooks/useActions";

export default function App({ Component, pageProps }: AppProps) {


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
