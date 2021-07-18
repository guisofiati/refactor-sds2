type Props = {
    message: string,
    number: Number
}

function Hello ({ message, number }: Props) {
    return (
        <h1> {message} {number}</h1>
    );
}

export default Hello;