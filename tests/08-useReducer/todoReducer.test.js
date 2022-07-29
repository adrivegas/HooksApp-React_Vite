import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Pruebas todoReducer',
        done: false
    }];

    test('debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);


    });

    test('debe agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Info del payload',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect(newState.length).toBe( 2 );
        expect(newState).toContain( action.payload);

    });

    test('debe eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect(newState.length).toBe( 0 );

    });

    test('debe realizar el Toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect(newState[0].done).toBe( true );

    });

});

 // 1: crear initialState
 // 2: para evaluar objetos usamos toBe, evalua que sea identico, del mismo tipo, que apunte al mismo lugar en memoria