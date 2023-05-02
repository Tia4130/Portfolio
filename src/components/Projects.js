import React from 'react'
import '../css/Projects.css';

//COMPONENTS
import Footer from './Footer';
import Header from './Header';
import Card from './Card';

function Projects() {
    return (
        <>
            <Header />
            <div className='row justify-content-center paddingMobile'>
                <span className='animation-aboutme'>Projects</span>
                <div className='col-lg-3 col-md-3 col-sm-12 d-flex flex-column'>
                    <Card
                        title="netflix"
                        description="the project netflix is a netflix clone that can ounly shows the trailes of the movies and the series. The language that was used was javaScript and the framework was React.js with firebase for the backend. "
                    />
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 d-flex flex-column'>
                    <Card
                        title="Airbnb"
                        description="The Airbnb project is the same as netflix project but we are clonning airbnb, and using react.js as a framework, javascript language, and firebase for the backend."
                    />
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12  d-flex flex-column'>
                    <Card
                        title="Airbnb"
                        description="The Airbnb project is the same as netflix project but we are clonning airbnb, and using react.js as a framework, javascript language, and firebase for the backend."
                    />
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 d-flex flex-column'>
                    <Card
                        title="Airbnb"
                        description="The Airbnb project is the same as netflix project but we are clonning airbnb, and using react.js as a framework, javascript language, and firebase for the backend."
                    />
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Projects