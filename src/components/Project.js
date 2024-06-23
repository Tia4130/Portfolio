import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProjectCard from './ProjectCard';
import '../css/project.css';

//IMAGES
import tibouWebsiteImage from '../image/tibouwebsitephoto.png';

function Project() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Header />
            <div className={`certification-section ${isMounted ? 'slide-in' : ''}`}>
                <div className="d-flex flex-column">
                    <span className="animation-aboutme">My Projects</span>
                </div>
                <div className="project-cards-container">

                    <div className='card-project'>
                        <ProjectCard
                            imageUrl={tibouWebsiteImage}
                            title="Tibou Shop Website"
                            roles={["E-Commerce, ", "Wordpress"]}
                            description="Introducing Tibou Perfume and Tibou.lb, two online shops born from a shared passion for beauty and elegance. Tibou Perfume offers a curated collection of enchanting fragrances that evoke emotion and allure, while Tibou.lb caters to your accessory needs with a range of stylish and captivating items. Together, we strive to enhance your personal expression and elevate your senses."
                            websiteLink="https://tibousshop.com/"
                        // githubLink="https://github.com/devmemphis"

                        />
                    </div>
                    {/* <div className='card-project'>
                        <ProjectCard
                            imageUrl={imagetest}
                            title="Tuhe"
                            roles={["E-Commerce", "Wordpress"]}
                            backgroundColor="#bf0741d2"
                            description="Introducing Tibou Perfume and Tibou.lb, two online shops born from a shared passion for beauty and elegance. Tibou Perfume offers a curated collection of enchanting fragrances that evoke emotion and allure, while Tibou.lb caters to your accessory needs with a range of stylish and captivating items. Together, we strive to enhance your personal expression and elevate your senses."
                            websiteLink="https://devmemphis.org/"
                            githubLink="https://github.com/devmemphis"

                        />
                    </div> */}

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Project;
