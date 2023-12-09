import "./hero.scss";
import {motion} from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 1,
  },
  animate: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 3,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "300%",
    y: "-40%", // Başlangıçta ekranın solunda
  },
  animate: {
    x: "-300%",

    transition: {
      repeat: Infinity,
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            Hi! <span>I'm</span>
          </motion.h1>
          <motion.h2 variants={textVariants}>İlker ŞENDOĞAN</motion.h2>
          <motion.h1
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 6}}
            variants={textVariants}
            className="work"
          >
            <h1>Software Developer</h1> <h1>React Developer</h1>
            <h1>Front End Developer</h1>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="/#Portfolio">Portfolio</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="/#Contact">Contact</a>
            </motion.button>
          </motion.div>         
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        React Developer İlker Şendoğan
      </motion.div>

      <div className="imageContainer">
        <img src="/pic1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
