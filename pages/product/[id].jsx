import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import { motion } from "framer-motion";

const Product = () => {
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
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    name: "مخصوص",
    img: "/img/pizza.png",
    price: [12, 25, 45],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quia?",
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
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            objectFit="contain"
            alt="pizza"
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.left}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]} هزار تومان</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>سایز پیتزا را انتخاب نمایید</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="pizza size" layout="fill" />
            <span className={styles.sizeNumber}>کوچک</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="pizza size" layout="fill" />
            <span className={styles.sizeNumber}>متوسط</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="pizza size" layout="fill" />
            <span className={styles.sizeNumberLast}>بزرگ</span>
          </div>
        </div>
        <h3>انتخاب مواد بیشتر</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="double"
              id="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">مواد 2 برابر</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="cheese"
              id="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">پنیر اضافه</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="spicy"
              id="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">فلفل اضافه</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="garlic"
              id="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">سیر اضافه</label>
          </div>
        </div>

        <div className={styles.add}>
          <input
            type="number"
            name=""
            id=""
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.btnAdd}>اضافه به سبد خرید</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
