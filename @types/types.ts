/**
 * @description: This file contains all the custom types that are used in the project
 */

import { ProjectCardProps } from "./props";

export interface ProjectType extends ProjectCardProps {
  id: string;
}

export interface ExperienceType {
  id: string;
  title: string;
  company: string;
  description: string;
  logo: string;
  from: string;
  to: string;
  link: string;
  certificate?: string;
}

export interface AchievementType {
  id: string;
  rank: string;
  title: string;
  date: string;
  description: string;
  skills: string[];
  certificate?: string;
  news?: string;
  image: string;
}

export interface BlogType {
  id: string;
  subtitle: string;
  title: string;
  date: string;
  description: string;
  time_to_read: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface BlogRawType {
  id: string;
  name: string;
  markdown: string;
}

export interface CodingProfileType {
  id: string;
  title: string;
  description: string;
  link: string;
  logo: string;
  icon: string;
  languages_used: string[];
  //cp specific
  rating?: number;
  stars?: string;
  problem_solved?: number;
  //github specific
  forks?: number;
  contributions?: number;
}

export interface CertificationType {
  id: string;
  title: string;
  description: string;
  logo: string;
  certificate?: string;
  project?: string;
  image: string;
  date: string;
  icon: string;
}

export interface FormDataType {
  name: string;
  email: string;
  message: string;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  handleTheme: (theme: "light" | "dark") => void;
}

export type BlogServerType = Omit<BlogType, "id" | "date"> & {
  createdAt: string;
  _id: string;
};

export type FullBlogType = BlogServerType & {
  markdown: string;
};

export type OtherBlogType = {
  _id: string;
  title: string;
};
