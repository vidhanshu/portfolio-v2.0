import {
  AboutMe,
  Achievements,
  ContactMe,
  Experience,
  Intro,
  MyBlogs,
  Projects,
  Skills,
} from "@/containers";

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

      <Intro />

      <AboutMe />

      <Skills />

      <Projects />

      <MyBlogs />

      <Achievements />

      <Experience />

      <ContactMe />
    </>
  );
}

export default index;
