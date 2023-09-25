import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Property1Pressed from "./Property1Pressed";
import styles from "./SidebarDAppCompany.module.css";

type SidebarDAppCompanyType = {
  discover?: string;
  documentText?: string;
  profile?: string;
  setting2?: string;
  vuesaxlinearmessageQuesti?: string;
  logout?: string;

  /** Style props */
  sidebarDAppCompanyPosition?: CSSProperties["position"];
  sidebarDAppCompanyBottom?: CSSProperties["bottom"];
  sidebarDAppCompanyLeft?: CSSProperties["left"];
  iconSidebarBackgroundColor?: CSSProperties["backgroundColor"];
};

const SidebarDAppCompany: NextPage<SidebarDAppCompanyType> = ({
  discover,
  documentText,
  profile,
  setting2,
  vuesaxlinearmessageQuesti,
  logout,
  sidebarDAppCompanyPosition,
  sidebarDAppCompanyBottom,
  sidebarDAppCompanyLeft,
  iconSidebarBackgroundColor,
}) => {
  const sidebarDAppCompanyStyle: CSSProperties = useMemo(() => {
    return {
      position: sidebarDAppCompanyPosition,
      bottom: sidebarDAppCompanyBottom,
      left: sidebarDAppCompanyLeft,
    };
  }, [
    sidebarDAppCompanyPosition,
    sidebarDAppCompanyBottom,
    sidebarDAppCompanyLeft,
  ]);

  const property1PressedStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: iconSidebarBackgroundColor,
    };
  }, [iconSidebarBackgroundColor]);

  return (
    <div className={styles.sidebarDappCompany} style={sidebarDAppCompanyStyle}>
      <div className={styles.sidebarContent}>
        <div className={styles.menu}>
          <Property1Pressed
            profile="/discover1.svg"
            property1PressedBackgroundColor="unset"
          />
          <Property1Pressed
            profile="/documenttext1.svg"
            property1PressedBackgroundColor="unset"
          />
          <Property1Pressed
            profile="/profile1.svg"
            property1PressedBackgroundColor="unset"
          />
          <Property1Pressed
            profile="/setting22.svg"
            property1PressedBackgroundColor="unset"
          />
          <div className={styles.iconHelpSupport}>
            <img
              className={styles.vuesaxlinearmessageQuestionIcon}
              alt=""
              src={vuesaxlinearmessageQuesti}
            />
          </div>
        </div>
      </div>
      <Property1Pressed
        profile="/logout1.svg"
        property1PressedBackgroundColor="unset"
      />
    </div>
  );
};

export default SidebarDAppCompany;
