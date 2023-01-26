"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2023
          </p>
          <div className="flex gap z-[100] ">
            <a href="https://twitter.com/ghent45" target="_blank">
              <img
                src="/twitter.svg"
                alt=""
                className="w-[24px] h-[24px] object-contain cursor-pointer m-2"
              />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img
                src="/linkedin.svg"
                alt=""
                className="w-[24px] h-[24px] object-contain cursor-pointer m-2"
              />
            </a>
            <a href="https://instagram.com/samghent" target="_blank">
              <img
                src="/instagram.svg"
                alt=""
                className="w-[24px] h-[24px] object-contain cursor-pointer m-2"
              />
            </a>
            <a href="https://discord.com" target="_blank">
              <img
                src="/discord.png"
                alt=""
                className="w-[24px] h-[24px] object-contain cursor-pointer m-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
