import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => {

    const todo = [{
        id: 1,
        description: 'Pruebas todoItem',
        done: false
    }];

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe mostrar el todo pendiente', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        screen.debug();

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

    });

    test('debe mostrar el todo completado', () => {

        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        screen.debug();

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('debe llamar el ToggleTodo cuando se hace click', () => {

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        screen.debug();

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement ); // Smilula el click sobre ese elemento
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id ); //Se asegura de que se llama la función con el id de argumento

    });

    test('button debde llamar el deldeteTodo', () => {

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        screen.debug();

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton ); 
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id ); 
        
    });

});