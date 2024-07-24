import {Link} from "react-router-dom"
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
    return (
        <div className="flex flex-row md:flex-col py-[30px] md:pt-[30px] gap-[20px] w-[100%] max-w-none md:max-w-[250px] h-auto md:h-[100vh] bg-white justify-center md:justify-start">
            <Link to={'/addproduct'} className="no-underline">
                <div className="flex items-center justify-center my-0 mx-0 md:mx-[20px] py-[15px] px-[10px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer">
                    <img src={add_product_icon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} className="no-underline">
                <div className="flex items-center justify-center my-0 mx-0 md:mx-[20px] py-[15px] px-[10px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer">
                    <img src={list_product_icon} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar