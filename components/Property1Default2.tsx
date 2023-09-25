import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Property1Default2.module.css";

type Property1Default2Type = {
  label?: string;
  message?: string;

  /** Style props */
  property1DefaultJustifyContent?: CSSProperties["justifyContent"];
};

const Property1Default2: NextPage<Property1Default2Type> = ({
  label = "Text",
  message,
  property1DefaultJustifyContent,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: property1DefaultJustifyContent,
    };
  }, [property1DefaultJustifyContent]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.header}>
        <div className={styles.text}>{label}</div>
        <img className={styles.messageIcon} alt="" src={message} />
      </div>
    </div>
  );
};

export default Property1Default2;
