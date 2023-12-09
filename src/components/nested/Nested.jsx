import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import "./nested.scss";



const upss = {
  initial: {
    x: "0%",
    y: "20%",
  },
  animate: {
    y: "-30%",
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

const Nested = ({type}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrolly = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="nested-main"
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.h1
        style={{
          color: type === "pages" ? "#FC6939" : "#19ADD6",
        }}
      >
        {type === "pages" ? "Who am I?" : "What I Did?"}
      </motion.h1>
     
      <motion.div
        className="safa"
        style={{
          y: scrolly,
          backgroundImage: `url(${
            type === "pages" ? "/BG/first.jpg" : "/BG/too.jpg"
          })`,
        }}
      ></motion.div>

      <motion.a href="#Homepage" className="uphome">
        <motion.img
          variants={upss}
          initial="initial"
          animate="animate"
          src="/arrow/up.png"
          
        />
      </motion.a>
    </div>
  );
};

export default Nested;
