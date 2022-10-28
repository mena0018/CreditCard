import { createContext, useState } from "react";
import { FormTypes, defaultState } from "../types/FormTypes";

type Props = {
  children: React.ReactNode
}

export const FormContext = createContext<any>(defaultState);

const FormContextProvider = ({ children }: Props) => {
  const [formData, setFormData] = useState<FormTypes>(defaultState);

  return (
    <FormContext.Provider value={[ formData, setFormData ]}> 
        {children}
    </FormContext.Provider> 
  );
}

export default FormContextProvider;
