import styles from "./client-container.module.css";

const ClientContainer = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-11.svg" />
        <b className={styles.ourClients}>Our Clients</b>
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.frameWrapper}>
          <div className={styles.oracleLogo1Parent}>
            <img
              className={styles.oracleLogo1Icon}
              alt=""
              src="/oracle-logo-1@2x.png"
            />
            <img className={styles.usBank41Icon} alt="" src="/usbank4-1.svg" />
            <img
              className={styles.pxDeloitte1Icon}
              alt=""
              src="/1280pxdeloitte-1@2x.png"
            />
            <img
              className={styles.pxDeloitte1Icon}
              alt=""
              src="/1280pxdeloitte-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientContainer;
