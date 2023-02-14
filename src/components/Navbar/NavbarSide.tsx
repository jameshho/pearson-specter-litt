import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavbarSide = (props: Props) => {
    const navigate = useNavigate()
    return (
        <div className={props.toggle ? 'navbarside slide-in' : 'navbarside'}>
            <div className='blackbar' onClick={() => props.setToggle(false)}><p>X</p></div>
            <p onClick={() => {
                navigate('/')
                props.setToggle(false)
            }}>
                THE FIRM</p>
            <p onClick={() => {
                navigate('/practicearea')
                props.setToggle(false)
            }}>PRACTICE AREAS</p>
            <p
            onClick={() => {
                navigate('/lawyers')
                props.setToggle(false)
            }}>PEOPLE</p>
            <p
            onClick={() => {
                navigate('/contact')
                props.setToggle(false)
            }}>CONTACT</p>
     

        </div >
    )
}

export default NavbarSide