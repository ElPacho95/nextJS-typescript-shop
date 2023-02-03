import React from "react";
import Image from "next/image";

import Button from "@/components/Button";

import gamePc from "@/assets/game-pc.jpg";
import Arrow from "@/assets/arrow.svg";
import mac from "@/assets/mac.jpg";

import styles from "@/scss/Main.module.scss";
import btnStyles from "../scss/Button.module.scss";

const Advertisement: React.FC = () => {
  return (
    <div className={styles.advertisement}>
      <h2>
        Всё для комфортной <br />
        работы
      </h2>
      <p>
        <Arrow />
      </p>
      <div>
        <div className={styles.first}>
          <Image src={mac} alt="" width={"166"} height={"140"} />
          <div className={styles.bg}>
            <Button title={"- 25%"} style={btnStyles.btn} /> <br />
            на товары <br /> для кабинета <br />
            <button>Выбрать</button>
          </div>
        </div>
        <div className={styles.last}>
          <div>
            Скидка &nbsp;&nbsp;
            <Button title={"10%"} style={btnStyles.btn} /> <br />
            на периферию <br /> для компьютера <br />
            <button className={styles.select}>Выбрать</button>
          </div>
          <Image src={gamePc} alt="" width={"185"} />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
