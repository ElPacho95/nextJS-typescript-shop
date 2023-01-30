import React from "react";
import { IProduct } from "@/pages/app/store/product.types";
import { useTypedSelector } from "@/pages/app/hooks/useTypedSelector";
import Card from "@/pages/app/components/Card";

import styles from "../styles/Card.module.scss";
import Link from "next/link";

const Favourites = () => {
  const { favourite } = useTypedSelector((state) => state);

  if (favourite.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>У вас нету избранных товаров</h2>
        <Link href={"/"} style={{textDecoration: 'none'}}>
          <h3 style={{ textAlign: "center" }}>Вернуться назад</h3>
        </Link>
      </div>
    );
  }
  return (
    <div>
        <Link href={"/"} style={{textDecoration: 'none'}}>
            <h3 style={{  margin: "24px" }}>Вернуться назад</h3>
        </Link>
      <div className={styles.favourites}>
        {favourite.map((item: IProduct) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
