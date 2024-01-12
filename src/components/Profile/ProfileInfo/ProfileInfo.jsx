import React from "react";
import styles from "./P.module.css";

export const ProfileInfo = (props) => {
  // старайся Использовать больше семантичных тегов
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src="https://sportishka.com/uploads/posts/2021-12/1639461424_40-sportishka-com-p-mototsikl-minsk-na-oboi-sport-krasivo-foto-42.jpg"
        alt="dsads"
      ></img>
      <div className={styles.descriptionBlock}>ava + ssfsfdes</div>
    </div>
  );
};
