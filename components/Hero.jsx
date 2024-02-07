import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiTodoFill,
  RiGraduationCapFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

// URL to my CV
const RESUME_URL = "/nirmala_pusparatna.pdf";

const Hero = () => {

  return (
    <section className="xl:py-5 h-[900px] xl:h-[76vh] md:mt-6 flex items-center bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[650px] flex-col justify-center xl:mx-0 text-center xl:text-left mx-auto">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Final Year Informatics Student
            </div>
            <h1 className="h1 mb-8">Hello, my name is Nirmala Puspa Ratna</h1>
            <p className="subtitle max-w-[600px] mx-auto xl:mx-0">
              Welcome to my corner of the web! I'm an eighth-semester
              Information Technology (Informatics) student with a knack for
              technology, web development, and 3D design. As a critical thinker
              and a collaborative team player, I am on the lookout for exciting
              internship opportunities to contribute to innovative projects.
            </p>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-[25px]">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2"
              >
                <a href="/hero/nirmala_pusparatna-resume.pdf" download="Resume of Nirmala Pusparatna.pdf">Download CV</a><Download size={18} />
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <Badge
              containerStyles="absolute top-[22%] -left-[7rem]"
              icon={<RiGraduationCapFill />}
              endCountNum={3.90}
              badgeText={"Total GPA"}
            />
            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[58%] -right-[3.5rem]"
              icon={<RiTodoFill />}
              endCountNum={8}
              badgeText={"Projects"}
            />
            {/* Badge 3 */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat top-8 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat"
                imgSrc="/hero/developer.svg"
              />
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="hidden md:flex absolute left-1/2 bottom-44 md:-bottom-16 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
