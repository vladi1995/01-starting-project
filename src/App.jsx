import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [initialState, setInitialState] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 10,
  });

  const inputIsValid = initialState.duration >= 1;

  function handleChangeInvestment(inputIdentifier, newValue) {
    setInitialState(prevState => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput initialState = {initialState} handleChangeInvestment = {handleChangeInvestment} />
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Results initialState = {initialState} />}
    </>
  );
}

export default App;
