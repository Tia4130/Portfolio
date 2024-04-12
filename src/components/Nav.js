import React, { useState } from 'react'
import { Link } from "react-router-dom"
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
                    <Link to='/certificate'><span className='mx-4 nav-items'>Certificate</span></Link>
                    {/* <Link to='/projects'> <span className='mx-4 nav-items'>Projects</span></Link> */}
                </div>
            </nav>
        </>
    )
}
