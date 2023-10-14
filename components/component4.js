import styles from "./component4.module.css";

const Component4 = () => {
  return (
    <div className={styles.component4}>
      <div className={styles.home}>
        <div className={styles.home1}>
          <span className={styles.home2}>Home</span>
          <span>{`         `}</span>
        </div>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.home1}>{` About Us        `}</div>
      </div>
      <div className={styles.services}>
        <div className={styles.home1}>{` Services        `}</div>
      </div>
      <div className={styles.contactUs}>
        <div className={styles.home1}>Contact Us</div>
      </div>
      <div className={styles.riftCo1}>
        <img className={styles.riftCo11} alt="" src="/rift-co-2@2x.png" />
      </div>
      <img className={styles.component1Icon} alt="" src="/component-1.svg" />
      <img className={styles.component1Icon} alt="" src="/component-2.svg" />
      <img className={styles.component1Icon} alt="" src="/component-3.svg" />
    </div>
  );
};

export default Component4;
