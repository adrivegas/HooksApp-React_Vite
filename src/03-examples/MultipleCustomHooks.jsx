import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
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
            ? <LoadingQuote />
            : <Quote author={author} quote= {quote} />
        }

        <button 
            className="btn btn-primary" 
            disabled={ isLoading }
            onClick={ () => increment() }>
            Next quote
        </button>

    </>
  )
}
