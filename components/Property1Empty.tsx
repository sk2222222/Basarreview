import type { NextPage } from "next";
import MessageContainer from "./MessageContainer";
import styles from "./Property1Empty.module.css";

const Property1Empty: NextPage = () => {
  return (
    <div className={styles.property1empty}>
      <div className={styles.content}>
        <MessageContainer />
        <div className={styles.emptyMessage}>
          <div className={styles.emptyMessage1}>
            <img
              className={styles.messageSearchIcon}
              alt=""
              src="/messagesearch.svg"
            />
          </div>
          <div className={styles.message}>
            <div className={styles.noNewMessages}>No new messages yet</div>
            <div className={styles.yourMessagesWill}>
              Your messages will appear here once you begin chatting.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Empty;
