import type { NextPage } from "next";
import Head from "next/head";
import ContactFormContainer from "../components/ContactFormContainer";
import ProjectMessagesContainer from "../components/ProjectMessagesContainer";
import SidebarDAppCompany from "../components/SidebarDAppCompany";
import Header from "../components/Header";
import styles from "./index.module.css";

const DirectoryCompanyProfile: NextPage = () => {
  return (
    <div className={styles.directorycompanyProfile}>
      <div className={styles.divCompanyProfile}>
        <ContactFormContainer />
        <ProjectMessagesContainer />
      </div>
      <SidebarDAppCompany
        discover="/discover.svg"
        documentText="/documenttext.svg"
        profile="/profile.svg"
        setting2="/setting21.svg"
        vuesaxlinearmessageQuesti="/vuesaxlinearmessagequestion.svg"
        logout="/logout.svg"
        sidebarDAppCompanyPosition="absolute"
        sidebarDAppCompanyBottom="0px"
        sidebarDAppCompanyLeft="0px"
        iconSidebarBackgroundColor="#3244d7"
      />
      <Header />
    </div>
  );
};

export default DirectoryCompanyProfile;
