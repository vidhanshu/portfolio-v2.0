import "@/styles/globals.scss";
import "@/styles/layout.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import ThemeProvider from "@/context/theme";
import aos from "aos";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    aos.init({
      duration: 1000,
      initClassName: "sb-initial-anim",
      once: true,
      mirror: true,
      offset: 50,
      debounceDelay: 100,
      throttleDelay: 100,
    });
  }, []);
  return (
    <ThemeProvider>
      <>
        <Component {...pageProps} />
        <Analytics />
        <ToastContainer />
      </>
    </ThemeProvider>
  );
}
