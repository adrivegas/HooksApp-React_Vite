import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    // si es true(!!data) va a ejecutar la siguiente línea data[0]
    // y regresará el valor que es la data en la posición 0:
    const { author, quote } = !!data && data[0];
    // !!undefine = false
    // console.log({ data, isLoading, hasError });

  return (
    <> 
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            isLoading
            ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>

            )
            : (
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{ quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                </blockquote>
            )
        }

        <button className="btn btn-primary">
            Next quote
        </button>

    </>
  )
}
