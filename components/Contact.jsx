import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { TitleText } from "../components";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ujfuse",
        "template_oyggbl8",
        form.current,
        "-WxbL6J5vydf09BUA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      id="contact"
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5"></div>

        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <div flex items-center justify-between flex-wrap gap-5>
            <TitleText title={<>Contact Me</>} textStyles="text-center" />
            <div className="mb-[50px] h-[2px] bg-white opacity-10" />
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" flex flex-col items-start w-full text-2xl p-10 "
            >
              <label className="mt-1 mb-1 text-white">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-[90%] h-[35px] p-7 outline-none rounded-lg border border-slate-300 hover:border-slate-500 )"
              />
              <label className="mt-1 mb-1 text-white">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-[90%] h-[35px] p-7 outline-none rounded-lg border border-slate-300 hover:border-slate-500 )"
              />
              <label className="text-white mb-1 mt-1">Message</label>
              <textarea
                name="message"
                className=" p-7 outline-none rounded-lg border border-slate-300 hover:border-slate-500 w-[90%] text-[16px]"
              />
              <motion.div
                onClick={() => null}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <input
                  type="submit"
                  value="Send"
                  className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] cursor-pointer text-white mt-5"
                />
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Contact;
