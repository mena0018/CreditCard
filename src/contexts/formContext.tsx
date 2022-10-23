import { createContext, useState } from "react";
import { FormTypes } from "../types/FormTypes";

type Props = {
    children: React.ReactNode
}

export const FormContext = createContext<any>(null);

const FormContextProvider = ({ children }: Props) => {
  const [formData, setFormData] = useState<FormTypes>({
    name: "JANE APPLESEED",
    cardNumber: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });


  return (
    <FormContext.Provider value={{ formData, setFormData }}> 
        {children}
    </FormContext.Provider> 
  );
}

export default FormContextProvider;
