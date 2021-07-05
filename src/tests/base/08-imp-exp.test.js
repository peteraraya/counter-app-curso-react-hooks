
import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.js - Funciones de Héroes', () => {
  
  test('getHeroeById debe retornar un héroe por id', () => {
    
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find( h => h.id === id);

    expect( heroe ).toEqual( heroeData ); 


  });

  test('getHeroeById debe retornar undefined si héroe no existe', () => {
    
    const id = 10;
    const heroe = getHeroeById(id);

    expect( heroe ).toBe( undefined ); 

  });

  test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC';
    const heroeByOwner = getHeroesByOwner(owner);

    const heroeData = heroeByOwner.filter(h => h.owner === owner);

    expect(heroeByOwner).toEqual(heroeData);
      
  });

  test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {

    const owner = 'Marvel';
    const heroeByOwner = getHeroesByOwner(owner);
    // solo hay dos heroes de Marvel
    expect(heroeByOwner.length).toBe(2);

  });

  test('getHeroesByOwner debe retornar un arreglo vacío si héroe no existe', () => {

    const heroeByOwner = getHeroesByOwner(10);
    expect(heroeByOwner.length).toBe(0);
    
  });
  
  
  

});
