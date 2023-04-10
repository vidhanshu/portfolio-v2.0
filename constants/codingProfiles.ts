import { CodingProfileType } from "@/@types";
import { GITHUB_URL } from ".";

export const CODING_PROFILES: CodingProfileType[] = [
  {
    id: "1",
    title: "CodeChef",
    description:
      "I did competitive programming on codechef platform for 1+ yrs. and I’m 3 star coder on codechef with highest rating of 1608.",
    link: "https://www.codechef.com/users/vidhanshu",
    icon: "codechef.png",
    logo: "codechef_logo.png",
    languages_used: ["C++", "Java", "Python"],
    rating: 1608,
    stars: 3,
    problem_solved: 242,
  },
  {
    id: "2",
    title: "LeetCode",
    description:
      " I’m solving questions on Leetcode from a year and solved 150+ questions. I’m solving questions on Leetcode from a year and solved 150+ questions. I’m solving questions on Leetcode from a year and solved 150+ questions. ",
    link: "https://leetcode.com/vidhanshu/",
    icon: "leetcode.png",
    logo: "leetcode_logo.png",
    languages_used: ["C++", "Java", "Python"],
    rating: 1503,
    problem_solved: 150,
  },
  {
    id: "3",
    title: "HackerRank",
    description:
      "I’m solving questions on HackerRank from a year and solved 100+ questions.",
    link: "https://www.hackerrank.com/vidhanshu_",
    icon: "hr.png",
    logo: "hr_logo.png",
    languages_used: ["C++", "Java", "Python"],
    stars: 5,
  },
  {
    id: "4",
    title: "GitHub",
    description:
      "Doing open source contribution since Nov’22, and contributed to various web based projects.",
    link: GITHUB_URL,
    icon: "github.png",
    logo: "github_logo.png",
    languages_used: [
      "C++",
      "Java",
      "Python",
      "Scss",
      "Html",
      "Css",
      "Javascript",
      "Typescript",
    ],
    contributions: 1000,
    stars: 100,
    forks: 100,
  },
  {
    id: "5",
    title: "HackerEarth",
    description:
      "I’m solving questions on HackerEarth from a year and solved 10+ questions.",
    icon: "he.png",
    logo: "he_logo.png",
    link: "https://www.hackerearth.com/@vidhanshu_",
    languages_used: ["C++", "Java", "Python"],
    problem_solved: 10,
  },
];
