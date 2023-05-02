import React from 'react'
import '../css/About.css';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';

export default function About() {
    return (
        <>
            <Header />
            <div className='about-me-section aboutme-inside'>
                <div className='d-flex flex-column'>
                    <span className='animation-aboutme'>About Me</span>

                    <div className="row justify-content-center about-box my-5">
                        {/* hon lezm zid about-box */}
                        {/* left side */}
                        <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                            shi sura
                        </div>

                        {/* rightside */}
                        <di0v className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
                            <span className='some-text-about-me'>
                                I am a recent computer science graduate, I bring extensive experience working with technologies such as JavaScript, React, and Django. I graduated in August 2022 and gained this experience both through my academic projects and through my work experience prior to graduation. I am excited to embark on a career in the tech industry and contribute my skills and expertise to innovative projects. I am confident in my ability to develop effective solutions using these technologies and am eager to continue building on this foundation as I pursue my career goals.
                            </span>
                            <span className='few-highlights'>
                                <span className='few-text'>
                                    Here are few highlights
                                </span>
                                <span className='few-list'>
                                    <ul>
                                        <li>JavaScript, css, and html</li>
                                        <li>React.js and Redux</li>
                                        <li>Django</li>
                                        {/* <li></li> */}
                                    </ul>
                                </span>
                            </span>
                        </di0v>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
