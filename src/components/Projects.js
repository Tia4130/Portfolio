import React from 'react'
import '../css/Projects.css';

//COMPONENTS
import Footer from './Footer';
import Header from './Header';
import Card from './Card';

function Projects() {
    return (

        <div className='d-flex flex-column'>
            <Header />
            <div className='card-container'>
                <Card
                    title="netflix"
                    description="the project netflix is a netflix clone that can ounly shows the trailes of the movies and the series. The language that was used was javaScript and the framework was React.js with firebase for the backend. "
                />

                <Card
                    title="Airbnb"
                    description="The Airbnb project is the same as netflix project but we are clonning airbnb, and using react.js as a framework, javascript language, and firebase for the backend."
                />
            </div>
            <Footer />
        </div>

    )
}

export default Projects