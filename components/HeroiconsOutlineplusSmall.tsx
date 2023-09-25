import type { NextPage } from "next";
import styles from "./HeroiconsOutlineplusSmall.module.css";

type HeroiconsOutlineplusSmallType = {
  searchStatus?: string;
};

const HeroiconsOutlineplusSmall: NextPage<HeroiconsOutlineplusSmallType> = ({
  searchStatus,
}) => {
  return (
    <div className={styles.heroiconsOutlineplusSmall}>
      <img className={styles.searchStatusIcon} alt="" src={searchStatus} />
    </div>
  );
};

export default HeroiconsOutlineplusSmall;
