import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { motion } from "framer-motion";

const Cart = () => {
  //framer motion animation cofnig
  const variants = {
    hidden: { opacity: 0, x: "-30vw" },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 1.2,
        type: "spring",
        stiffness: 50,

      },
    },
    out: {
      x: "-50vw",
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
      <div className={styles.right}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>محصول</th>
            <th>نام</th>
            <th>اضافه ها</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>جمع</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  alt="pizza image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>مخصوص</span>
            </td>
            <td>
              <span className={styles.extras}>پنیر اضاقه و فلفل بیشتر</span>
            </td>
            <td>
              <span className={styles.price}>40 هزار تومان</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>80 هزار تومان</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  alt="pizza image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>مخصوص</span>
            </td>
            <td>
              <span className={styles.extras}>پنیر اضاقه و فلفل بیشتر</span>
            </td>
            <td>
              <span className={styles.price}>40 هزار تومان</span>
            </td>
            <td>
              <span className={styles.quantity}>1</span>
            </td>
            <td>
              <span className={styles.total}>40 هزار تومان</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>جمع کل</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>جمع سفارش :</b> 120 هزار تومان
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> تخفیف :</b>5 درصد
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>مبلغ نهایی :</b> 114 هزار تومان
          </div>
          <button className={styles.button}>پرداخت</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
