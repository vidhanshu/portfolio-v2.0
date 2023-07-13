import { useTheme } from "@/context/theme";
import Head from "next/head";
import React from "react";

type HeadTagForSEOProps = {
  title: string;
  description: string;
  keywords?: string;
};
function HeadTagForSEO({ title, description, keywords }: HeadTagForSEOProps) {
  const { theme } = useTheme();
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={theme === "dark" ? "#000" : "#fff"} />

      {/* open graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://vidhanshu.vercel.app/_next/image?url=%2Fassets%2Fvidhanshu.png&w=750&q=75"
      />
      <meta property="og:url" content="https://vidhanshu.vercel.app" />

      {/* twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://vidhanshu.vercel.app/_next/image?url=%2Fassets%2Fvidhanshu.png&w=750&q=75"
      />

      {/* author tag */}
      <meta name="author" content="Vidhanshu Borade" />

      {/* description */}
      <meta name="description" content={description} />
      {/* keywords */}
      <meta
        name="keywords"
        content={
          keywords
            ? keywords
            : "Vidhanshu Borade, Vidhanshu, portfolio, borade, Full-Stack Web Developer, Android Developer, Programming, Software Design, Qualifications, Courses, Achievements, Experience, Freelancer, Student, Competitive Programmer, Competitive, Programming"
        }
      />
    </Head>
  );
}

export default HeadTagForSEO;
