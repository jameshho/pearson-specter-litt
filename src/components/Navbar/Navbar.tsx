import  { useState } from 'react'
import { Link } from 'react-router-dom'


import { HiOutlineMail } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarSide from './NavbarSide';


// import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (


        <div className='navbar'>
            <div onClick={()=>setToggle(prev=>!prev)} className="hamburgermenu"><GiHamburgerMenu /></div>
            <Link to='/pearson-specter-litt' className='links'><p>The Firm</p></Link>
            <Link to='/pearson-specter-litt/practicearea' className='links'>Practice Areas</Link>
            <Link to='/pearson-specter-litt/lawyers' className='links'>People</Link>
            <NavbarSide toggle={toggle} setToggle={setToggle} />
            <Link to='/pearson-specter-litt/contact' className='links'>Contact</Link>
            <div>

                <HiOutlineMail size={"2rem"} />
                <HiMagnifyingGlass size={"2rem"} />
            </div>


        </div>
    )
}

export default Navbar