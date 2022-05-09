import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          objectFit="center"
          alt="footer background"
          layout="fill"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.moto}>
            هدف ما تجربه بهترین طعم ها و چشیدن لذیذترین پیتزا ها توسط شماست
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>شعب ما در سراسر کشور</h1>
          <p className={styles.text}>تهران چهار راه ولیعصر</p>
          <p className={styles.text}>مشهد فلکه آب</p>
          <p className={styles.text}>اصفهان نقش جهان</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ساعت کاری ما</h1>
          <p className={styles.text}>
            شنبه تا چهار شنبه
            <br />
            11-23
          </p>
          <p className={styles.text}>
            پنج شنبه و جمعه
            <br />
            12-24
          </p>
        </div>
      </div>
      {/* <ul className={styles.footerMenu}>
        <li>
          <Link href="/">
            <a>خانه</a>
          </Link>
        </li>
        <li>
          <Link href="/orders/12">
            <a>سفارشات</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>سبد خرید</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>بلاگ</a>
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Footer;
