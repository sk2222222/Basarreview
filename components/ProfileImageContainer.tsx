import type { NextPage } from "next";
import styles from "./ProfileImageContainer.module.css";

const ProfileImageContainer: NextPage = () => {
  return (
    <div className={styles.profileImage}>
      <div className={styles.image1Parent}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.groupChild}
          alt=""
          src="/rectangle-2329@2x.png"
        />
      </div>
    </div>
  );
};

export default ProfileImageContainer;
