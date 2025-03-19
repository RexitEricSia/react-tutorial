import Counter from "../component/Counter"
import { useSwitch } from "../context/useSwitch"

const Info = () => {

    const { isChecked, toggleSwitch } = useSwitch()

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white shadow-lg p-4 rounded-lg">
                <h1 className="font-medium text-2xl">This is a Info Page</h1>
            </div>

            <Counter />
            <div className="flex justify-end items-center gap-1">
                <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
                <h1 className="font-medium">Global Switch</h1>
            </div>
        </div>
    )
}

export default Info