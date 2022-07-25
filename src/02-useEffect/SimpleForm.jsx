import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Adriana',
        email: 'adrivegas@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log({ name, value });
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // Si arreglo vació, quiere decir que el useEffect se dispara una sola vez
    // cuando el componente es montado la primera vez
    useEffect(() => {
        // console.log('useEffect called');
    }, [])

    // Efecto que está pendiente del formState
    useEffect(() => {
        // console.log('formState chaged');
    }, [formState])

    // Se dispara cuando cambia el email
    useEffect(() => {
        // console.log('email chaged');
    }, [email])


    return (
        <>
            <h1>Formulario Simple </h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="adrivegas@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {/* El componente deja de existir fisicamente:  */}
            {
                (username === 'adrivegas') &&  <Message/>
            }

        </>

    )
}
