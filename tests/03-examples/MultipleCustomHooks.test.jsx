import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js');

describe('Pruebas MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    }); 

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data:null,
            isLoading: true,
            hasError: null
        });    

        render( <MultipleCustomHooks />);
        screen.debug();

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Breaking Bad Quotes'));

        const nexButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nexButton.disabled).toBeTruthy();

    });

    test('Debe mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Adrivegas', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });    

        render( <MultipleCustomHooks />);
        screen.debug();

        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Adrivegas')).toBeTruthy();

        const nexButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nexButton.disabled).toBeFalsy();

    });

    test('Debe llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Adrivegas', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });    
        
        render( <MultipleCustomHooks />);

        const nexButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nexButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });

});