import React from "react";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import Link from "next/link";
import styles from "@/scss/Card.module.scss";
import { IProduct } from "@/pages/api/store/product.types";
import Card from "@/components/Card";

const Basket = () => {
  const { basket } = useTypedSelector((state) => state);

  if (basket.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Корзина пуста</h2>
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <h3 style={{ textAlign: "center", margin: "24" }}>Вернуться назад</h3>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link href={"/"} style={{ textDecoration: "none" }}>
        <h3 style={{ margin: "24px" }}>Вернуться назад</h3>
      </Link>
      <div className={styles.favourites}>
        {basket.map((item: IProduct) => (
          <Card key={item.id} product={item} isShop={false} isBasket={true} />
        ))}
      </div>
    </div>
  );
};

export default Basket;
