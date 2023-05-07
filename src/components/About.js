import React from 'react'
import '../css/About.css';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';

//IMAGE
import letter from '../image/letter.png';

export default function About() {
    const handleEmailClick = () => {
        const email = "tiaakiki12@gmail.com";
        const subject = "Subject of the email";
        const body = "Body of the email";
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    }
    return (
        <>
            <Header />
            <div className='about-me-section aboutme-inside'>
                <div className='d-flex flex-column'>
                    <span className='animation-aboutme'>About Me</span>

                    <div className="row justify-content-center about-box my-5">
                        {/* hon lezm zid about-box */}
                        {/* left side */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='left-side-about'>
                                <div className='text-above'>If you would like to get in touch, don't hesitate to email me, by clicking the letter below to send me an email.</div>
                                <div onClick={handleEmailClick} className='letter-container'>
                                    <img className='imgContainer' src={letter} />
                                </div>
                            </div>
                        </div>

                        {/* rightside */}
                        <di0v className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
                            <span className='some-text-about-me'>
                                I am a recent <span className='animation-aboutme-text'>computer science</span>, I bring extensive <span className='animation-aboutme-text'>experience</span>, working with technologies such as JavaScript, React, and Django. I graduated in <span className='animation-aboutme-text'>August 2022 </span> and gained this experience through my work experience prior to graduation. I am <span className='animation-aboutme-text'>confident</span> in my ability to develop effective solutions using these technologies and am eager to continue building and developing  as I pursue my career <span className='animation-aboutme-text'>goals.</span>                            </span>
                            <span className='few-highlights'>
                                <span className='few-text'>
                                    Here are few highlights
                                </span>
                                <span className='few-list'>
                                    <ul>
                                        I'm excited to share that I built <span className='animation-aboutme-text'>my portfolio</span> website using React.js, a powerful JavaScript library for building user interfaces, and added engaging animations using CSS.
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
