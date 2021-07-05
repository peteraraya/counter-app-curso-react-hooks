import React from 'react';
// import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas de componente <PrimeraApp />', () => {

  // test('<PrimeraApp /> debe mostrar el mensaje "Hola, Soy Goku"', () => {

  //   const saludo = "Hola, Soy Goku";
  //   // uso de wrapper
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  
  // });

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    // similar al render pero con otras opciones

    const saludo = "Hola, Soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    // esperamos que nuestro componente se renderize de manera correcta
    expect( wrapper ).toMatchSnapshot();

  });

  test('debe de enviar el subtitulo enviado por props', () => {
    
      const saludo = 'Hola, Soy Goku';
      const subtitulo = 'Soy un subtitulo'
      const wrapper = shallow(
          <PrimeraApp 
            saludo={saludo} 
            subtitulo={subtitulo}
          />
          );

      // revisar parrafo - como hay uno 
      const textoParrafo = wrapper.find('p').text();

      expect(textoParrafo).toBe(subtitulo);

  });
  
  
  
  
})
