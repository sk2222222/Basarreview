import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./TypeSecondaryColorSizesm.module.css";

type TypeSecondaryColorSizesmType = {
  heroiconsOutlineenvelope?: string;
  text?: string;
  heroiconsOutlinearrowRigh?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;

  /** Style props */
  typeSecondaryColorSizesmBackgroundColor?: CSSProperties["backgroundColor"];
  typeSecondaryColorSizesmBoxSizing?: CSSProperties["boxSizing"];
  typeSecondaryColorSizesmCursor?: CSSProperties["cursor"];
  typeSecondaryColorSizesmBorder?: CSSProperties["border"];
  heroiconsOutlineenvelopeOverflow?: CSSProperties["overflow"];
  heroiconsOutlineenvelopeFlexShrink?: CSSProperties["flexShrink"];
  buttonFontWeight?: CSSProperties["fontWeight"];
  buttonFontFamily?: CSSProperties["fontFamily"];
  buttonColor?: CSSProperties["color"];
  buttonDisplay?: CSSProperties["display"];
};

const TypeSecondaryColorSizesm: NextPage<TypeSecondaryColorSizesmType> = ({
  heroiconsOutlineenvelope,
  text = "Button",
  heroiconsOutlinearrowRigh,
  rightIcon = true,
  leftIcon = true,
  typeSecondaryColorSizesmBackgroundColor,
  typeSecondaryColorSizesmBoxSizing,
  typeSecondaryColorSizesmCursor,
  typeSecondaryColorSizesmBorder,
  heroiconsOutlineenvelopeOverflow,
  heroiconsOutlineenvelopeFlexShrink,
  buttonFontWeight,
  buttonFontFamily,
  buttonColor,
  buttonDisplay,
}) => {
  const typeSecondaryColorSizesmStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typeSecondaryColorSizesmBackgroundColor,
      boxSizing: typeSecondaryColorSizesmBoxSizing,
      cursor: typeSecondaryColorSizesmCursor,
      border: typeSecondaryColorSizesmBorder,
    };
  }, [
    typeSecondaryColorSizesmBackgroundColor,
    typeSecondaryColorSizesmBoxSizing,
    typeSecondaryColorSizesmCursor,
    typeSecondaryColorSizesmBorder,
  ]);

  const heroiconsOutlineenvelope2Style: CSSProperties = useMemo(() => {
    return {
      overflow: heroiconsOutlineenvelopeOverflow,
      flexShrink: heroiconsOutlineenvelopeFlexShrink,
    };
  }, [heroiconsOutlineenvelopeOverflow, heroiconsOutlineenvelopeFlexShrink]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: buttonFontWeight,
      fontFamily: buttonFontFamily,
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonFontWeight, buttonFontFamily, buttonColor, buttonDisplay]);

  return (
    <div
      className={styles.typesecondaryColorSizesm}
      style={typeSecondaryColorSizesmStyle}
    >
      <div className={styles.stateLayer}>
        {leftIcon && (
          <img
            className={styles.heroiconsOutlineenvelope}
            alt=""
            src={heroiconsOutlineenvelope}
            style={heroiconsOutlineenvelope2Style}
          />
        )}
        <div className={styles.button} style={button1Style}>
          {text}
        </div>
        {rightIcon && (
          <img
            className={styles.heroiconsOutlineenvelope}
            alt=""
            src={heroiconsOutlinearrowRigh}
          />
        )}
      </div>
    </div>
  );
};

export default TypeSecondaryColorSizesm;
