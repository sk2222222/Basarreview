import type { NextPage } from "next";
import Property1Empty1 from "./Property1Empty1";
import Property1Empty from "./Property1Empty";
import styles from "./ProjectMessagesContainer.module.css";

const ProjectMessagesContainer: NextPage = () => {
  return (
    <div className={styles.projectmessages}>
      <Property1Empty1
        note2="/note2.svg"
        line287="/line-2871.svg"
        property1EmptyMinWidth="530px"
      />
      <Property1Empty />
    </div>
  );
};

export default ProjectMessagesContainer;
