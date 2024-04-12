import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import '../css/Header.css';
import Nav from './Nav';

//IMAGE
import menuLogo from '../image/menu.png';

export default function Header() {

    useEffect(() => {
        let toggleBtn = document.getElementById("toggle-btn");
        let menuItems = document.querySelectorAll(".menu a");
        let menuActive = false;
        toggleBtn.addEventListener("click", () => {
            if (!menuActive) {
                //the old when i have projects
                menuItems[0].style.transform = "translate(90px,-20px)";
                menuItems[1].style.transform = "translate(80px,20px)";
                menuItems[2].style.transform = "translate(70px,60px)";
                menuItems[3].style.transform = "translate(0,90px)";
                menuActive = true;
                toggleBtn.classList.add("active");
            } else {
                menuItems.forEach((menuItem) => {
                    menuItem.style.transform = "translate(0,0)";
                });
                menuActive = false;
                toggleBtn.classList.remove("active");
            }
        });

    }, []);
    return (
        <>
            {/* website nav:  */}
            <Nav />
            <div className="menu">

                {/* mobile nav: */}
                <div className='mobile-shouldnotshow'>
                    <div className=' d-flex flex-column'>
                        <span className='mx-4 home-tab'><Link to="/">Home</Link></span>
                        <span className='mx-4 home-tab'><Link to="/about">About</Link></span>
                        {/* <span className='mx-4 home-tab'><Link to="/projects">Projects</Link></span> */}
                        <span className='mx-4 home-tab'><Link to="/contact-me"> Contact</Link></span>
                        <span className='mx-4 home-tab'><Link to="/certificate">Certificate</Link></span>
                        <img id="toggle-btn" className='home-img-logo' src={menuLogo} alt="logo" />
                        {/* <div id="toggle-btn" className='home-img-logo'>
                            <div className='hamburger-menu'></div>
                            <div className='hamburger-menu'></div>
                            <div className='hamburger-menu'></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
