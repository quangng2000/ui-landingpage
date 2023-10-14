import styles from "./developer-card.module.css";

const DeveloperCard = () => {
  return (
    <div className={styles.groupWrapper}>
      <div className={styles.mobileDeveloperParent}>
        <div className={styles.mobileDeveloper}>
          <div className={styles.mobileDeveloperChild} />
          <b className={styles.mobileWebDeveloper}>Mobile/ Web Developer</b>
          <div className={styles.viewWork}>View Work</div>
          <div className={styles.mobileDeveloperItem} />
          <img
            className={styles.dCasualLifeStatistics1Icon}
            alt=""
            src="/3dcasuallifestatistics-1@2x.png"
          />
        </div>
        <div className={styles.cyberSecurity}>
          <div className={styles.uxUiChild} />
          <b className={styles.cybersecurity}>CyberSecurity</b>
          <div className={styles.viewWork1}>View Work</div>
          <div className={styles.cyberSecurityChild} />
          <img
            className={styles.dCasualLifeHappyManAndWeIcon}
            alt=""
            src="/3dcasuallifehappymanandwebsitewindowinlaptop-1@2x.png"
          />
        </div>
        <div className={styles.offshore}>
          <div className={styles.offshoreChild} />
          <b
            className={styles.offshoreOutsourcing}
          >{`Offshore/ Outsourcing `}</b>
          <div className={styles.viewWork2}>View Work</div>
          <div className={styles.offshoreItem} />
          <img
            className={styles.casualLife3dYoungManInHeIcon}
            alt=""
            src="/casuallife3dyoungmaninheadsetusingcomputer-1@2x.png"
          />
        </div>
        <div className={styles.uxUi}>
          <div className={styles.uxUiChild} />
          <b className={styles.uxUi1}>{`UX/ UI & Graphic Solution`}</b>
          <div className={styles.viewWork3}>View Work</div>
          <div className={styles.uxUiItem} />
          <img
            className={styles.dCasualLifeGraphicDesignSIcon}
            alt=""
            src="/3dcasuallifegraphicdesignsoftwareonlaptop-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
