"use client";

import { motion, useCycle } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.nav
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 w-full text-white fixed z-40 
      }`}
    >
      <div className="absolute w-full inset-0 gradient-01 mx-auto flex justify-between gap-8 text-center" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        {!open ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-20 top-8 z-100 invisible 2xl:visible"
            onClick={cycleOpen}
          >
            <div class="flex h-7 w-full  justify-center">
              <div class="group flex h-7 w-20 cursor-pointer  justify-center rounded-3xl ">
                <div class="space-y-2">
                  <span class="block h-1 w-10  rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45 duration-75"></span>
                  <span class="block h-1 w-8  rounded-full bg-purple-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45 duration-75"></span>
                </div>
              </div>
            </div>
          </button>
        ) : (
          <div>
            <button
              className="flex text-4xl text-white items-center cursor-pointer fixed right-20 top-8 z-50 invisible 2xl:visible"
              onClick={cycleOpen}
            >
              <div class="flex h-7 w-full  justify-center">
                <div class="group flex h-7 w-20 cursor-pointer  justify-center rounded-3xl ">
                  <div class="space-y-2">
                    <span class="block h-1 w-10  rounded-full bg-purple-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                    <span class="block h-1 w-8  rounded-full bg-slate-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                  </div>
                </div>
              </div>
            </button>
            {open && (
              <>
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{
                    x: 0,
                  }}
                  exit={{
                    x: "100%",
                  }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="top-6 right-0 w-[14.6vw] p-10 pl-20 text-white fixed h-[32%] rounded-3xl bg-gray-800 bg-opacity-0 invisible 2xl:visible"
                >
                  <ul>
                    <motion.div
                      onClick={() => null}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <li className="text-[24px] text-purple-500 cursor-pointer">
                        <Link
                          to="LaptopEnd"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={cycleOpen}
                        >
                          About
                        </Link>
                      </li>
                    </motion.div>
                    <motion.div
                      onClick={() => null}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <li className="text-[24px] text-purple-400 cursor-pointer">
                        <Link
                          to="explore"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={cycleOpen}
                        >
                          My Work
                        </Link>
                      </li>
                    </motion.div>
                    <motion.div
                      onClick={() => null}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <li className="text-[24px] text-purple-400 cursor-pointer">
                        <Link
                          to="Skills"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={cycleOpen}
                        >
                          Resume
                        </Link>
                      </li>
                    </motion.div>
                    <motion.div
                      onClick={() => null}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <li className="text-[24px] text-purple-300 cursor-pointer">
                        <Link
                          to="New"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={cycleOpen}
                        >
                          Blog
                        </Link>
                      </li>
                    </motion.div>
                    <motion.div
                      onClick={() => null}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <li className="text-[24px] text-purple-200 cursor-pointer">
                        <Link
                          to="Resource"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={cycleOpen}
                        >
                          Resources
                        </Link>
                      </li>
                    </motion.div>
                    <motion.div
                      onClick={() => null}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <li className="text-[24px] text-purple-100 scroll-smooth">
                        <Link
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={cycleOpen}
                        >
                          Contact
                        </Link>
                      </li>
                    </motion.div>
                  </ul>
                </motion.div>
              </>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
}
