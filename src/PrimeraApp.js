// Es un componente UpperCamelCase 

// En  React tenemos dos tipos de componentes : los que estan basados en clases y los que estan basados en funciones


//  **** React está impulsando a componentes  basados en funciones *** 

// imr + tab : importa automaticamente 
import React, { Fragment } from 'react';

// Importar prop-types
import propTypes from 'prop-types';

const PrimeraApp = ({
                    saludo, 
                    subtitulo
                }) =>{

    const saludo2 = 'Hola Mundo const';
    
    const numeros = 123;
    
    const bool = true; // los que son booleanos no los va imprimir
    
    const array = [1,2,3,4,5,6,7,8,9,10];
    
    const persona = {
        nombre:'Peter',
        edad:33
    }
    
    // if (!saludo) {
    //     throw new Error('El saludo es necesario'); // consume memoria de forma incesaria
        
    // }

    //Otra alternativa a los fragment dejando vacío
    return (
        <>
            {/* <h1> { saludo }</h1> */}
            <h2> { saludo }</h2>
            {/* <h4> { numeros }</h4>
            <h4> { bool } </h4>
            <h4> { array } </h4> */}
            {/* <pre> {  JSON.stringify(persona, null, 3) }</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: propTypes.string.isRequired 
    
    // el saludo tiene que ser un string , con isRequired se hace obligatorio
}

// DefaultProps
PrimeraApp.defaultProps  ={
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;


// **** NOTAS ******

// Tener cuidado al hacer enter 
// se debe usar una etiqueta para envolver todo el codigo jsx , se envuelve entre parentesis
// en caso de mas elementos se utiliza un div o un <Fragment> el cual envuelve todo el codigo que desemos mostrar </Fragment>
// hay otra alternativa para los Fragment , dejando <> es un Frament mas optimo </>
// { } dentro de las llaves podemos enviar cualquier valor 