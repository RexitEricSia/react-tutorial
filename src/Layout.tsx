import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex justify-center items-center bg-slate-100 p-12 w-screen h-screen'>
            <Outlet/>
        </div>
    )
}

export default Layout