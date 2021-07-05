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

    return (
        <>
            <h2> { saludo }</h2>
            <p>{ subtitulo }</p>
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