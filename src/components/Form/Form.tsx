import styles from "./Form.module.scss";
import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContext } from "../../contexts/FormContext";
import { FormProps, FormTypes } from '../../types/FormTypes';
import validationIcon from "../../images/icon-complete.svg";
import useClearData from "../../hooks/clearData";


const Form = ({ toggleForm }: FormProps) => {
  const [ formData, setFormData ] = useContext(FormContext);
  const [isSubmit, setIsSubmit] = useState(false);

  const clearData = useClearData();

  const handleClick = () => {
    toggleForm(false);
    setIsSubmit(false);
  } 

  const { register, handleSubmit, formState: { errors } } = useForm<FormTypes>();
  
  const onSubmit: SubmitHandler<FormTypes> = (data:FormTypes, e) => {
    toggleForm(true);
    setIsSubmit(true);
    clearData(e)
  };

  const changeHandler = (name: string, value: string) => {
    const newObj = {...formData};
    newObj[name] = value;
    
    setFormData(newObj);
  } 
  
  return (
    <>
      <form className={!isSubmit ? styles.form__content : styles.none} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input placeholder="e.g. Jane Appleseed" id="name"
          {...register("name", {
            required: "Name is required.",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Wrong format, letters only.."
            },
            onChange: (e) => changeHandler("name", e.target.value),
          })} />
        <p>{errors.name && errors.name.message}</p>

        <label htmlFor="number">CARD NUMBER</label>
        <input id="number" placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardNumber", {
            required: "Card number is required.", 
            minLength: {value: 16, message: "The card number must have 16 characters.."},
            maxLength: {value: 16, message: "The card number must have 16 characters.."},
            onChange: (e) => changeHandler("cardNumber", e.target.value),
          }
          )}/>
        <p>{errors.cardNumber && errors.cardNumber.message}</p>


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
