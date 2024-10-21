import React from "react";
import { motion } from "framer-motion";
import img from "../assets/arr.svg";
import "../styles.css";

export const Button = () => {
  const [isHover, setIsHover] = React.useState(false);
  console.log(img);

  return (
    <button
      className="button"
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
    >
      <div className="title">CONTACT ME</div>

      <div className="circle">
        <motion.div
          className="dot"
          animate={{
            scale: isHover ? 1 : 0.25,
          }} // Hover olduğunda büyüme ve renk değiştirme
          transition={{ duration: 0.1 }}
        >
          <motion.img
            src={img}
            className="img"
            alt="vector"
            animate={{ opacity: isHover ? 1 : 0 }}
            transition={{ duration: 0.02 }} // Hover olduğunda döndürme animasyonu
          />
        </motion.div>
      </div>
    </button>
  );
};
