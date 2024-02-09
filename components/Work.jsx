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

// Data
const projectData = [
  {
    image: "/work/8.png",
    category: "Next JS",
    name: "Portfolio Website",
    description:
      "Introducing the Professional Portfolio—a clean and neat space to show off school achievements, skills, and cool projects. The simple homepage starts with a professional hello, then goes to education and skills. Easy-to-find buttons let you download a resume and see my best projects. It's made to efficiently introduce myself to possible opportunities.",
    link: "/",
    github: "https://github.com/nirmala1324/portfolio.git",
  },
  {
    image: "/work/1.png",
    category: "Python | Flask",
    name: "Brush&Palette",
    description:
      "An art gallery platform for clients to explore art, make secure purchases, and manage accounts. Admins get insights, purchase analysis, and tools for user, artist, and artwork management. Brush&Palette ensures a seamless and secure experience for both art enthusiasts and administrators.",
    link: "https://brushandpalette.glitch.me/",
    github: "https://github.com/nirmala1324/brush_and_palette.git",
  },
  {
    image: "/work/2.png",
    category: "Python | Flask",
    name: "Sweeter: Social App",
    description:
      "Sweeter is a social app-like website that functions like an app, offering users the ability to register, log in, and edit their accounts. Users can post text statuses and connect with others by reacting to others' posts with options such as like, star, and heart. The website also maintains a log of users' posted text on their account page.",
    link: "https://sweeter-sweetest.glitch.me/",
    github: "https://github.com/nirmala1324/sweeter.git",
  },
  {
    image: "/work/3.png",
    category: "Python | Flask",
    name: "Sparta: Word List",
    description:
      "Sparta is a personal word bank web that stores words meaning the user add. User can search the word and the app will provide the meanings using merriam-webster dictionary api, give the word suggestion if there is no match in the api, then user can save it inside the app, after that user can also add their own sentence example of the certain word.",
    link: "https://wordlist-project.glitch.me/",
    github: "https://github.com/nirmala1324/wordlist.git",
  },
  {
    image: "/work/4.png",
    category: "React JS",
    name: "UPTD Puskesmas Kertasemaya",
    description:
      "UPTD Puskesmas Kertasemaya's website serves as a comprehensive hub for information about the public health center. Visitors can explore detail information on its profile, services, and innovations. Users can find news and articles related to health, browse a gallery showcasing center activities, and access contact details for communication.",
    link: "https://www.pkmkertasemaya.com/",
    github: "https://github.com/Ariiq354/puskesmas_kertasemaya.git",
  },
  {
    image: "/work/5.png",
    category: "Java - Library Management Software",
    name: "Bunny Library",
    description:
      "Bunny Library is a library management software for admins and clients. Admins can efficiently handle book and user data, while clients access a user-friendly interface for browsing and borrowing books. The system automates return date calculations and includes a late return fee feature, streamlining library operations for enhanced efficiency.",
    link: "/",
    github: "https://github.com/nirmala1324/bunny_library.git",
  },
  {
    image: "/work/6.png",
    category: "FPS Game | Unity",
    name: "7 Deadly Sins: Battle Within",
    description:
      "Captivating first-person shooter set in fantasy worlds representing the seven deadly sins. Players embody a character seeking peace and embark on an exploration journey with unique goals in each level. The game seamlessly blends curiosity, dynamic exploration, and thematic depth for an immersive and enjoyable gaming experience.",
    link: "/",
    github: "/",
    document:
      "https://media.licdn.com/dms/document/media/D562DAQF4eTZs8TrmIg/profile-treasury-document-pdf-analyzed/0/1686931955684?e=1707955200&v=beta&t=N1ewH3UjqhzUI4HvInzm3HhHPhsObM16rfmcyYyz7dg",
  },
  {
    image: "/work/7.png",
    category: "PHP Native",
    name: "Nevermore Library",
    description:
      "Nevermore Library is a user-friendly library management system for both admins and clients. Admins can easily manage book and user data, while clients enjoy a smooth browsing and borrowing experience. The system automates return date calculations and incorporates a late return fee, streamlining library operations for optimal efficiency.",
    link: "http://nevermorelibrary.infinityfreeapp.com/",
    github: "https://github.com/nirmala1324/nevermore_library.git",
  },
];

const Work = () => {
  return (
    <section className="relative mb-[150px] xl:mb-[500px] ">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Projects</h2>
          <p className="subtitle mb-8">
            Here are all projects I handled this past 2 years. From the projects I handled in second year in univ, I realize that I am interested in app development especially in software development. And in the third year, it is clear that I am more interested in web development. Beside that, I also enjoy 3D designing and developing interest in game development.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[710px]"
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
