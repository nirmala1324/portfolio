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
  Briefcase,
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
        qualification: "Bachelor of Computer Science",
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
        qualification: "Student Supervisor",
        year: "2022",
      },
      {
        activity: "Social Project: Pengenalan Dasar Pemrograman Melalui Game",
        qualification: "Head of Multimedia, Design, and Documentation Division",
        years: "2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "JavaScript, PHP",
      },
      {
        name: "Back-end Development",
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
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pt-[100px] pb-12 xl:py-24">
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
                      effective communication is key. Proud to maintain a GPA of
                      3.88/4.00, and grateful for a 75% tuition fee scholarship
                      from Jababeka.
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
                    <div>
                      <div>Language</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  Qualifications info
                </TabsContent>
                <TabsContent value="skills">Skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
