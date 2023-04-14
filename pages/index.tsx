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
