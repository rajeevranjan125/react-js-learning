function Hello() {

    const arr = ["hello", "world", "hmmm"];
    const obj = {
        id:1,
        name:"rajeev"
    }

    return (
        <div>
            <h1>{arr[0] + " " + arr[1] + " " + arr[2]}</h1>
        
            <h2>{obj.id}</h2>
        
            <h2>{obj.name}</h2>
        </div>
    )
}

export default Hello;