import styles from "./Form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTypes } from "../../types/FormTypes";
import { useContext } from 'react';
import { FormContext } from "../../contexts/formContext";


const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormTypes>();
  const onSubmit: SubmitHandler<FormTypes> = (data:FormTypes, e) => clearDatas(e);

  const { formData, setFormData } = useContext(FormContext);

  const changeHandler = (name: string, value: string) => {
    const newObj = {...formData};
    newObj[name] = value;

    setFormData(newObj);
  } 

  const clearDatas = (e: any) => {
    e.target[0].value = ''; 
    e.target[1].value = '';  
    e.target[2].value = '';  
    e.target[3].value = '';  

    setFormData({
      name: "JANE APPLESEED",
      cardNumber: "0000 0000 0000 0000",
      month: "00",
      year: "00",
      cvc: "000",
    });
  }
  
  return (
    <form className={styles.form__content} onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="name">CARDHOLDER NAME</label>
      <input placeholder="e.g. Jane Appleseed" id="name"
        {...register("name", {
           required: true,
           onChange: (e) => changeHandler("name", e.target.value),
        })} />
      <p>{errors.name ? "Can't be blank": ""}</p>

      <label htmlFor="number">CARD NUMBER</label>
      <input id="number" placeholder="e.g. 1234 5678 9123 0000" 
        {...register("cardNumber", {
          onChange: (e) => changeHandler("cardNumber", e.target.value),
          required: true, 
          minLength: 16,
          maxLength: 16
        }
        )}/>
      <p>{errors.cardNumber ? "the card number must have 16 characters": ""}</p>

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
  );
};

export default Form;
