import Image from "next/image";
import styles from "../styles/Featured.module.css";
import React, { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured2.jpeg",
    "/img/featured4.png",
    "/img/featured33.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container} >
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrow key"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((item, index) => {
          return (
            <div className={styles.imgContainer} key={index}>
              <Image
                src={item}
                alt="arrow key"
                layout="fill"
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrow key"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
