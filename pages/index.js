import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  //framer motion animation cofnig
  const variants = {
    hidden: { opacity: 0, y: "-50vh" },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 30,
      },
    },
    out: {
      y: "-50vh",
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="out"
      variants={variants}
      className={styles.container}
    >
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Best pizza in world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </motion.div>
  );
}
