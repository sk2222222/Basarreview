import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Property1Pressed.module.css";

type Property1PressedType = {
  profile?: string;

  /** Style props */
  property1PressedBackgroundColor?: CSSProperties["backgroundColor"];
};

const Property1Pressed: NextPage<Property1PressedType> = ({
  profile,
  property1PressedBackgroundColor,
}) => {
  const property1PressedStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property1PressedBackgroundColor,
    };
  }, [property1PressedBackgroundColor]);

  return (
    <div className={styles.property1pressed} style={property1PressedStyle}>
      <img className={styles.profileIcon} alt="" src={profile} />
    </div>
  );
};

export default Property1Pressed;
