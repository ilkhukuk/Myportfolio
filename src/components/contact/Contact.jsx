import {useRef, useState} from "react";
import "./contact.scss";
import {motion, useInView} from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, {margin: "-100px"});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xyqfupc",
        "template_dxllz8r",
        formRef.current,
        "mgKevuXCvpGtZzSCN"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );

      console.log(formRef.current)

  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>ilkhukuk@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Istanbul, Turkiye</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+90 555 020 54 03</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="mailimg"
          initial={{opacity: 1}}
          whileInView={{opacity: 0}}
          transition={{delay: 3, duration: 1}}
        >
          <motion.img
            src="/mailani.gif"
            strokeWidth={2}
            fill="none"
            initial={{pathLength: 0}}
            animate={isInView && {pathLength: 1}}
            transition={{duration: 5}}
          />
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 4, duration: 1}}
        >
          <input type="text" required placeholder="NAME" name="name" />
          <input type="email" required placeholder="E-MAIL" name="email" />
          <textarea rows={8} placeholder="MESSAGE" name="message" />
          <button>SUBMIT</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
