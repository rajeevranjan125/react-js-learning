import { useEffect, useState } from "react";

const Count = () => {

    console.log("App is running");

    const [count, setCount] = useState(0);
    console.log("outside useeffect")

    useEffect(()=>{
        console.log("inside useeffect")
    })

    return (

        <>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>

        </>

    )
}

export default Count;