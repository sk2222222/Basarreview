import type { NextPage } from "next";
import styles from "./Property1Default5.module.css";

type Property1Default5Type = {
  notification?: string;
};

const Property1Default5: NextPage<Property1Default5Type> = ({
  notification,
}) => {
  return (
    <div className={styles.property1default}>
      <div className={styles.notificationWrapper}>
        <img className={styles.notificationIcon} alt="" src={notification} />
      </div>
    </div>
  );
};

export default Property1Default5;
