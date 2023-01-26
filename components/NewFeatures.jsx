import styles from '../styles';
import { motion } from 'framer-motion';

const NewFeatures = ({ imgUrl, title, URL, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
   
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
       <motion.div
        onClick={() => null}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
       <a href={URL} target="_blank">
          <button className="cursor-pointer">
            <img src="/arrow.svg" alt="arrow" className="object-contain" />
          </button>
          </a>
          </motion.div> 
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
       {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
