import type { NextPage } from "next";
import Property1Default from "./Property1Default";
import styles from "./Property1Default1.module.css";

type Property1Default1Type = {
  tag?: string;
};

const Property1Default1: NextPage<Property1Default1Type> = ({
  tag = "Text",
}) => {
  return (
    <div className={styles.property1default}>
      <div className={styles.text}>{tag}</div>
      <Property1Default rangeSliderRequirementsPh="/range-sliderrequirementsphosphor-icons-mathfinancephosphor-iconsx.svg" />
    </div>
  );
};

export default Property1Default1;
