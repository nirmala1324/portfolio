import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

// Components
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        {/* Text & Illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[530px] mb-6 xl:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px] xl:max-w-[520px]">
              I bring a set of skills in web development and game design to the
              table, and I'm eager to apply them in a real-world setting.
              Thriving in collaborative environments, I'm excited about the
              prospect of contributing to your organization. Whether you have
              internship opportunities available or know of exciting
              possibilities, I'd love to hear from you. Please use the contact
              form below to reach out, and let's start a conversation about how
              I can contribute to and learn from your organization.
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* Info Text & Form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* Mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>nirmalapuspa1324@gmail.com</div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>
                Villa Mutiara Jaya III Housing Complex, Block M.52, House Number
                11
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+62 857-3067-5831</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
