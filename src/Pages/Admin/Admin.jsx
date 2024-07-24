import { createBrowserRouter, Outlet } from "react-router-dom"
import AddProduct from "../../Components/AddProduct/AddProduct"
import ListProduct from "../../Components/ListProduct/ListProduct"
import Sidebar from "../../Components/Sidebar/Sidebar"

const Admin = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <Outlet />
            
            
        </div>
    )
}

export default Admin

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Admin />,
        children: [
            {
                path: "/addproduct",
                element: <AddProduct />,
            },
            {
                path: "/listproduct",
                element: <ListProduct />,
            },
        ],
    }
  ])