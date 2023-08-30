import { Poppins, Fira_Code } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const firaCode = Fira_Code({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});
