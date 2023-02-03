import Advertisement from "@/components/Advertisement";
import { useGetProductsQuery } from "@/pages/api/store/product";
import { IProduct } from "@/pages/api/store/product.types";

import Card from "@/components/Card";

import styles from "../scss/Main.module.scss";
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
              return <Card key={item.id} product={item} isShop={true} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
