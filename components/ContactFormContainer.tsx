import type { NextPage } from "next";
import AccessProtocolForm from "./AccessProtocolForm";
import Property1Default2 from "./Property1Default2";
import SizexsCornersSmoothState1 from "./SizexsCornersSmoothState1";
import Property1Default1 from "./Property1Default1";
import SizexsCornersSmoothState from "./SizexsCornersSmoothState";
import styles from "./ContactFormContainer.module.css";

const ContactFormContainer: NextPage = () => {
  return (
    <div className={styles.companycontacttags}>
      <AccessProtocolForm
        protocolDescription="Access Protocol"
        locationDescription="Sacramento, California."
        accessProtocolDescription="Access Protocol provides a new model monetization layer for all digital content creators. As a Web3 protocol built on Solana and Starknet, it offers an alternative to B2C subscriptions."
      />
      <div className={styles.divContacttags}>
        <div className={styles.contact}>
          <div className={styles.header}>
            <div className={styles.header1}>
              <Property1Default2
                label="Contact"
                message="/link.svg"
                property1DefaultJustifyContent="space-between"
              />
            </div>
            <img className={styles.headerChild} alt="" src="/line-287.svg" />
          </div>
          <div className={styles.editWebsite}>
            <div className={styles.mywebsitecomWrapper}>
              <div className={styles.mywebsitecom}>mywebsite.com</div>
            </div>
            <SizexsCornersSmoothState1
              heroiconsOutlineplus="/edit2.svg"
              heroiconsOutlineplusOverflow="unset"
              heroiconsOutlineplusFlexShrink="unset"
            />
          </div>
          <div className={styles.editWebsite1}>
            <div className={styles.mywebsitecomWrapper}>
              <div className={styles.mywebsitecom}>twitter/account</div>
            </div>
            <SizexsCornersSmoothState1
              heroiconsOutlineplus="/edit2.svg"
              heroiconsOutlineplusOverflow="unset"
              heroiconsOutlineplusFlexShrink="unset"
            />
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.header2}>
            <div className={styles.header3}>
              <Property1Default2
                label="Tags"
                message="/tagright.svg"
                property1DefaultJustifyContent="center"
              />
            </div>
            <img className={styles.headerChild} alt="" src="/line-287.svg" />
          </div>
          <div className={styles.tags1}>
            <Property1Default1 tag="Web3" />
            <Property1Default1 tag="Blockchain" />
            <SizexsCornersSmoothState />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormContainer;
