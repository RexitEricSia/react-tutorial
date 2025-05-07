import { Link, Outlet, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("processed business logic")
        navigate("/profile")
    }

    return (
        <div>
            <div className="top-0 left-0 fixed flex justify-end gap-24 pt-4 pr-6 w-screen font-medium text-gray-500">
                <a href="/home">Home</a>
                <Link to={"/info"}>Info</Link>
                <button onClick={handleNavigate}>Profile</button>
                <Link to={"/integration"}>Integration</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default NavBar