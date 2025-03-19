import { useState } from "react"
import { defaultUsers } from "../constant/Users"

const List = () => {
    const names = ["Alice", "Bob", "Charlie", "David", "Emma"]

    const [users, setUsers] = useState(defaultUsers)

    const handleDelete = (name: string) => {
        setUsers(prev => prev.map(user => user.name === name ? { ...user, isDeleted: true } : user))
    }

    return (
        <div className="flex flex-col gap-2 w-screen">
            <div className="flex flex-col gap-2">
                {names.map((name, index) =>
                    <h1 className="bg-white shadow-lg p-4 rounded-lg w-full" key={index}>{name}</h1>
                )}
            </div>
            <div className="flex flex-col gap-2">
                {users.map((user, index) =>
                    !user.isDeleted &&
                    <div key={index} className="bg-white shadow-lg p-4 rounded-lg w-full">
                        <div className="flex justify-between">
                            <div className="flex gap-6">
                                <h1 className="w-24 font-medium">{user.name}</h1>
                                <h1 className="text-gray-500">{user.age}</h1>
                            </div>
                            <button onClick={() => handleDelete(user.name)} className="bg-red-500 px-4 py-1 rounded text-white">Delete</button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default List