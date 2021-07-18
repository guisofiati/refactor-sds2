import { useEffect } from "react";

type Props = {
    message: string,
    number: Number
}

function Hello ({ message, number }: Props) {

    useEffect(() => {
        console.log('componente iniciou! ')
    }, []);

    return (
        <h1> {message} {number}</h1>
    );
}

export default Hello;