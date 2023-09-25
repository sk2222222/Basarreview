import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./TypePrimarySizesmStateA.module.css";

type TypePrimarySizesmStateAType = {
  heroiconsOutlineenvelope?: string;
  text?: string;
  heroiconsOutlinearrowRigh?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;

  /** Style props */
  typePrimarySizesmStateABackgroundColor?: CSSProperties["backgroundColor"];
  typePrimarySizesmStateABoxSizing?: CSSProperties["boxSizing"];
  typePrimarySizesmStateACursor?: CSSProperties["cursor"];
  typePrimarySizesmStateABorder?: CSSProperties["border"];
  heroiconsOutlineenvelopeOverflow?: CSSProperties["overflow"];
  heroiconsOutlineenvelopeFlexShrink?: CSSProperties["flexShrink"];
  buttonColor?: CSSProperties["color"];
  buttonDisplay?: CSSProperties["display"];
};

const TypePrimarySizesmStateA: NextPage<TypePrimarySizesmStateAType> = ({
  heroiconsOutlineenvelope,
  text = "Button",
  heroiconsOutlinearrowRigh,
  rightIcon = true,
  leftIcon = true,
  typePrimarySizesmStateABackgroundColor,
  typePrimarySizesmStateABoxSizing,
  typePrimarySizesmStateACursor,
  typePrimarySizesmStateABorder,
  heroiconsOutlineenvelopeOverflow,
  heroiconsOutlineenvelopeFlexShrink,
  buttonColor,
  buttonDisplay,
}) => {
  const typePrimarySizesmStateAStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typePrimarySizesmStateABackgroundColor,
      boxSizing: typePrimarySizesmStateABoxSizing,
      cursor: typePrimarySizesmStateACursor,
      border: typePrimarySizesmStateABorder,
    };
  }, [
    typePrimarySizesmStateABackgroundColor,
    typePrimarySizesmStateABoxSizing,
    typePrimarySizesmStateACursor,
    typePrimarySizesmStateABorder,
  ]);

  const heroiconsOutlineenvelopeStyle: CSSProperties = useMemo(() => {
    return {
      overflow: heroiconsOutlineenvelopeOverflow,
      flexShrink: heroiconsOutlineenvelopeFlexShrink,
    };
  }, [heroiconsOutlineenvelopeOverflow, heroiconsOutlineenvelopeFlexShrink]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonDisplay]);

  return (
    <div
      className={styles.typeprimarySizesmStatea}
      style={typePrimarySizesmStateAStyle}
    >
      <div className={styles.stateLayer}>
        {leftIcon && (
          <img
            className={styles.heroiconsOutlineenvelope}
            alt=""
            src={heroiconsOutlineenvelope}
            style={heroiconsOutlineenvelopeStyle}
          />
        )}
        <div className={styles.button} style={buttonStyle}>
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

export default TypePrimarySizesmStateA;
