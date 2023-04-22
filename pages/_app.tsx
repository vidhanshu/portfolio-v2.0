import "@/styles/globals.scss";
import "@/styles/layout.scss";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
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
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
