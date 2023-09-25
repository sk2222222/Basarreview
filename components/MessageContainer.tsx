import type { NextPage } from "next";
import Property1Default2 from "./Property1Default2";
import TypeSecondaryColorSizesm from "./TypeSecondaryColorSizesm";
import styles from "./MessageContainer.module.css";

const MessageContainer: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header1}>
        <Property1Default2
          label="Messages"
          message="/messages.svg"
          property1DefaultJustifyContent="center"
        />
        <TypeSecondaryColorSizesm
          heroiconsOutlineenvelope="/heroiconsoutlineenvelope.svg"
          text="Go to messages"
          heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
          rightIcon={false}
          leftIcon={false}
          typeSecondaryColorSizesmBackgroundColor="#f9f9f9"
          typeSecondaryColorSizesmBoxSizing="border-box"
          typeSecondaryColorSizesmCursor="unset"
          typeSecondaryColorSizesmBorder="unset"
          heroiconsOutlineenvelopeOverflow="hidden"
          heroiconsOutlineenvelopeFlexShrink="0"
          buttonFontWeight="500"
          buttonFontFamily="'DM Sans'"
          buttonColor="#151920"
          buttonDisplay="inline-block"
        />
      </div>
      <img className={styles.headerChild} alt="" src="/line-287.svg" />
    </div>
  );
};

export default MessageContainer;
