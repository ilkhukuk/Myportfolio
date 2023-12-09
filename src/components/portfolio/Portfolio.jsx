import {useRef} from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Coin List",
    img: "https://github.com/ilkhukuk/coinlist-formik/blob/main/formik.gif?raw=true",
    desc: "Using libraries such as Formik, Yup, Axios, UUId, and many more, the detailed information of digital currencies is obtained in the project.",
    url: "https://github.com/ilkhukuk/coinlist-formik",
  },
  {
    id: 2,
    title: "X-CLONE (BASIC)",
    img: "https://github.com/ilkhukuk/x-clone-stage-1/blob/main/x-clone.gif?raw=true",
    desc: "Used google firebase/firestore",
    url: "https://github.com/ilkhukuk/x-clone-stage-1",
  },
  {
    id: 3,
    title: "YOUTUBE-CLONE",
    img: "https://github.com/ilkhukuk/youtube_clone/blob/main/screen.gif?raw=true",
    desc: "USED: Axios, React-player, Tailwindcss, Millify, Moment",
    url: "https://github.com/ilkhukuk/youtube_clone",
  },
  {
    id: 4,
    title: "REACT CRUD APP",
    img: "https://github.com/ilkhukuk/react-crud/blob/main/screen.gif?raw=true",
    desc: "Responsive design and Create - Read - Update - Delete",
    url: "https://github.com/ilkhukuk/react-crud",
  },
];

const Single = ({item}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank">
              <button>See Repo</button>
            </a>
          </div>
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Repositories</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
        <div className="rss">
          <a href="https://www.linkedin.com/in/ilkhukuk/" target="_blank">
            <motion.img
              initial={{opacity: 0, scale: 0.5}}
              animate={{
                opacity: 1,
                scale: 1.5,
                transition: {repeatType: "mirror", duration: 3},
              }}
              whileHover={{scale: 2}}
              src="/social/linkedin.png"
              alt=""
            />
          </a>
          <a href="https://github.com/ilkhukuk" target="_blank">
            <motion.img
              initial={{opacity: 0, scale: 0.5}}
              animate={{
                opacity: 1,
                scale: 1.5,
                transition: {repeatType: "mirror", duration: 3},
              }}
              whileHover={{scale: 2}}
              src="/social/github.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/ilk.hukuk/" target="_blank">
            <motion.img
              initial={{opacity: 0, scale: 0.5}}
              animate={{
                opacity: 1,
                scale: 1.5,
                transition: {repeatType: "mirror", duration: 3},
              }}
              whileHover={{scale: 2}}
              src="/social/instagram.png"
              alt=""
            />
          </a>
          <a
            href="https://www.youtube.com/@vaishnavpremanandan3785"
            target="_blank"
          >
            <motion.img
              initial={{opacity: 0, scale: 0.5}}
              animate={{
                opacity: 1,
                scale: 1.5,
                transition: {repeatType: "mirror", duration: 3},
              }}
              whileHover={{scale: 2}}
              style={{borderRadius: "5px"}}
              src="/social/youtube.png"
              alt=""
            />
          </a>
        </div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      <div></div>
    </div>
  );
};

export default Portfolio;
