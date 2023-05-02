import React, { useState } from 'react'
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom"
>>>>>>> a54de2f0befb7d948c0ef5ef14619a6cd9f24b73
import '../css/Nav.css';

export default function Nav() {
    const [openNav, setOpennav] = useState(false);

    return (
        <>
            <nav className={
                !openNav
                    ? 'd-flex flex-rows bg-new1 px-9 transition-all navbar-new py-4'
                    : 'd-flex flex-rows bg-new1 px-9 transition-all py-4 navbar-fixed-new'}>
                <span className='brand-name'></span>

                <div className='d-flex flex-rows'>
                    <Link to='/'><span className='mx-4 nav-items'>Home</span></Link>
                    <Link to='/about'><span className='mx-4 nav-items'>About me</span></Link>
                    <Link to='/contact-me'> <span className='mx-4 nav-items'>Contact Me</span></Link>
                    <Link to='/projects'> <span className='mx-4 nav-items'>Projects</span></Link>
                </div>
            </nav>
        </>
    )
}
