import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import { defaultState } from '../types/FormTypes';


export default function useClearData() {
  const [ formData, setFormData ] = useContext(FormContext);

  const clearData = (e: any) => {
    e.target[0].value = ''; 
    e.target[1].value = '';  
    e.target[2].value = '';  
    e.target[3].value = '';  
    e.target[4].value = '';  

    setFormData(defaultState);
  }

  return clearData; 
}
