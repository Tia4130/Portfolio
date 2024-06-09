import React, { useState, useRef, useEffect } from 'react'
import '../css/Contactme.css';
import emailjs from '@emailjs/browser';

//IMAGES
import letter from '../image/letter.png';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';

export default function Contactme() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const form = useRef();

    const handleEmailClick = () => {
        const email = "tiaakiki12@gmail.com";
        const subject = "Subject of the email";
        const body = "Body of the email";
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    }

    const HandleRefreshPage = () => {
        window.location.reload();
    }

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1k9543j', 'template_ft1cx5a', form.current, 'FNJcx2ug2ABMmQfXu')
            .then((result) => {
                console.log("result", result)
                console.log(result.text);
                setIsSubmitted(true);

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset(" ");
    };

    return (
        <>
            <Header />
            <div className={`contact-me-part py-4' ${isMounted ? 'slide-in' : ''}`}>
                <div className='relative-bg'>

                </div>

                <div className='contact-inner-part d-flex flex-column'>

                    <span className='animation-aboutme'>Contact Me</span>
                    <span className='under-title my-4'></span>
                    {/* component contact  */}
                    <div className='contact-me-card row'>
                        <div className='col-lg-6 col-md-5 col-sm-12'>
                            {/* <span className='get-in-touch mx-4 my-2'>Get in touch</span> */}

                            <div className='left-side-contact'>
                                <div className='text-above'>If you would like to get in touch, don't hesitate to email me, by clicking the letter below to send me an email, OR fill out the form on the right-hand side of the page.</div>
                                <div onClick={handleEmailClick} className='letter-container'>
                                    <img className='imgContainer' src={letter} />
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-5 col-sm-12 my-auto '>
                            {isSubmitted ? (
                                <div className='card-contact-right-send '>
                                    <br />
                                    <div className='input-groups-after'>Thank You</div>
                                    <br />
                                    <div className='input-groups-after'>for contacting me!!</div>
                                    <br />
                                    <div className='input-groups-after'>Your message has been sent successfully</div>
                                    <br />
                                    <button className='glow-onhover-contactme-button' type='refresh' value='refresh' onClick={HandleRefreshPage}>
                                        Send another email
                                    </button>
                                </div>
                            )
                                :
                                (
                                    <form ref={form} onSubmit={sendEmail} className='d-flex flex-column card-contact-right'>


                                        <div className='input-group1 d-flex flex-column'>
                                            <input
                                                required
                                                name="from_name"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                                type="text"
                                                placeholder='Enter Your Name'
                                                className='input-groups' />
                                        </div>

                                        <div className='input-group1 d-flex flex-column'>

                                            {/* <label>Email</label> */}
                                            <input
                                                required
                                                name="user_email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                                type="text"
                                                placeholder='Enter Your Email'
                                                className={`input-groups ${isValidEmail ? '' : 'invalid'}`}
                                                pattern="[^\s@]+@[^\s@]+\.(com)+"
                                                title="Please enter a valid email address" />
                                            {!isValidEmail && <p className="error-message">Please enter a valid email address.</p>}
                                        </div>

                                        <div className='input-group1 d-flex flex-column'>

                                            {/* <label>Message</label> */}
                                            <textarea
                                                required
                                                name="message"
                                                value={message}
                                                onChange={(e) => {
                                                    setMessage(e.target.value);
                                                }}
                                                type="text" placeholder='Enter Your Message' className='input-groups' />
                                        </div>

                                        <div className='input-group1 my-3 d-flex flex-column'>

                                            {/* <input className='glow-on-hover' type='submit' value='Send Message' /> */}
                                            <button className='glow-onhover-contactme-button' type='submit' value='Send Message'>
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                )}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
