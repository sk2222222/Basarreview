import type { NextPage } from "next";
import Property1DefaultImage from "./Property1DefaultImage";
import TypePrimarySizesmStateA from "./TypePrimarySizesmStateA";
import ProfileImageContainer from "./ProfileImageContainer";
import styles from "./AccessProtocolForm.module.css";

type AccessProtocolFormType = {
  protocolDescription?: string;
  locationDescription?: string;
  accessProtocolDescription?: string;
};

const AccessProtocolForm: NextPage<AccessProtocolFormType> = ({
  protocolDescription = "Access Protocol",
  locationDescription = "Sacramento, California.",
  accessProtocolDescription = "Access Protocol provides a new model monetization layer for all digital content creators. As a Web3 protocol built on Solana and Starknet, it offers an alternative to B2C subscriptions.",
}) => {
  return (
    <div className={styles.companyProfile} id="Company profile_Card">
      <div className={styles.banner}>
        <Property1DefaultImage
          property1DefaultImageProp="/company-banner@2x.png"
          property1DefaultIconPosition="relative"
          property1DefaultIconMaxWidth="100%"
        />
      </div>
      <div className={styles.companyInfo}>
        <div className={styles.basicInfo}>
          <div className={styles.companyName}>
            <div className={styles.text}>{protocolDescription}</div>
          </div>
          <div className={styles.companyName1}>
            <div className={styles.text}>{locationDescription}</div>
          </div>
          <div className={styles.companyBiography}>
            <div className={styles.text2}>{accessProtocolDescription}</div>
          </div>
        </div>
        <div className={styles.cta}>
          <TypePrimarySizesmStateA
            heroiconsOutlineenvelope="/edit.svg"
            text="Edit profile"
            heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
            rightIcon={false}
            leftIcon
            typePrimarySizesmStateABackgroundColor="#f9f9f9"
            typePrimarySizesmStateABoxSizing="border-box"
            typePrimarySizesmStateACursor="pointer"
            typePrimarySizesmStateABorder="none"
            heroiconsOutlineenvelopeOverflow="unset"
            heroiconsOutlineenvelopeFlexShrink="unset"
            buttonColor="#151920"
            buttonDisplay="inline-block"
          />
        </div>
        <div className={styles.profileImageWrapper}>
          <ProfileImageContainer />
        </div>
      </div>
    </div>
  );
};

export default AccessProtocolForm;
