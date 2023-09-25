import type { NextPage } from "next";
import styles from "./Property1Default.module.css";

type Property1DefaultType = {
  rangeSliderRequirementsPh?: string;
};

const Property1Default: NextPage<Property1DefaultType> = ({
  rangeSliderRequirementsPh,
}) => {
  return (
    <div className={styles.property1default}>
      <img
        className={styles.rangeSliderrequirementsphosIcon}
        alt=""
        src={rangeSliderRequirementsPh}
      />
    </div>
  );
};

export default Property1Default;
