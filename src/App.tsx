import CreditCard from "./components/CreditCards/CreditCard";
import Form from "./components/Form/Form";
import { useEffect, useRef} from "react";
import gsap from "gsap";


const App = () => {

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: -150 }, 
      { opacity: 1, y: 0, duration: 0.6, delay: 0.5 }
   );
  })

  return (
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
  );
};

export default App;
