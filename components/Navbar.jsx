import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  // https://codepen.io/coryschadt/pen/zYvPxOm

  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* rsposive hamberger menu */}
        <div className={styles.menu}>
          <div>
            <button
              onClick={() => setOpen(!isOpen)}
              className={[
                styles.hamburgerButton,
                isOpen ? styles.hamburgerOpen : styles.hamburgerClose,
              ].join(" ")}
            />
            <div
              className={[
                styles.panel,
                isOpen ? styles.panelopen : styles.close,
              ].join(" ")}
            >
              <Image
                src="/img/logo2.png"
                alt="logo"
                width="100px"
                height="100px"
                className={styles.listIogoImage}
              />
              <motion.ul className={styles.panelItems}>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/">
                    <a onClick={() => setOpen(!isOpen)}>خانه</a>
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/menu">
                    <a onClick={() => setOpen(!isOpen)}>منو</a>
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/orders/12">
                    <a onClick={() => setOpen(!isOpen)}>سفارشات</a>
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/cart">
                    <a onClick={() => setOpen(!isOpen)}>سبد خرید</a>
                  </Link>
                </motion.li>
              </motion.ul>
              <div className={styles.orderMenu}>
                <div className={styles.callButton}>
                  <Image
                    src="/img/telephone.png"
                    alt="telephone logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className={styles.texts}>
                  <div className={styles.text}>سفارش دهید</div>
                  <div className={styles.text}>3565</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.orderMain}>
          <div className={styles.callButton}>
            <Image
              src="/img/telephone.png"
              alt="telephone logo"
              width="32"
              height="32"
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>سفارش دهید</div>
            <div className={styles.text}>3565</div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              <a>خانه</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/menu">منو</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/orders/12">
              <a>سفارشات</a>
            </Link>
          </li>
          <Image
            src="/img/logo2.png"
            alt="logo"
            width="100px"
            height="100px"
            className={styles.listIogoImage}
          />
          <li className={styles.listItem}>رویدادها</li>
          <li className={styles.listItem}>بلاگ</li>
          <li className={styles.listItem}>ارتباط با ما</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart">
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="logo" width="30px" height="30px" />
            <div className={styles.counter}>2</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
