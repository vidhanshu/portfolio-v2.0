import "aos/dist/aos.css";

import {
  ABOUT_ME_STRING,
  ACHIEVEMENTS_STRING,
  BLOGS_STRING,
  CERTIFICATIONS_STRING,
  CODING_PROFILES_STRING,
  CONTACT_ME_STRING,
  EXPERIENCE_STRING,
  PROJECTS_STRING,
  SKILLS_STRING,
  WHAT_I_DO_STRING,
} from "@/constants";
import {
  AboutMe,
  Achievements,
  Certifications,
  CodingProfiles,
  ContactMe,
  Experience,
  Intro,
  MyBlogs,
  Projects,
  SkillsSection,
  WhatIDo,
} from "@/containers";
import {
  FixedSocials,
  Footer,
  Navbar,
  NoSSR,
  SectionSeperator,
} from "@/components";

import Head from "next/head";
import React from "react";

function index() {
  return (
    <>
      <Head>
        <title>
          Vidhanshu Borade • Software Developer | Competitive Programmer |
          Freelancer | Student
        </title>
        <meta name="theme-color" content={"#000"} />

        {/* open graph tags */}
        <meta
          property="og:title"
          content="Vidhanshu Borade • Software Developer | Competitive Programmer | Freelancer | Student"
        />
        <meta
          property="og:description"
          content="Vidhanshu Borade is a professional full-stack web and Android developer with extensive experience in designing software. Browse his portfolio website to learn more about his qualifications, courses, achievements, and experience."
        />
        <meta
          property="og:image"
          content="https://vidhanshu.vercel.app/_next/image?url=%2Fassets%2Fvidhanshu.png&w=750&q=75"
        />
        <meta property="og:url" content="https://vidhanshu.vercel.app" />

        {/* twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vidhanshu Borade • Software Developer | Competitive Programmer | Freelancer | Student"
        />
        <meta
          name="twitter:description"
          content="Vidhanshu Borade is a professional full-stack web and Android developer with extensive experience in designing software. Browse his portfolio website to learn more about his qualifications, courses, achievements, and experience."
        />
        <meta
          name="twitter:image"
          content="https://vidhanshu.vercel.app/_next/image?url=%2Fassets%2Fvidhanshu.png&w=750&q=75"
        />

        {/* author tag */}
        <meta name="author" content="Vidhanshu Borade" />

        {/* description */}
        <meta
          name="description"
          content="Vidhanshu Borade is a professional full-stack web and Android developer with extensive experience in designing software. Browse his portfolio website to learn more about his qualifications, courses, achievements, and experience."
        />
        {/* keywords */}
        <meta
          name="keywords"
          content="Vidhanshu Borade, Vidhanshu, portfolio, borade, Full-Stack Web Developer, Android Developer, Programming, Software Design, Qualifications, Courses, Achievements, Experience, Freelancer, Student, Competitive Programmer, Competitive, Programming"
        />
      </Head>

      <NoSSR>
        <Navbar />
      </NoSSR>

      <Intro />

      <SectionSeperator id={ABOUT_ME_STRING} title="About me" />

      <AboutMe />

      <SectionSeperator id={WHAT_I_DO_STRING} title="What i do" />

      <WhatIDo />

      <SectionSeperator id={SKILLS_STRING} title="Skills" />

      <SkillsSection />

      <SectionSeperator id={PROJECTS_STRING} title="Projects" />

      <NoSSR>
        <Projects />
      </NoSSR>

      <SectionSeperator id={EXPERIENCE_STRING} title="Experience" />

      <Experience />

      <SectionSeperator id={ACHIEVEMENTS_STRING} title="Achievements" />

      <Achievements />

      <SectionSeperator id={BLOGS_STRING} title="Blogs" />

      <MyBlogs />

      <SectionSeperator id={CODING_PROFILES_STRING} title="Coding Profiles" />

      <CodingProfiles />

      <SectionSeperator id={CERTIFICATIONS_STRING} title="Certifications" />

      <Certifications />

      <SectionSeperator id={CONTACT_ME_STRING} title="Contact me" />

      <ContactMe />

      <Footer />

      <FixedSocials />
    </>
  );
}

export default index;
