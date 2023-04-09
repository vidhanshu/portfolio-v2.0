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
  link: string;
}
