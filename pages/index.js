import { Footer, Navbar, Contact } from "../components";
import {
  About,
  Work,
  Feedback,
  Skills,
  Hero,
  Insights,
  WhatsNew,
} from "../sections";
import Link from "next/link";
import styles from "../styles";
import { motion } from "framer-motion";

const Home = () => (
  <div>
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Work />
      </div>
      <div className="relative">
        <Skills />
        <div
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 `}
        >
          <div className="mx-auto flex lg:flex-row flex-col gap-8">
            <Link href="/Resume.pdf" className="z-[100]" target="_blank">
              <motion.div
                onClick={() => null}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] mx-auto z-[100]`}
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
              Click to see resume
            </p>
          </div>
        </div>

        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Home;
