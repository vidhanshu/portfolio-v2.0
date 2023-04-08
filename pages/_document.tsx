import { Footer, Header } from "@/components";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />

        <Main />
        <NextScript />

        <Footer />
      </body>
    </Html>
  );
}
