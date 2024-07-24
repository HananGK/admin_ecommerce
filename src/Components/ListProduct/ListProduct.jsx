import { useEffect, useState } from "react"
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allProducts, setAllProducts] = useState([])

    const fetchInfo = async () => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/allproducts`)
        .then((res)=>res.json())
        .then((data)=>setAllProducts(data))
    }

    useEffect(()=>{
        fetchInfo()
    }, [])

    const remove_product = async (id) => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/removeproduct`, {
            method:'POST', 
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo()
    }

    return (
        <div className="box-border flex flex-col items-center w-[95%] md:w-[100%] h-[100%] md:h-[740px] py-[10px] px-[50px] md:px-[50px] my-[20px] mx-auto md:m-[30px] rounded-[6px] bg-white">
            <h1 className="text-[#171717] text-[20px] md:text-[30px] mt-[10px] font-semibold">All Products List</h1>
            <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%] py-[15px] md:py-[60px] px-0 text-[#454545] text-[12px] md:text-[15px] font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="overflow-y-auto w-[100%]">
                <hr />
                {allProducts.map((product, index)=>{
                    return <><div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] w-[100%] py-[15px] md:py-[60px] px-0 text-[#454545] text-[12px] md:text-[15px] gap-[10px] items-center font-medium" key={index}>
                        <img className="h-[60px] md:h-[80px]" src={product.image} alt={`${product.name} image`} />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={()=>{remove_product(product.id)}} className="cursor-pointer m-auto" src={cross_icon} alt="Delete Icon" />
                    </div>
                    <hr /></>
                })}
            </div>
        </div>
    )
}

export default ListProduct