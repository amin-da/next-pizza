import styles from "../../styles/Order.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Order = () => {
  //framer motion animation cofnig
  const variants = {
    hidden: { opacity: 0, y: "-50vh" },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 1.2,
        type: "spring",
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
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
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
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>شماره سفارش</th>
              <th>نام مشتری</th>
              <th>آدرس</th>
              <th>جمع</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>25647</span>
              </td>
              <td>
                <span className={styles.name}>جان دو</span>
              </td>
              <td>
                <span className={styles.address}>چهارا راه اول ، کوچه دوم</span>
              </td>
              <td>
                <span className={styles.total}>80 هزار تومان</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image
              src="/img/paid.png"
              width={30}
              height={30}
              alt="status image"
            />
            <span> وضعیت پرداخت</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                width={20}
                height={20}
                alt="status image"
                className={styles.checkedIcon}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              src="/img/bake.png"
              width={30}
              height={30}
              alt="status image"
            />
            <span>در حال آماده سازی</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                width={20}
                height={20}
                alt="status image"
                className={styles.checkedIcon}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              src="/img/bike.png"
              width={30}
              height={30}
              alt="status image"
            />
            <span>در مسیر</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                width={20}
                height={20}
                alt="status image"
                className={styles.checkedIcon}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/img/delivered.png"
              width={30}
              height={30}
              alt="status image"
            />
            <span>دریافت شده</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                width={20}
                height={20}
                alt="status image"
                className={styles.checkedIcon}
              />
            </div>
          </div>
        </div>
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
          <button className={styles.button} disabled>
            پرداخت شده
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Order;
