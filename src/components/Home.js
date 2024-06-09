import React from 'react';
import '../css/Home.css';

// Components
import Footer from './Footer';
import Header from './Header';

// Images
import mePhoto from "../image/meTiaAkiki.png";

export default function Home() {

    const onButtonClick = () => {
        // JavaScript method
        fetch('CVTia.Akiki.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CVTia.Akiki.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className='containerPage'>
            <Header />
            <div className='Home-container'>
                <div className='row justify-content-center'>
                    {/* Left side icon */}
                    <div className='col-lg-5 col-md-5 col-sm-12 text-center'>
                        <img className='photo-me' src={mePhoto} alt="Me" />
                    </div>
                    {/* Right side text */}
                    <div className='col-lg-5 col-md-5 col-sm-12 text-center text-slide-in'>
                        <p className='iam-text'>I am</p>
                        <p className='name-text'>Tia Akiki</p>
                        <p className='major-text'>Computer Science</p>
                    </div>
                </div>
                {/* Button row */}
                <div className='row justify-content-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
                        <button className="glow-on-hover rounded" type="button"
                            onClick={onButtonClick}
                        >Get Resume</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
