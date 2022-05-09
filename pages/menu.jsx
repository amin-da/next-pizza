import React from "react";
import styles from "../styles/Menu.module.css";
import PizzaCard from "../components/PizzaCard";

const menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>! بهترین پیتزایی که چشیده اید</h1>
      <p className={styles.desc}>
        ترکیبی از انتخاب بهترین مواد اولیه با وسواس زیاد ، خمیر با کیفیت و تجربه
        سالیان دراز در پخت پیتزا باعث شده تا بتوانیم غذایی در حد استاندارد های
        جهانی را برای شما فراهم کنیم
      </p>
      <div className={styles.wrapper}>
        <PizzaCard src="pizza-1.jpg" name="ساده" />
        <PizzaCard src="pizza-2.jpg" name="قارچ" />
        <PizzaCard src="pizza-3.jpg" name="رژیمی" />
        <PizzaCard src="pizza-4.jpg" name="قارچ و سبزیجات" />
        <PizzaCard src="pizza-5.jpg" name="مخصوص" />
        <PizzaCard src="pizza-6.jpg" name="فصل" />
        <PizzaCard src="pizza-7.jpg" name="دریایی" />
        <PizzaCard src="pizza-9.jpg" name="مخلوط" />
        <PizzaCard src="pizza-5.jpg" name="مخصوص" />
        <PizzaCard src="pizza-2.jpg" name="قارچ" />
        <PizzaCard src="pizza-3.jpg" name="رژیمی" />
        <PizzaCard src="pizza-8.jpg" name="مخلوط" />
      </div>
    </div>
  );
};

export default menu;
