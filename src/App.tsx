import CreditCard from "./components/CreditCards/CreditCard";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="container">
      <div className="card__container">
        <div className="card__background">
          <CreditCard />
        </div>
      </div>

      <div className="form__container">
        <Form />
      </div>
    </div>
  );
};

export default App;
