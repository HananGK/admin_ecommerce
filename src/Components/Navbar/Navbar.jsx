import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-[15px] px-[30px] md:px-[60px] shadow-md mb-[1px] bg-white">
            <img src={navlogo} alt="Navbar Logo" className='w-[150px] md:w-[200px]'/>
            <img src={navProfile} alt="Navbar Profile Icon" className='w-[60px] md:w-[75px]'/>

        </div>
    )
}

export default Navbar
