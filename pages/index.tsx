import Link from "next/link";
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

import Button from "@/components/Button";
import HeadTagForSEO from "@/components/HeadTagForSEO";
import Layout from "@/components/Layout";
import NoSSR from "@/components/NoSSR";
import PageWrapperToGetThemes from "@/components/PageWrapperToGetThemes";
import SectionSeperator from "@/components/SectionSeperator";
import FixedSocials from "@/components/FixedSocials";

import Blog from "@/models/blog";
import connectDB from "@/configs/db";
import { BlogServerType } from "@/@types";
import AboutMe from "@/containers/AboutMe";
import Achievements from "@/containers/Achievements";
import Certifications from "@/containers/Certifications";
import CodingProfiles from "@/containers/CodingProfiles";
import ContactMe from "@/containers/ContactMe";
import Experience from "@/containers/Experience";
import Intro from "@/containers/Intro";
import MyBlogs from "@/containers/MyBlogs";
import Projects from "@/containers/Projects";
import SkillsSection from "@/containers/Skills";
import WhatIDo from "@/containers/WhatIDo";

export async function getStaticProps() {
  // connecting to db
  await connectDB();
  try {
    const blogs = await Blog.find(
      {},
      {
        title: 1,
        description: 1,
        image: 1,
        subtitle: 1,
        time_to_read: 1,
        tags: 1,
        createdAt: 1,
      }
    )
      .sort({ createdAt: -1 })
      .limit(10);
    return {
      props: {
        blogs: JSON.parse(JSON.stringify(blogs)),
        revalidate: 86400000,
      },
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      },
    };
  }
}

function Home({ blogs }: { blogs: BlogServerType[] }) {
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
            <MyBlogs blogs={blogs} />

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
