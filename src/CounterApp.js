// Proptypes
import propTypes from 'prop-types';
import { useState } from 'react';

function CounterApp({value=10}) {

  //hooks
  const [counter, setCounter] = useState(value);

  const  handleAdd = (e) => {
   // utilizamos el useState
    setCounter(counter + 1);

    //setCounter( (c) => c + 1); --> Otra opción que se puede utilizar en algun otro caso
    // return () => console.log('Hola mundo') // cuando utilizo () en la llamada;
  }
  const handleReset = () => setCounter(value);

  const handleSubstract = () => setCounter(counter - 1);


  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button
        className="btn btn-primary me-2"
        onClick={handleAdd} >
          +1
      </button>
      <button
        className="btn btn-success me-2"
        onClick={handleReset} >
          Reset
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={handleSubstract} >
          -1
      </button>
    </>
  );
}

CounterApp.prototypes = {
  value: propTypes.number.isRequired
}

export default CounterApp;

// Toda función en js que no tiene un return explito retorna undefined
// buena practica escribir codigo facil de leer
