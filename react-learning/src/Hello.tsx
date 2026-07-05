function Hello() {

    const arr = ["hello", "world", "hmmm"];

    return (
        <div>
            <h1>{arr[0] + " " + arr[1] + " " + arr[2]}</h1>
        </div>
    )
}

export default Hello;