import React from 'react'
import '../css/Home.css';

//components
import Footer from './Footer';
import Header from './Header';
import HeaderWebsite from './HeaderWebsite';

//image
import mepor2 from '../image/mepor2.jpeg';

export default function Home() {

    const onButtonClick = () => {
        // javascript method
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
            { }
            {

            }
            {/* <HeaderWebsite /> */}
            {/* for the website  */}
            <Header />
            <div className='Home-container'>
                {/* left side icon */}

                <div className='row justify-content-center'>
                    <div className='col-lg- col-md-8 col-sm-12 d-flex flex-column my-8 text-center text-name'>
                        <p className='iam-text'>I am</p>

                        <p className='name-text'>Tia Akiki</p>
                        <p className='major-text'>Computer Science</p>
                        <button className="glow-on-hover rounded mx-auto d-block" type="button"
                            onClick={onButtonClick}
                        >Get Resume</button>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 d-flex flex-column my-img text-center'>

                        {/* <img className='custom-img' src={mepor2} alt="tia's photo" /> */}


                    </div>
                </div>




                {/* right side for nothing */}
                {/* <div className='col-lg-6 col-md-6 col-sm-12'>
              
            </div> */}
            </div>
            <Footer />
        </div>
    )
}
