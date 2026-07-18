interface Props {
    tellingHello: () => void
}

const Child = ({ tellingHello }: Props) => {

    return (
        <div>
            <button onClick={tellingHello}></button>
        </div>
    )
}

export default Child;
// export default Child;
// export default Child;
// export default Child;