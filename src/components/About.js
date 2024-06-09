import React, { useEffect, useState } from 'react';
import '../css/About.css';

// COMPONENTS
import Header from './Header';
import Footer from './Footer';

// IMAGE
import letter from '../image/letter.png';

export default function About() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
            <div className={`about-me-section aboutme-inside ${isMounted ? 'slide-in' : ''}`}>
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
                        <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
                            <span className='some-text-about-me'>
                                I graduated with a degree in <span className='animation-aboutme-text'>computer science</span> in August 2022. Since then, I have gained extensive experience with JavaScript, React, Django, Node.js, SQL, and WordPress, continuously learning and applying my skills practically. <br /> <br />
                                I created an <span className='animation-aboutme-text'>E-Commerce website</span>, <a className='link-style-href' href="https://tibousshop.com/">TibousShop</a> for my online shop using WordPress, showcasing my ability to develop attractive web solutions. I also built <span className='animation-aboutme-text'>my portfolio</span> using React.js with engaging CSS animations. You can find all my projects in the <a className='link-style-href' href="/project">Projects section.</a><br /> <br />
                                I'm currently enhancing my skills through certifications and hands-on practice. Confident in developing effective solutions, I'm eager to advance in my career.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
