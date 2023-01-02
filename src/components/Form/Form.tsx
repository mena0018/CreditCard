import styles from "./Form.module.scss";
import { FormEvent, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContext } from "../../contexts/FormContext";
import { FormProps, FormTypes } from "../../types/FormTypes";
import validationIcon from "../../images/icon-complete.svg";
import useClearData from "../../hooks/clearData";

const Form = ({ toggleForm }: FormProps) => {
  const [formData, setFormData] = useContext(FormContext);
  const [isSubmit, setIsSubmit] = useState(false);

  const clearData = useClearData();

  const handleClick = () => {
    toggleForm(false);
    setIsSubmit(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>();

  const onSubmit: SubmitHandler<FormTypes> = (data: FormTypes, e) => {
    toggleForm(true);
    setIsSubmit(true);
    clearData(e);
  };

  const changeHandler = (name: string, value: string) => {
    const newObj = { ...formData };
    newObj[name] = value;

    setFormData(newObj);
  };

  const handleLength = (e: FormEvent<HTMLInputElement>, maxLenght: number) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length > maxLenght) {
      target.value = target.value.slice(0, maxLenght);
    }
  };

  return (
    <>
      <form
        className={!isSubmit ? styles.form__content : styles.none}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          placeholder="e.g. Jane Appleseed"
          id="name"
          pattern="[a-zA-Z]+"
          title="Can only handle names with characters"
          onInput={(e) => handleLength(e, 20)}
          {...register("name", {
            required: true,
            onChange: (e) => changeHandler("name", e.target.value),
          })}
        />
        <p>{errors.name ? "The name must be filled in" : ""}</p>

        <label htmlFor="number">CARD NUMBER</label>
        <input
          id="number"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          onInput={(e) => handleLength(e, 16)}
          {...register("cardNumber", {
            onChange: (e) => changeHandler("cardNumber", e.target.value),
            required: true,
            minLength: 16,
            maxLength: 16,
          })}
        />
        <p>
          {errors.cardNumber ? "The card number must have 16 characters" : ""}
        </p>

        <div className={styles.footer}>
          <div className={styles.date__expire}>
            <label htmlFor="expiration-date">EXP. DATE (MM/YY)</label>

            <div className={styles.input_container}>
              <input
                id="expiration-date"
                type="number"
                placeholder="MM"
                onInput={(e) => handleLength(e, 2)}
                {...register("month", {
                  required: true,
                  minLength: 2,
                  maxLength: 2,
                  onChange: (e) => changeHandler("month", e.target.value),
                })}
              />

              <input
                placeholder="YY"
                type="number"
                onInput={(e) => handleLength(e, 2)}
                {...register("year", {
                  required: true,
                  minLength: 2,
                  maxLength: 2,
                  onChange: (e) => changeHandler("year", e.target.value),
                })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              id="cvc"
              placeholder="e.g. 123"
              onInput={(e) => handleLength(e, 3)}
              {...register("cvc", {
                required: true,
                minLength: 3,
                maxLength: 3,
                onChange: (e) => changeHandler("cvc", e.target.value),
              })}
            />
          </div>
        </div>

        <button>Confirm</button>
      </form>

      <div className={isSubmit ? styles.form__submit : styles.none}>
        <div className={styles.validation__icon}>
          <img src={validationIcon} />
        </div>

        <h1>Thank you!</h1>
        <p>We've added your card details</p>

        <button onClick={handleClick}>Continue</button>
      </div>
    </>
  );
};

export default Form;
