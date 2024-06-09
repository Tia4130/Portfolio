import React, { useState, useEffect } from "react";

//UTILS
import { Col, Row } from 'reactstrap';

//IMAGES
import BachelorScience from "../image/BachelorScience.png";
import ReactBasic from "../image/react_basic certificate.png";
import UIUX from "../image/ui-ux.png";

//CSS
import "../css/certificate.css";

//COMPONENTS
import Header from "./Header";
import Footer from "./Footer";
import CardCertificate from "./cardCertificate/CardCertificate";

function Certificate() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    var arrayListCertficate = [
        { title: "Bachelor Of Science", imgSrc: BachelorScience, description: "In 2022, I obtained my Bachelor of Science certificate from AUL Jounieh. This achievement reflects my dedication to academic pursuits and my commitment to advancing my knowledge in the sciences. It marks a significant milestone in my educational journey, and I'm eager to apply the skills and knowledge gained to future endeavors\u2764" },
        { title: "React Basic certificate", imgSrc: ReactBasic, description: "In 2023, I earned a React Basic certificate from HackerRank. It validates my understanding of core React concepts like components, state management, props, and JSX syntax, marking a significant step in my journey towards mastering front-end web development\u2764" },
        {
            title: "Introduction To UI/UX", imgSrc: UIUX, description: "In 2023, I completed the Introduction to UI/ UX certification at RE: Coded.This achievement signifies my dedication to mastering the principles of user interface(UI) and user experience(UX) design.It reflects my commitment to delivering exceptional digital experiences tailored to user needs\u2764"
        },
    ];

    return (
        <>
            <Header />
            <div className={`certification-section ${isMounted ? 'slide-in' : ''}`}>

                <div className="d-flex flex-column">
                    <span className="animation-aboutme">My Certificate</span>
                    <div className="animation-certificate">{`\u2764`}For more details you can click on the card.{`\u2764`}Inside, you will find a view button and download option for further exploration{`\u2764`}</div>
                </div>
                <div className="container-card">
                    <Row className="certificate-container">
                        {arrayListCertficate.map((certificateList, index) => (
                            <Col key={index} xs="12" md="6" xl="3" lg="3" className="col-margin">
                                <CardCertificate
                                    title={certificateList.title}
                                    description={certificateList.description}
                                    imgSrc={certificateList.imgSrc}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Certificate;
