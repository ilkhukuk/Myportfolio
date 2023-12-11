import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="wleft">
          <motion.a href="/#About">
            {" "}
            <motion.img
              src="/logo/logo.png"
              className="logo"
              initial={{opacity: 0, scale: 0.5}}
              animate={{
                opacity: 1,
                scale: 2.5,
                transition: {repeatType: "mirror", duration: 3},
              }}
              whileHover={{scale: 2}}
            />
          </motion.a>
        </div>

        <div className="wright">
          <div className="social">
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
              href="https://www.youtube.com/"
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
      </div>
    </div>
  );
};

export default Navbar;
