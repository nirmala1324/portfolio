"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

// Data
const projectData = [
  {
    image: "/work/8.png",
    category: "React JS",
    name: "Portfolio Website",
    description:
      "Introducing the Professional Portfolio—a clean and neat space to show off school achievements, skills, and cool projects. The simple homepage starts with a professional hello, then goes to education and skills. Easy-to-find buttons let you download a resume and see my best projects. It's made to efficiently introduce myself to possible opportunities.",
    link: "/",
    github: "https://github.com/nirmala1324/portfolio.git",
    year: "February 2024",
  },
  {
    image: "/work/1.png",
    category: "Flask",
    name: "Brush&Palette",
    description:
      "An art gallery platform for clients to explore art, make secure purchases, and manage accounts. Admins get insights, purchase analysis, and tools for user, artist, & artwork management. Brush&Palette ensuring smooth experience, provides art enthusiasts and admins with powerful tools for exploration, management, and decision-making.",
    link: "https://brushandpalette.glitch.me/",
    github: "https://github.com/nirmala1324/brush_and_palette.git",
    year: "29 Nov - 19 Dec 2023",
  },
  {
    image: "/work/2.png",
    category: "Flask",
    name: "Sweeter: Social App",
    description:
      "Sweeter is a social app-like website that functions like an app, offering users the ability to register, log in, and edit their accounts. Users can post text statuses and connect with others by reacting to others' posts with options such as like, star, and heart. The website also maintains a log of users' posted text on their account page.",
    link: "https://sweeter-sweetest.glitch.me/",
    github: "https://github.com/nirmala1324/sweeter.git",
    year: "Nov 2023",
  },
  {
    image: "/work/3.png",
    category: "Flask",
    name: "Sparta: Word List",
    description:
      "Sparta is a personal word bank web that stores words meaning the user add. User can search the word and the app will provide the meanings using merriam-webster dictionary api, give the word suggestion if there is no match in the api, then user can save it inside the app, after that user can also add their own sentence example of the certain word.",
    link: "https://wordlist-project.glitch.me/",
    github: "https://github.com/nirmala1324/wordlist.git",
    year: "Oct 2023",
  },
  {
    image: "/work/4.png",
    category: "React JS",
    name: "UPTD Puskesmas Kertasemaya",
    description:
      "UPTD Puskesmas Kertasemaya's website serves as a comprehensive hub for information about the public health center. Visitors can explore detail information on its profile, services, and innovations. Users can find news and articles related to health, browse a gallery showcasing center activities, and access contact details for communication.",
    link: "https://www.pkmkertasemaya.com/",
    github: "https://github.com/Ariiq354/puskesmas_kertasemaya.git",
    year: "August - September 2023",
  },
  {
    image: "/work/5.png",
    category: "Java",
    name: "Bunny Library",
    description:
      "Bunny Library is a library management software for admins and clients. Admins can efficiently handle book and user data, while clients access a user-friendly interface for browsing and borrowing books. The system automates return date calculations and includes a late return fee feature, streamlining library operations for enhanced efficiency.",
    link: "/",
    github: "https://github.com/nirmala1324/bunny_library.git",
    year: "April - May 2023",
  },
  {
    image: "/work/6.png",
    category: "Unity Game",
    name: "7 Deadly Sins: Battle Within",
    description:
      "Captivating first-person shooter set in fantasy worlds representing the seven deadly sins. Players embody a character seeking peace and embark on an exploration journey with unique goals in each level, which each level representing different sin. The game seamlessly blends curiosity, dynamic exploration, and thematic depth for an immersive and enjoyable gaming experience.",
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
      "Nevermore Library is a user-friendly library management system for both admins and clients. Admins can easily manage book and user data, while clients enjoy a smooth browsing and borrowing experience. The system automates return date calculations and incorporates a late return fee, streamlining library operations for optimal efficiency.",
    link: "http://nevermorelibrary.infinityfreeapp.com/",
    github: "https://github.com/nirmala1324/nevermore_library.git",
    year: "5 - 23 Dec 2022",
  },
];

// Remove Category Duplicates
const uniqueCategories = [
  "all projects", // Add 'all projects' value to the array categories
  ...new Set(projectData.map((item) => item.category)),
];

// Handle the Categories
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  // Handle the category filters
  const filteredProjects = projectData.filter((project) => {
    // if category is "all projects" return all projects, else: filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-36">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
