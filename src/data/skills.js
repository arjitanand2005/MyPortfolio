import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiGit,
  SiLinux,
  SiCanva,
  SiFigma,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { BsRobot, BsCameraReels } from "react-icons/bs";
import { MdMovieEdit } from "react-icons/md";
import { RiScissorsLine } from "react-icons/ri";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, level: 90 },
      { name: "Python", icon: SiPython, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 92 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: SiReact, level: 90 },
      { name: "Node.js", icon: SiNodedotjs, level: 82 },
      { name: "Express", icon: SiExpress, level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Firebase", icon: SiFirebase, level: 78 },
      { name: "Git", icon: SiGit, level: 88 },
      { name: "Linux", icon: SiLinux, level: 75 },
      { name: "Figma", icon: SiFigma, level: 80 },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Groq API", icon: BsRobot, level: 80 },
      { name: "LLaMA", icon: TbBrain, level: 75 },
    ],
  },
  {
    title: "Creative Suite",
    skills: [
      { name: "Premiere Pro", icon: BsCameraReels, level: 92 },
      { name: "After Effects", icon: MdMovieEdit, level: 85 },
      { name: "Canva", icon: SiCanva, level: 88 },
      { name: "CapCut", icon: RiScissorsLine, level: 85 },
    ],
  },
];
