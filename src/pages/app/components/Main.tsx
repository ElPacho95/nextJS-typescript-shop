import Advertisement from "@/pages/app/components/Advertisement";
import { useGetProductsQuery } from "@/pages/app/store/product";
import { IProduct } from "@/pages/app/store/product.types";

import Card from "@/pages/app/components/Card";

import styles from "../styles/Main.module.scss";
import React from "react";


const Main: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(9);


  return (
    <div>
      <div className={styles.main}>
        <Advertisement />
        {isLoading ? (
          "loading..."
        ) : error ? (
          "error"
        ) : (
          <>
            {data?.map((item: IProduct) => {
              return <Card key={item.id} product={item} isShop={true}/>;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
