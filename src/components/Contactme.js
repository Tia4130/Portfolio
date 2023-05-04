import React, { useState, useRef } from 'react'
import '../css/Contactme.css';
import emailjs from '@emailjs/browser';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';
import { AnimationLetter } from './AnimationLetter';

export default function Contactme() {
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


    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1k9543j', 'template_ft1cx5a', form.current, 'FNJcx2ug2ABMmQfXu')
            .then((result) => {
                console.log("result", result)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset("");
    };

    return (
        <>
            <Header />
            <div className='contact-me-part py-4'>
                <div className='relative-bg'>

                </div>

                <div className='contact-inner-part d-flex flex-column'>

                    <span className='animation-aboutme'>Contact Me</span>
                    <span className='under-title my-4'>Lets keep in touch</span>
                    {/* component contact  */}
                    <div className='contact-me-card row'>
                        <div className='col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2 '>
                            <span className='get-in-touch mx-4 my-2'>Get in touch</span>

                            <div className='paddingAnimation d-flex justify-content-center'>
                                <div className='flex-container'>
                                    {/* <div className='unit'> */}
                                    {/* <div className='heart-piece-0'> */}

                                    {/* the beginning of the animation letter  */}


                                    <div onClick={handleEmailClick} className='letter-image'>
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
                                    {/* the end of the animation letter  */}
                                    {/* </div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-5 col-sm-12 my-auto '>
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
                                        className='input-groups' />
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
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
