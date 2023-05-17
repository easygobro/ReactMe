import { Footer } from "../../components";
import Link from "next/link";
import styles from "../../styles";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

const Home = () => (
  <div>
    <div className="bg-primary-black overflow-hidden">
      <div
        className={`${styles.innerWidth} flex lg:flex-row flex-col gap-8 mt-5`}
      >
        <div className="flex lg:flex-row flex-col gap-8">
          <Link href="/" className="z-[100]">
            <motion.div
              onClick={() => null}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
              >
                <ul>
                  <li>
                    <button className="cursor-pointer">
                      <img
                        src="/arrow.svg"
                        alt="arrow"
                        className="object-contain"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </motion.div>
          </Link>

          <p className="font-normal lg:text-[42px] text-[26px] text-white">
            Back
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="gradient-03 z-0" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.heroName}
            ></motion.h1>
            <div className="flex justify-center items-center flex-col relative z-10"></div>
            <motion.div
              variants={slideIn("left", "tween", 0.3, 1)}
              className="relative md:-mt-[20px] -mt-[12px] left-0"
            >
              <h2 className={styles.ResumeHeadings}>Resume</h2>

              <div className="mb-[50px] h-[2px] bg-purple-500 opacity-30" />
              <div className="text-right">
             
                <button className="bg-purple-500 w-56 h-[50px] rounded">
                <motion.div
              onClick={() => null}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            > 
                  <a
                    className="hover:text-white"
                    href="/Resume.pdf"
                    download="Resume.pdf"
                    target="_blank"
                  >
                    Download Resume
                  </a>
                  </motion.div>
                </button>
                
              </div>
              
              <div class="flex items-center justify-center mt-5">
                <div class="w-1/8 p-10 h-auto text-purple-200">
                  <div class="flex items-center justify-center mb-10">
                    <img
                      src="/me.png"
                      alt=""
                      class="rounded-full w-32 border-2 border-gray-300"
                    />
                  </div>
                  <h1 class="  uppercase tracking-widest text-lg font-bold">
                    Contact
                  </h1>
                  <hr class="w-1/6 mb-5" />
                  <h1 class=" text-sm">sghent@gmail.com</h1>
                  <h1 class=" text-sm">(518)-238-2812</h1>
                  <h1 class=" text-sm">New York, Albany</h1>
                  <h1 class=" text-sm">www.samghent.com</h1>
                  <hr class="my-5" />
                  <h1 class="  mt-2 uppercase tracking-widest text-lg font-bold">
                    EDUCATION
                  </h1>
                  <hr class="w-1/6 mb-5" />
                  <h1 class="  text-sm  font-semibold tracking-wider">
                    University of Oswego
                  </h1>
                  <h1 class="  text-sm">
                    <span class="italic">
                      Bachelor of Science in{" "}
                      <span className="font-semibold">Information Science</span>
                    </span>
                    <br />
                    <span class="italic">
                      Minor in{" "}
                      <span className="font-semibold">Computer Science</span>
                    </span>
                    <span class="  font-semibold italic"> </span>
                  </h1>
                  <br />
                  <hr class="my-5" />
                  <h1 class="  mt-2 uppercase tracking-widest text-lg font-bold">
                    SKILLS
                  </h1>
                  <hr class="w-1/6 mb-5" />
                  <ul>
                    <li class="  text-sm list-disc ml-4">
                      HTML, CSS, JavaScript, React, Tailwind,{" "}
                    </li>
                    <li class="  text-sm list-disc ml-4"></li>
                    <li class="  text-sm list-disc ml-4">
                      MySQL, Java, C, Python
                    </li>
                    <li class="  text-sm list-disc ml-4">
                      Microsoft Windows, UNIX, Apple macOS, Linux
                    </li>
                  </ul>
                </div>

                <div class=" bg-white w-7/12 p-10 h-auto rounded-[24px]">
                  <h1 class=" "></h1>
                  <h1 class="font-semibold uppercase tracking-wider my-6  ">
                    RELATED COURSEWORK
                  </h1>
                  <hr class="w-1/6 mb-5" />
                  <h1 class="text-gray-600 font-semibold">
                    Abstract Data Types & Programming Methods
                  </h1>
                  <ul class="list-disc ml-5  ">
                    <li>
                      Designed an application using Java that allows users to
                      play a small text-based game, with a focus on displaying
                      my knowledge of the moving parts of a programming language
                    </li>
                  </ul>
                  <h1 class="text-gray-600 font-semibold mt-3">
                    Systems Programming
                  </h1>
                  <ul class="list-disc ml-5  ">
                    <li>
                      Designed several projects using the C programming language
                      to display my understanding of low-level programming and
                      memory management skills. Projects include a Ceasar-Cipher
                      encoder/decoder, defusing a binary bomb, a cache
                      simulator, and a tsh shell.
                    </li>
                  </ul>
                  <h1 class="text-gray-600 font-semibold mt-3">ACHIEVEMENTS</h1>
                  <hr class="w-1/6 mb-5" />
                  <h1 class="text-gray-600 font-semibold mt-3">Eagle Scout</h1>
                  <ul class="list-disc ml-5  ">
                    <li>The Boy Scouts of America | Troop 526</li>
                  </ul>
                  <h1 class="mt-2 uppercase tracking-widest text-lg font-bold">
                    Experience
                  </h1>
                  <hr class="w-1/6 mb-5" />
                  <h1 class="text-gray-600 font-semibold mt-3">
                    Pizza Delivery Driver
                  </h1>
                  <ul class="list-disc ml-5  ">
                    <li>AJ's Pizzeria | Averill Park, NY</li>
                    <li>
                      Delivered pizzas while also delivering high-quality
                      customer service to customers.
                    </li>
                  </ul>
                  <h1 class="text-gray-600 font-semibold mt-3">
                    Ski Instructor
                  </h1>
                  <ul class="list-disc ml-5  ">
                    <li>Jiminy Peak | Pittsfield, MA</li>
                    <li>
                      Instructed beginner skiers, ensuring that all safety
                      guidelines were followed. Created and maintained a
                      positive and enjoyable learning experience for clients.
                      Helped to train new instructors and collaborate with peers
                      on the development of new teaching methods
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
        </motion.div>
      </div>
      <div className="relative">
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  </div>
);

export default Home;
