import { useEffect, useState } from "react";

const State = () => {

    const constantNumber = 1234

    let normalNumber = 1111
    const [stateNumber, setStateNumber] = useState(2222)

    const handleUpdateNumber = () => {
        normalNumber = normalNumber + 1
        setStateNumber(prev => prev + 1)

        console.log(normalNumber)
        console.log(stateNumber)
    }
    
    useEffect(() => {
        alert("Welcome!")
    },[])

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="font-medium">Display Variable in React</h1>
                <div className="bg-white shadow-lg p-4 rounded-lg w-full text-center">
                    <h1>{constantNumber}</h1>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="font-medium">Normal Variable vs State Variable</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center gap-6 bg-white shadow-lg px-32 py-4 rounded-lg">
                        <h1>{normalNumber}</h1>
                        <h1 className="text-gray-300">|</h1>
                        <h1>{stateNumber}</h1>
                    </div>
                    <button
                        onClick={handleUpdateNumber}
                        className="bg-green-400 shadow-lg p-2 rounded font-medium text-white text-lg"
                    >
                        Update Number
                    </button>
                </div>
            </div>
        </div>
    )
}

export default State