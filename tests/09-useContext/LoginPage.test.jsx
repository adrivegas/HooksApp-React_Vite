import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en LoginPage component', () => {

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');
        screen.debug()
    });

    test('debe de llamar el setUser cuando se hace click al boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const btn = screen.getByRole('button'); 
        fireEvent.click( btn );
        expect(setUserMock).toHaveBeenCalledWith({ id:123, name: 'Violeta', email: 'viole.com'});
        // screen.debug()
    });

});