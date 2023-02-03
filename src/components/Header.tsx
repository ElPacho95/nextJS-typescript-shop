import Image from "next/image";

import Favourites from "../assets/favourites.svg";
import Basket from "../assets/basket.svg";

import styles from "../scss/Header.module.scss";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className={styles.head}>
      <h1>Shop</h1>
      <div className={styles.pages}>
        <Link href="/Layouts/Favourites">
          <Favourites />
        </Link>
        <Link href={"/Layouts/Basket"}>
          <Basket />
        </Link>
      </div>
    </div>
  );
};

export default Header;
