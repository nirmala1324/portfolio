"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";

dotenv.config();

const Form = () => {
  const form = useRef();
  const app_service = process.env.REACT_APP_SERVICE_ID;
  console.log(app_service)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7sk4a5p",
        "template_6uc8tlv",
        form.current,
        {
          publicKey: "8Mx059H-A8SvePY8M",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert(
            "MESSAGE SENT | Thank you for contacting me. Please kindly await for a response."
          );
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" name="user_name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" name="user_email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Textarea */}
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Type Your Message Here"
          name="message"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        <input type="submit" value="Let's Talk" />
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
  0;
};

export default Form;
