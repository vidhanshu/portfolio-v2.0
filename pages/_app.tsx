import "@/styles/globals.scss";
import "@/styles/layout.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import ThemeProvider from "@/context/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
      <ToastContainer />
    </ThemeProvider>
  );
}
