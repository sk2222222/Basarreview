import type { NextPage } from "next";
import Property1Default2 from "./Property1Default2";
import TypeSecondaryColorSizesm from "./TypeSecondaryColorSizesm";
import styles from "./ContainerHeader.module.css";

type ContainerHeaderType = {
  dimensionCode?: string;
  imageCode?: string;
};

const ContainerHeader: NextPage<ContainerHeaderType> = ({
  dimensionCode,
  imageCode,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header1}>
        <Property1Default2
          label="Posted project opportunities"
          message="/note2.svg"
          property1DefaultJustifyContent="space-between"
        />
        <div className={styles.cta}>
          <TypeSecondaryColorSizesm
            heroiconsOutlineenvelope="/addcircle.svg"
            text="Go to projects"
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
            rightIcon={false}
            leftIcon={false}
            typeSecondaryColorSizesmBackgroundColor="#f9f9f9"
            typeSecondaryColorSizesmBoxSizing="border-box"
            typeSecondaryColorSizesmCursor="unset"
            typeSecondaryColorSizesmBorder="unset"
            heroiconsOutlineenvelopeOverflow="unset"
            heroiconsOutlineenvelopeFlexShrink="unset"
            buttonFontWeight="500"
            buttonFontFamily="'DM Sans'"
            buttonColor="#151920"
            buttonDisplay="inline-block"
          />
          <TypeSecondaryColorSizesm
            heroiconsOutlineenvelope="/addcircle1.svg"
            text="Post a new project "
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright2.svg"
            rightIcon={false}
            leftIcon
            typeSecondaryColorSizesmBackgroundColor="#151920"
            typeSecondaryColorSizesmBoxSizing="border-box"
            typeSecondaryColorSizesmCursor="unset"
            typeSecondaryColorSizesmBorder="unset"
            heroiconsOutlineenvelopeOverflow="unset"
            heroiconsOutlineenvelopeFlexShrink="unset"
            buttonFontWeight="500"
            buttonFontFamily="'DM Sans'"
            buttonColor="#fff"
            buttonDisplay="inline-block"
          />
        </div>
      </div>
      <img className={styles.headerChild} alt="" src={imageCode} />
    </div>
  );
};

export default ContainerHeader;
