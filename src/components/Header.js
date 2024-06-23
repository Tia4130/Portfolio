import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import Nav from './Nav';
import lightLogo from '../image/menu2.png'; // Import light mode image
import darkLogo from '../image/menu.png'; // Import dark mode image
import { ThemeContext } from '../App'; // Import ThemeContext

export default function Header() {
    const { theme } = useContext(ThemeContext);

    const currentLogo = theme === "dark" ? darkLogo : lightLogo;
    useEffect(() => {
        let toggleBtn = document.getElementById("toggle-btn");
        let menuItems = document.querySelectorAll(".menu a");
        let menuActive = false;
        toggleBtn.addEventListener("click", () => {
            if (!menuActive) {
                menuItems[0].style.transform = "translate(70px,-30px)";
                menuItems[1].style.transform = "translate(77px,5px)";
                menuItems[2].style.transform = "translate(70px,37px)";
                menuItems[3].style.transform = "translate(57px,67px)";
                menuItems[4].style.transform = "translate(0,90px)";
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
            <Nav />
            <div className="menu">
                <div className='mobile-shouldnotshow'>
                    <div className='d-flex flex-column'>
                        <span className='mx-4 home-tab'><Link to="/">Home</Link></span>
                        <span className='mx-4 home-tab'><Link to="/about">About</Link></span>
                        <span className='mx-4 home-tab'><Link to="/contact-me"> Contact</Link></span>
                        <span className='mx-4 home-tab'><Link to="/certificate">Certificate</Link></span>
                        <span className='mx-4 home-tab'><Link to="/project">Project</Link></span>
                        <img id="toggle-btn" className='home-img-logo' src={currentLogo} alt="logo" />

                    </div>
                </div>
            </div>
        </>
    );
}
