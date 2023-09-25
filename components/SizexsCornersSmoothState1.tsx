import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SizexsCornersSmoothState1.module.css";

type SizexsCornersSmoothState1Type = {
  heroiconsOutlineplus?: string;

  /** Style props */
  heroiconsOutlineplusOverflow?: CSSProperties["overflow"];
  heroiconsOutlineplusFlexShrink?: CSSProperties["flexShrink"];
};

const SizexsCornersSmoothState1: NextPage<SizexsCornersSmoothState1Type> = ({
  heroiconsOutlineplus,
  heroiconsOutlineplusOverflow,
  heroiconsOutlineplusFlexShrink,
}) => {
  const heroiconsOutlineplusStyle: CSSProperties = useMemo(() => {
    return {
      overflow: heroiconsOutlineplusOverflow,
      flexShrink: heroiconsOutlineplusFlexShrink,
    };
  }, [heroiconsOutlineplusOverflow, heroiconsOutlineplusFlexShrink]);

  return (
    <div className={styles.sizexsCornerssmoothState}>
      <div className={styles.stateLayer}>
        <img
          className={styles.heroiconsOutlineplus}
          alt=""
          src={heroiconsOutlineplus}
          style={heroiconsOutlineplusStyle}
        />
      </div>
    </div>
  );
};

export default SizexsCornersSmoothState1;
