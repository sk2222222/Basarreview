import type { NextPage } from "next";
import Property1Default6 from "./Property1Default6";
import Property1Default5 from "./Property1Default5";
import TypePhotoSize32pxCircle from "./TypePhotoSize32pxCircle";
import styles from "./Header.module.css";

const Header: NextPage = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.seaclubLogos}>
        <div className={styles.logoMobile}>
          <img className={styles.icon} alt="" src="/1.svg" />
        </div>
        <div className={styles.logoDesktop}>
          <div className={styles.seaclubLogos}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-1520.svg"
                />
              </div>
              <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.cta}>
          <Property1Default6 message="/message.svg" />
          <Property1Default5 notification="/notification.svg" />
        </div>
        <div className={styles.avatar}>
          <div className={styles.avatarProfile} id="Avatar profile">
            <TypePhotoSize32pxCircle
              iconId="/image@2x.png"
              typePhotoSize32pxCirclePosition="relative"
            />
          </div>
        </div>
        <div className={styles.menuMobile}>
          <button
            className={styles.menuDefaultMobile}
            autoFocus={true}
            disabled={true}
          >
            <img
              className={styles.menuDefaultMobileChild}
              alt=""
              src="/group-15201.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
