import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Users,
} from "lucide-react";
import { info } from "autoprefixer";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Nirmala Puspa Ratna",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62-857-3067-5831",
  },
  {
    icon: <MailIcon size={20} />,
    text: "nirmalapuspa1324@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 07 Nov, 2003",
  },

  {
    icon: <GraduationCap size={20} />,
    text: "Final Year Informatics Student",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Cibitung, Bekasi Regency",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        school: "President University",
        qualification:
          "Bachelor of Computer Science - Proud to maintain a GPA of 3.88/4.00, and grateful for a 75% tuition fee scholarship from Jababeka.",
        years: "2021 - 2024 (Expected)",
      },
      {
        school: "Public High School 1 Cepu",
        qualification: "Natural Science Graduate",
        years: "2018 - 2021",
      },
    ],
  },
  {
    title: "leadership experiences",
    data: [
      {
        activity: "Computing Gathering (COMPGATH) 2022",
        role: "During COMPGATH 2022, I served as a Student Supervisor, collaborating with a team to supervise and ensure the well-being of participants. My role included encouraging engagement and implementing safety measures.",
        years: "2022",
      },
      {
        activity: "Social Project: Pengenalan Dasar Pemrograman Melalui Game",
        role: "Heading the Multimedia, Design, and Documentation Division, I led a team of two in a social project introducing programming basics through games. This involved creating graphic components, contributing to event planning, and impacting 10+ children.",
        years: "2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "soft skills",
    data: [
      {
        name: "Problem-solving",
      },
      {
        name: "Critical Thinking",
      },
      {
        name: "Teamwork",
      },
      {
        name: "Leadership",
      },
      {
        name: "Adaptability",
      },
      {
        name: "Strategic Planning",
      },
      {
        name: "Creativity",
      },
      {
        name: "Communication",
      },
    ],
  },
  {
    title: "hard skills",
    data: [
      {
        name: "Version Control",
        component: "Git, GitHub",
      },
      {
        name: "Frameworks",
        component: "Flask, React",
      },
      {
        name: "Programming Language",
        component: "Python, Java, SQL, JavaScript, PHP, C++, C#",
      },
      {
        name: "Database",
        component: "MongoDB (NoSQL), MySQL (SQL)",
      },
      {
        name: "Office Tools",
        component: "Microsoft Office (Word, Excel, PowerPoint)",
      },
      {
        name: "Graphic Design",
        component: "Photoshop, Adobe Illustrator (Beginner), ibisPaintX",
      },
      {
        name: "3D Design & Game",
        component: "Blender, Unity",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/blender.svg",
      },
      {
        imgPath: "/about/ibis_paint.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[900px] mt-[150px] mb-[150px] md:mt-[300px] xl:mt-60 xl:pt-[0px] pb-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Tech enthusiast with a passion for problem-solving and
                      teamwork
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I'm currently pursuing an Informatics degree at President
                      University, where my emphasis on critical thinking and
                      effective communication is key.
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex gap-x-4 items-center mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>
                        Indonesian - <i>native</i> | English - <i>fluent</i>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualification */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { school, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-4">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {school}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Leadership Experiences */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Users />
                          <h4 className="capitalize font-medium">
                            {
                              getData(
                                qualificationData,
                                "leadership experiences"
                              ).title
                            }
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(
                            qualificationData,
                            "leadership experiences"
                          ).data.map((item, index) => {
                            const { activity, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {activity}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center">
                    <h3 className="h3 mb-10 xl:text-left">
                      Skills and Tools I'm familiar with
                    </h3>
                    {/* soft skills */}
                    <div className="grid md:grid-cols-2  gap-y-8  mb-10">
                      <div className="flex flex-col md:w-[1/4]">
                        <h4 className="text-xl font-semibold mb-2 xl:text-left">
                          Soft Skills
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        {/* Skills List */}
                        <div>
                          {getData(skillData, "soft skills").data.map(
                            (item, index) => {
                              const { name } = item;
                              return (
                                <ul
                                  className="list-disc pl-4 text-left"
                                  key={index}
                                >
                                  <li className="font-medium">{name}</li>
                                </ul>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Hard Skills */}
                      <div className="flex flex-col md:w-[3/4]">
                        <h4 className="text-xl font-semibold mb-2 xl:text-left">
                          Hard Skills
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        {/* Skills List */}
                        <div>
                          {getData(skillData, "hard skills").data.map(
                            (item, index) => {
                              const { name, component } = item;
                              return (
                                <ul
                                  className="list-disc pl-4 text-left"
                                  key={index}
                                >
                                  <li className="font-medium">
                                    {name}:{" "}
                                    <span className="subtitle">
                                      {component}
                                    </span>
                                  </li>
                                </ul>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>

                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
