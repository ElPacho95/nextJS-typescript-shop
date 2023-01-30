import Header from "@/pages/app/components/Header";

import styles from "../styles/Content.module.scss";
import Main from "@/pages/app/components/Main";
import React, { useEffect } from "react";
import { useActions } from "@/pages/app/hooks/useActions";

const Content: React.FC = () => {

  return (
    <div className={styles.test}>
      <Header />
      <Main />
    </div>
  );
};

export default Content;
