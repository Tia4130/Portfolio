import React, { useState } from 'react'
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
                    <span className='mx-4 nav-items'>Home</span>
                    <span className='mx-4 nav-items'>About me</span>
                    <span className='mx-4 nav-items'>Resume</span>
                    <span className='mx-4 nav-items'>Contact me</span>
                </div>
            </nav>
        </>
    )
}
