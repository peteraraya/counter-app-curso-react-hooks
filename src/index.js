import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';


ReactDOM.render(
  <CounterApp value={10} />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <PrimeraApp saludo="Hola, soy Goku" />,
//   document.getElementById('root')
// );

// React dom nos permite crear un arbol de componente y nos permite comunicarnos entre componentes de una manera sencilla
// envío saludo='Hola soy Goku' como props