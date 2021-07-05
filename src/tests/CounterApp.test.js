
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  // lo asigno para no perder el intellinse
  let wrapper = shallow(<CounterApp />);;

  // Ciclo de vida de las pruebas
  beforeEach(() => {
    /** se ejecuta antes de de cada una de las evaluaciones */
    wrapper = shallow(<CounterApp />);
  });

  test('debe de mostrar <CounterApp /> correctamente', () => { 
    // definimos nuestro wrapper de forma global
    expect(wrapper).toMatchSnapshot();
    
  });

  test('debe de mostrar el valor por defecto de 100', () => {

    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('100');

  });


  test('debe incrementar con el botón +1', () => {
   
    // simulate
    wrapper.find('button').at(0).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11');

  });

  test('debe decrementar con el botón -1', () => {
   
    // simulate
    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');

  });
  
  test('debe de colocar el valor por defecto con el botón reset', () => {

    const wrapper = shallow(<CounterApp value={105} />);

    // necesito 2 referencias
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    
    expect(counterText).toBe('105');
    
  });
  
  
  
});
