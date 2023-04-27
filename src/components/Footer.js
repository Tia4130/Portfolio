import React from 'react'
import '../css/Footer.css';

export default function Footer() {
    return (
        <div className='container-footer'>

            {/* <section>
                <div className='waterContainer'>

                </div>
            </section> */}

            <div className="social-buttons">
                <a href="https://www.linkedin.com/in/tia-akiki-577a1a212/" target="blank" className="social-margin">
                    <div className="social-icon linkedin">
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </div>
                </a>
                <a href="#" target="blank" className="social-margin">
                    <div className="social-icon github">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </div>
    )
}
