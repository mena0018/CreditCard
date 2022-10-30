import { createContext, useState } from "react";
import { SubmitFormTypes } from "../types/FormTypes";

type Props = {
  children: React.ReactNode
}

const defaultState = {
  isSubmit: false,
}

export const SubmitFormContext = createContext<SubmitFormTypes>(defaultState);

const SubmitFormContextProvider = ({ children }: Props) => {

  const [isSubmit, setIsSubmit] = useState(defaultState.isSubmit);
  const toggleSubmit = () => setIsSubmit(!isSubmit);

  return (
    <SubmitFormContext.Provider value={{ isSubmit, toggleSubmit }}> 
        {children}
    </SubmitFormContext.Provider> 
  );
}

export default SubmitFormContextProvider;
