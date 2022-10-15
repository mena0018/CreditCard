import styles from "./CreditCard.module.scss";

const CreditCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back_card_container}></div>

      <div className={styles.front_card_container}>
        <div className={styles.card_header}></div>

        <div className={styles.card_middle}>
          <p>0000</p>
          <p>0000</p>
          <p>0000</p>
          <p>0000</p>
        </div>

        <div className={styles.card_footer}>
          <p>JANE APPLESEED</p> <p>00/00</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
