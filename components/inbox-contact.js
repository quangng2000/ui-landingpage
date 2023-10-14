import styles from "./inbox-contact.module.css";

const InboxContact = () => {
  return (
    <div className={styles.enterYourEmailHereParent}>
      <div className={styles.enterYourEmail}>Enter your email here</div>
      <div className={styles.componentChild} />
      <div className={styles.componentItem} />
      <img
        className={styles.arrowRight11Icon}
        alt=""
        src="/arrowright1-1.svg"
      />
    </div>
  );
};

export default InboxContact;
