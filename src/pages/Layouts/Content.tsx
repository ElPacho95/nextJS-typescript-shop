import Header from "@/components/Header";

import Main from "@/components/Main";

import styles from "../../scss/Content.module.scss";
const Content: React.FC = () => {
  return (
    <div className={styles.test}>
      <Header />
      <Main />
    </div>
  );
};

export default Content;
