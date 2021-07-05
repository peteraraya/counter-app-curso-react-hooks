import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  

  test('getHeroeByIdAsync debe de retornar un héroe async', (done) => {

    const id = 1;

    getHeroeByIdAsync(id)
      .then( heroe =>{
        /** las pruebas no esperan la respuestas para ello debemos agregar done */
        
        expect( heroe ).toBe( heroes[0] ); // id: 1 === Batman

        done(); // termina la promesa
      })
    
  });

  test('getHeroeByIdAsync debe obtenerse un error si el héroe por id no existe', (done) => {
    
    const id = 10;

    getHeroeByIdAsync(id)
      .catch( (err) =>{
        expect(err).toBe('No se pudo encontrar el héroe');
        done();
        });

  });


  


});
