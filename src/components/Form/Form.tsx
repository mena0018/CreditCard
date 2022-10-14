import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form className={styles.form__content}>
      <label htmlFor="name">CARDHOLDER NAME</label>
      <input type="text" id="name" placeholder="e.g. Jane Appleseed" />

      <label htmlFor="number">CARD NUMBER</label>
      <input type="number" id="number" placeholder="e.g. 1234 5678 9123 0000" />

      <div className={styles.footer}>
        <div className={styles.date__expire}>
          <label htmlFor="expiration-date">EXP. DATE (MM/YY)</label>

          <div className={styles.input_container}>
            <input type="text" id="expiration-date" placeholder="MM" />
            <input type="text" placeholder="YY" />
          </div>
        </div>

        <div>
          <label htmlFor="cvc">CVC</label>
          <input type="number" id="cvc" placeholder="e.g. 123" />
        </div>
      </div>

      <button role="button">Confirm</button>
    </form>
  );
};

export default Form;
