import { useEffect, useState } from "react"
import CounterMessage from "./CounterMessage";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleMinus = () => {
        setCount(count - 1)
    }

    const getColor = () => {
        if (count <= 10) return "text-green-500"
        if (count <= 30) return "text-yellow-500"
        return "text-red-500"
    }
    
    useEffect(() => {
        if(count % 2 > 0) console.log("it is odd")
    },[count])

    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center bg-white shadow-lg rounded-lg w-64 h-64">
                    <h1 className={`font-medium text-2xl ${getColor()}`}>{count}</h1>
                </div>

                <div className="flex gap-4">
                    <button onClick={handleAdd} className="bg-green-400 shadow-lg py-4 rounded-lg w-1/2 text-lg">+</button>
                    <button onClick={handleMinus} className="bg-red-400 shadow-lgs py-4 rounded-lg w-1/2 text-lg">-</button>
                </div>
            </div>
            {count > 3 && <CounterMessage currentNumber={count}/>}
        </div>
    )
}

export default Counter