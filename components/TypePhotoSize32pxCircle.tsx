import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./TypePhotoSize32pxCircle.module.css";

type TypePhotoSize32pxCircleType = {
  iconId?: string;

  /** Style props */
  typePhotoSize32pxCirclePosition?: CSSProperties["position"];
};

const TypePhotoSize32pxCircle: NextPage<TypePhotoSize32pxCircleType> = ({
  iconId,
  typePhotoSize32pxCirclePosition,
}) => {
  const typePhotoSize32pxCircleStyle: CSSProperties = useMemo(() => {
    return {
      position: typePhotoSize32pxCirclePosition,
    };
  }, [typePhotoSize32pxCirclePosition]);

  return (
    <div
      className={styles.typephotoSize32pxCircle}
      style={typePhotoSize32pxCircleStyle}
    >
      <img className={styles.imageIcon} alt="" src={iconId} />
      <img className={styles.component1Icon} alt="" src="/component-1.svg" />
    </div>
  );
};

export default TypePhotoSize32pxCircle;
