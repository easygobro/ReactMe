"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorks } from "../constants";
import { staggerContainer } from "../utils/motion";
import { WorkCard, TitleText, TypingText } from "../components";

const Explore = () => {
  const [active, setActive] = useState("work-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| My Work" textStyles="text-center" />
        <TitleText
          title={<>Explore around some of my work</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorks.map((work, index) => (
            <WorkCard
              key={work.id}
              {...work}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
