import Image from "next/image";

import Favourites from "../assets/favourites.svg";
import Basket from "../assets/basket.svg";

import styles from "../styles/Header.module.scss";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className={styles.head}>
      <h1>Shop</h1>
      <div className={styles.pages}>
        <Link href="/app/Layouts/Favourites">
          <Favourites  />
        </Link>
          <Link href={"/app/Layouts/Basket"}>
              <Basket  />
          </Link>
      </div>
    </div>
  );
};

export default Header;
