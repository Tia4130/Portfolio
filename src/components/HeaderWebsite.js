import React from 'react'

//react
import { Link } from 'react-router-dom';

function HeaderWebsite() {
    return (
        <div className="menu">
            <div className=' d-flex flex-column'>
                <span className='mx-4 home-tab'><Link to="/">Home</Link></span>
                <span className='mx-4 home-tab'><Link to="/about">About</Link></span>
                <span className='mx-4 home-tab'><Link to="/projects">Projects</Link></span>
                <span className='mx-4 home-tab'><Link to="/contact-me"> Contact</Link></span>

                {/* <img id="toggle-btn" className='home-img-logo' src={logoUser} alt="logo" /> */}
            </div>
        </div>
    )
}

export default HeaderWebsite