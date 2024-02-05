"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

// Components
import ProjectCard from "./ProjectCard";
import { Sliders } from "lucide-react";

// Data
const projectData = [
  {
    image: "/work/1.png",
    category: "Python | Flask",
    name: "Brush&Palette",
    description:
      "Brush&Palette is a sophisticated art gallery platform with dual functionality for clients and administrators. On the client side, users can explore an extensive art showcase, access artist bios, make secure kind like art purchases, and manage their accounts, including viewing purchase history. The admin side features a comprehensive dashboard offering insights into total arts, artists, purchases, and user data. Admins can utilize charts and tables for in-depth purchase analysis, manage users, artists, and artworks data, and oversee a meticulous purchase approval process with detailed previews and payment proofs. ArtHub Gallery ensures a seamless and secure experience, providing both art enthusiasts and administrators with powerful tools for exploration, management, and decision-making.",
    link: "https://brushandpalette.glitch.me/",
    github: "https://github.com/nirmala1324/brush_and_palette.git",
    year: "29 Nov - 19 Dec 2023",
  },
  {
    image: "/work/2.png",
    category: "Python | Flask",
    name: "Sweeter: Social App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://sweeter-sweetest.glitch.me/",
    github: "https://github.com/nirmala1324/sweeter.git",
    year: "Nov 2023",
  },
  {
    image: "/work/3.png",
    category: "Python | Flask",
    name: "Sparta: Word List",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://wordlist-project.glitch.me/",
    github: "https://github.com/nirmala1324/wordlist.git",
    year: "Oct 2023",
  },
  {
    image: "/work/4.png",
    category: "React JS",
    name: "UPTD Puskesmas Kertasemaya",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://www.pkmkertasemaya.com/",
    github: "https://github.com/Ariiq354/puskesmas_kertasemaya.git",
    year: "August - September 2023",
  },
  {
    image: "/work/5.png",
    category: "Java - Library Management Software",
    name: "Bunny Library",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "/",
    github: "https://github.com/nirmala1324/bunny_library.git",
    year: "April - May 2023",
  },
  {
    image: "/work/6.png",
    category: "FPS Game | Unity",
    name: "7 Deadly Sins: Battle Within",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "/",
    github: "/",
    document:
      "https://media.licdn.com/dms/document/media/D562DAQF4eTZs8TrmIg/profile-treasury-document-pdf-analyzed/0/1686931955684?e=1707955200&v=beta&t=N1ewH3UjqhzUI4HvInzm3HhHPhsObM16rfmcyYyz7dg",
    year: "April - May 2023",
  },
  {
    image: "/work/7.png",
    category: "PHP Native",
    name: "Nevermore Library",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "http://nevermorelibrary.infinityfreeapp.com/",
    github: "https://github.com/nirmala1324/nevermore_library.git",
    year: "5 - 23 Dec 2022",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show Only 4 projects for the slider */}
            {projectData.slice(0,4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
