import React, { useState } from "react";
import Image from "next/image";

import Button from "@/pages/app/components/Button";

import AllReadyInFav from "../assets/AllReadyInFav.svg";
import Favourites from "../assets/saved.svg";
import Star from "../assets/Star.svg";

import Minus from "../assets/minus.svg";
import Plus from "../assets/+.svg";

import { useTypedSelector } from "@/pages/app/hooks/useTypedSelector";

import { IProduct } from "@/pages/app/store/product.types";

import btnStyles from "../styles/Button.module.scss";
import styles from "../styles/Card.module.scss";
import { useActions } from "@/pages/app/hooks/useActions";

interface Props {
  product: IProduct;
  isFav?: boolean;
  isShop?: boolean;
}

const Card: React.FC<Props> = ({ product, isShop }) => {
  const { favourite, basket } = useTypedSelector((state) => state);
  const { category, image, price, rating, title, id } = product;
  const rate = rating.rate.toFixed(0);
  const num = Number(rate);
  const fix = price.toFixed(0);
  const priceOfRub = Number(fix);

  const [changePrice, setChangePrice] = useState(priceOfRub);
  const [count, setCount] = useState(1);

  const isExistInFav = favourite.some((i) => i.id === id);
  const isExistInBasket = basket.some((i) => i.id === id);

  const { addItem, removeItem, addToBasket } = useActions();

  const minus = () => {
    if (count == 1) {
      return;
    }
    setCount(count - 1);
    setChangePrice(changePrice - priceOfRub);
  };

  const plus = () => {
    setCount(count + 1);

    setChangePrice(changePrice + priceOfRub);
  };

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <div className={styles.hit}>
          {rating.count > 300 ? (
            <Button title={"ХИТ"} style={btnStyles.hitBtn} />
          ) : (
            <div className={styles.empty}></div>
          )}
        </div>
        <Image src={image} alt={title} width={"160"} height={"160"} />
      </div>
      <div className={styles.about}>
        <div className={styles.head}>
          <p>{category}</p>
          <div>
            {new Array(5).fill("").map((_, index) => {
              return (
                <Star
                  className={index + 1 <= num || styles.activeStar}
                  key={index}
                />
              );
            })}
            &nbsp;
            <span className={styles.countRate}>{rating.count} отзыва</span>
          </div>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.price}>
          {changePrice * 70}₽ <span>/шт.</span>
        </div>
        <div className={styles.elem}>
          {isShop && (
            <div className={styles.counter}>
              <button
                onClick={() => !isExistInBasket && addToBasket(product)}
                className={isExistInBasket ? styles.inBasket : styles.btn}
              >
                {isExistInBasket ? "В корзине" : "В корзину"}
              </button>
              {isExistInBasket || (
                <>
                  <button onClick={minus} className={styles.minus}>
                    <Minus />
                  </button>
                  <span>{count}</span>
                  <button onClick={plus} className={styles.plus}>
                    <Plus />
                  </button>
                </>
              )}
            </div>
          )}
          <div>
            {isExistInFav ? (
              <AllReadyInFav onClick={() => removeItem({ id: id })} />
            ) : (
              <Favourites onClick={() => addItem(product)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
