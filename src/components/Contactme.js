import React, { useState, useRef } from 'react'
import '../css/Contactme.css';
import emailjs from '@emailjs/browser';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';

export default function Contactme() {
    const form = useRef();

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
                            {/* <span className='get-in-touch mx-4 my-4'>Get in touch</span> */}

                            <div className='py-5 d-flex justify-content-center'>
                                <div className='flex-container'>
                                    <div className='unit'>
                                        <div className='heart-piece-0'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-5 col-sm-12 my-auto '>
                            <form ref={form} onSubmit={sendEmail} className='d-flex flex-column card-contact-right'>


                                <div className='input-group1 d-flex flex-column'>

                                    {/* design of the animation input  */}
                                    {/* <div className='inputBox'>
                                        <input className="inputBoxInput" type="text" required />
                                        <span className='inputBoxSpan'>First Name</span>

                                    </div>
                                    <div className='inputBox'>
                                        <div className='inputBox'>
                                            <input className="inputBoxInput" type="text" required />
                                            <span className='inputBoxSpan'>Last Name</span>

                                        </div>
                                    </div> */}
                                    {/* the end of the design animation input  */}

                                    {/* <label>Name</label> */}
                                    <input
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
