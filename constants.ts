import { HeaderActionProps } from "Features/Navbar/index.types";
import { IconType } from "react-icons";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaAws } from "react-icons/fa";
export const NavLinks: HeaderActionProps = {
  links: [
    {
      label: "Home",
      scroll: 200,
    },
    {
      label: "Skills",
      scroll: 500,
    },
    {
      label: "Projects",
      scroll: 800,
    },
    {
      scroll: 1200,
      label: "Pricing",
    },
    {
      scroll: 1500,
      label: "Support",
    },
  ],
};

export type TopicsTypes = {
  value: string;
  label: string;
  Icon: IconType;
  color: string;
};
export const Topics: TopicsTypes[] = [
  {
    value: "React",
    Icon: GrReactjs,
    label: "React",
    color: "#4FC3F7",
  },
  {
    value: "Javascript",
    Icon: TbBrandJavascript,
    label: "Javascript",
    color: "#FFEB3B",
  },
  {
    value: "HTML",
    Icon: AiFillHtml5,
    label: "HTML",
    color: "#F4511E",
  },
  {
    value: "CSS",
    Icon: SiCss3,
    label: "CSS",
    color: "#3F51B5",
  },
  {
    value: "Next.js",
    Icon: SiNextdotjs,
    label: "Next.js",
    color: "#00BCD4",
  },
  {
    value: "Typescript",
    Icon: SiTypescript,
    label: "Typescript",
    color: "1E88E5",
  },
  {
    value: "Node.js",
    Icon: IoLogoNodejs,
    label: "Node.js",
    color: "#43A047",
  },
  {
    value: "Mongodb",
    Icon: SiMongodb,
    label: "Mongodb",
    color: "#43A047",
  },
  {
    value: "AWS",
    Icon: FaAws,
    label: "AWS",
    color: "#F57C00",
  },
];

// Env Constants
export const MONGODB_URL = process.env.MONGODB_URL;
