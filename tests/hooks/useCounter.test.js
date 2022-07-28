import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter Hook', () => { 

    test('Debe retornar los valores por defecto', () => { 

        const { result } = renderHook( () => useCounter() );
        // console.log(result);
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(10);
        expect( increment ).toEqual( expect.any( Function )); // Espero que decrement sea una función
        expect( decrement ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
        
     });

     test('Debe generar el counter con el valor de 100', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
        
     });

     test('Debe incrementar el counter en 3', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(103);
        
     });

     test('Debe decrementar el counter en 3', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(97);
        
     });

     test('Debe realizar el reset del contador', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(100);
        
     });


 })