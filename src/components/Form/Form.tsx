import styles from "./Form.module.scss";
import { useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTypes } from "../../types/FormTypes";
import { FormContext } from "../../contexts/FormContext";
import { SubmitFormContext } from '../../contexts/SubmitFormContext';
import validationIcon from "../../images/icon-complete.svg";
import useClearData from "../../hooks/clearData";
import Confetti from 'react-confetti';

const Form = () => {
  const { isSubmit, toggleSubmit } = useContext(SubmitFormContext);
  const [ formData, setFormData ] = useContext(FormContext);

  const clearData = useClearData();
  const handleClick = () => toggleSubmit && toggleSubmit();

  const { register, handleSubmit, formState: { errors } } = useForm<FormTypes>();
  const onSubmit: SubmitHandler<FormTypes> = (data:FormTypes, e) => {
    clearData(e)
    handleClick()
  };

  const changeHandler = (name: string, value: string) => {
    const newObj = {...formData};
    newObj[name] = value;
    
    setFormData(newObj);
  } 
  
  return (
    <>
      {isSubmit && <Confetti />}

      <form className={!isSubmit ? styles.form__content : styles.none} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input placeholder="e.g. Jane Appleseed" id="name"
          {...register("name", {
            required: true,
            onChange: (e) => changeHandler("name", e.target.value),
          })} />
        <p>{errors.name ? "Wrong format, letters only": ""}</p>

        <label htmlFor="number">CARD NUMBER</label>
        <input id="number" placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardNumber", {
            onChange: (e) => changeHandler("cardNumber", e.target.value),
            required: true, 
            minLength: 16,
            maxLength: 16
          }
          )}/>
        <p>{errors.cardNumber ? "The card number must have 16 characters": ""}</p>

        <div className={styles.footer}>
          <div className={styles.date__expire}>
            <label htmlFor="expiration-date">EXP. DATE (MM/YY)</label>

            <div className={styles.input_container}>
              <input id="expiration-date" placeholder="MM"
                {...register("month", {
                  required: true,
                  minLength: 2,
                  maxLength: 2,
                  onChange: (e) => changeHandler("month", e.target.value),
                }
                )}/>

              <input placeholder="YY"
                {...register("year", {
                  required: true,
                  minLength: 2,
                  maxLength: 2,
                  onChange: (e) => changeHandler("year", e.target.value),
                }
                )}/>
            </div>
          </div>

          <div>
            <label htmlFor="cvc" >CVC</label>
            <input type="number" id="cvc" placeholder="e.g. 123"
              {...register("cvc", {
                required: true,
                minLength: 3,
                maxLength: 3,
                onChange: (e) => changeHandler("cvc", e.target.value),
              }
              )}/>
          </div>
        </div>

        <button>Confirm</button>
      </form>

      <div className={isSubmit ? styles.form__submit : styles.none}>
        <div className={styles.validation__icon}>
          <img src={validationIcon}/>
        </div>
        
        <h1>Thank you!</h1>
        <p>We've added your card details</p>

        <button onClick={handleClick}>Continue</button>
      </div>
    </>
  );
};

export default Form;
