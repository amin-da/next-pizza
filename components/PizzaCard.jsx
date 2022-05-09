import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  hidden: { opacity: 0, scale: 0.3 },
};

const PizzaCard = ({ src, name }) => {
  const router = useRouter();

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/product/12");
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className={styles.container}
      onClick={handleClick}
    >
      <Image src={`/img/${src}`} width="300" height="300" alt="pizza-img" />
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.price}>70 هزار تومان</span>
      <p className={styles.desc}>ترکیبی از بهترین مواد</p>
    </motion.div>
  );
};

export default PizzaCard;
