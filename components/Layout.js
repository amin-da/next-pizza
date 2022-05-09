import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -500, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <motion.main
      
      >
        <Navbar />
        {children}
        <Footer />
      </motion.main>
    </>
  );
};

export default Layout;
