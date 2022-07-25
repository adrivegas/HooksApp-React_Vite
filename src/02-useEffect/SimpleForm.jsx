import { useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Adriana',
        email: 'adrivegas@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        console.log({ name, value });
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

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
                onChange= { onInputChange }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="adrivegas@mail.com"
                name="email"
                value={email}
                onChange= { onInputChange }
            />

        </>

    )
}
