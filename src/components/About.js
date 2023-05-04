import React from 'react'
import '../css/About.css';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';
import AnimationLetter from './AnimationLetter';

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
                        <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                            <div onClick={handleEmailClick} className='letter-imageAbout marginAnimation'>
                                <div className='animated-mail'>
                                    <div className='back-fold'></div>
                                    <div className='letter'>
                                        <div className='letter-border'></div>
                                        <div className='letter-title'></div>
                                        <div className='letter-context'></div>

                                        <div className='letter-stamp'>
                                            <div className='letter-stamp-inner'></div>
                                        </div>
                                    </div>
                                    <div className='top-fold'></div>
                                    <div className='body'></div>
                                    <div className='left-fold'></div>
                                </div>
                                <div className='shadow'></div>
                            </div>
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
                                        I'm excited to share that I built my portfolio website using React.js, a powerful JavaScript library for building user interfaces, and added engaging animations using CSS.
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
