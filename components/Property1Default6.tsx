import type { NextPage } from "next";
import styles from "./Property1Default6.module.css";

type Property1Default6Type = {
  message?: string;
};

const Property1Default6: NextPage<Property1Default6Type> = ({ message }) => {
  return (
    <div className={styles.property1default}>
      <div className={styles.messageWrapper}>
        <img className={styles.messageIcon} alt="" src={message} />
      </div>
    </div>
  );
};

export default Property1Default6;
