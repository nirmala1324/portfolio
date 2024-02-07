"use client";

import { RiLinkedinFill, RiGithubFill, RiDribbbleFill } from "react-icons/ri";

import Link from "next/link";

// Icons and Path array of objects
const icons = [
  {
    path: "https://www.linkedin.com/in/nirmala-pusparatna/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/nirmala1324",
    name: <RiGithubFill />,
  },
  {
    path: "https://dribbble.com/nirmala1324",
    name: <RiDribbbleFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
