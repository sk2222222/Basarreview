import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Property1DefaultImage.module.css";

type Property1DefaultImageType = {
  property1DefaultImageProp?: string;

  /** Style props */
  property1DefaultIconPosition?: CSSProperties["position"];
  property1DefaultIconMaxWidth?: CSSProperties["maxWidth"];
};

const Property1DefaultImage: NextPage<Property1DefaultImageType> = ({
  property1DefaultImageProp,
  property1DefaultIconPosition,
  property1DefaultIconMaxWidth,
}) => {
  const property1DefaultIconStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultIconPosition,
      maxWidth: property1DefaultIconMaxWidth,
    };
  }, [property1DefaultIconPosition, property1DefaultIconMaxWidth]);

  return (
    <img
      className={styles.property1defaultIcon}
      alt=""
      src={property1DefaultImageProp}
      style={property1DefaultIconStyle}
    />
  );
};

export default Property1DefaultImage;
