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
  Button,
  FixedSocials,
  HeadTagForSEO,
  Layout,
  NoSSR,
  PageWrapperToGetThemes,
  SectionSeperator,
} from "@/components";

import Head from "next/head";
import Link from "next/link";
import { useTheme } from "@/context/theme";

function Home() {
  const { theme } = useTheme();

  return (
    <PageWrapperToGetThemes>
      <>
        <HeadTagForSEO
          title="Vidhanshu Borade • Software Developer | Competitive Programmer |
          Freelancer | Student"
          description="Vidhanshu Borade is a professional full-stack web and Android developer with extensive experience in designing software. Browse his portfolio website to learn more about his qualifications, courses, achievements, and experience."
        />

        <Layout>
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

          <NoSSR>
            <MyBlogs />

            {/* more blogs button */}
            <div
              className={`container`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/blogs">
                <Button variant="secondary" size="large">
                  More blogs
                </Button>
              </Link>
            </div>
          </NoSSR>

          <SectionSeperator
            id={CODING_PROFILES_STRING}
            title="Coding Profiles"
          />

          <CodingProfiles />

          <SectionSeperator id={CERTIFICATIONS_STRING} title="Certifications" />

          <Certifications />

          <SectionSeperator id={CONTACT_ME_STRING} title="Contact me" />

          <ContactMe />
        </Layout>

        <FixedSocials />
      </>
    </PageWrapperToGetThemes>
  );
}

export default Home;
