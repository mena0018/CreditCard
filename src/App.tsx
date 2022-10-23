import CreditCard from "./components/CreditCards/CreditCard";
import Form from "./components/Form/Form";
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import  FormContextProvider  from "./contexts/formContext";


const App = () => {

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: -150 }, 
      { opacity: 1, y: 0, duration: 0.6, delay: 0.5 }
   );
  })

  return (
    <FormContextProvider>
      <div className="container">
        <div className="card__container">
          <div className="card__background">
            <CreditCard />
          </div>
        </div>

        <div className="form__container" ref={formRef}>
          <Form />
        </div>
      </div>
    </FormContextProvider>
  );
};

export default App;
