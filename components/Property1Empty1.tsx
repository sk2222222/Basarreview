import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ContainerHeader from "./ContainerHeader";
import HeroiconsOutlineplusSmall from "./HeroiconsOutlineplusSmall";
import styles from "./Property1Empty1.module.css";

type Property1Empty1Type = {
  note2?: string;
  line287?: string;

  /** Style props */
  property1EmptyMinWidth?: CSSProperties["minWidth"];
};

const Property1Empty1: NextPage<Property1Empty1Type> = ({
  note2,
  line287,
  property1EmptyMinWidth,
}) => {
  const property1EmptyStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: property1EmptyMinWidth,
    };
  }, [property1EmptyMinWidth]);

  return (
    <div className={styles.property1empty} style={property1EmptyStyle}>
      <ContainerHeader dimensionCode="/note21.svg" imageCode="/line-2872.svg" />
      <div className={styles.message}>
        <HeroiconsOutlineplusSmall searchStatus="/searchstatus.svg" />
        <div className={styles.headline}>
          <div className={styles.noProjectOpportunities}>
            No project opportunities posted yet
          </div>
        </div>
        <div className={styles.message1}>
          <div className={styles.whenYoureReady}>
            When you're ready to share a new project opportunity click the "Post
            a new project " button to get started.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Empty1;
