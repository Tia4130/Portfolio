import React, { useState } from 'react';

//UTILS
import { motion } from 'framer-motion';

//IMAGES
import eye from "../../image/eye.png";
import download from "../../image/download.png";

//COMPONENTS
import ImageViewer from './ImageViewer';

function CardCertificate({ title, description, imgSrc }) { // Destructure props here

    const [isOpen, setIsOpen] = useState(false);
    const [showImageViewer, setShowImageViewer] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleEyeClick = () => {
        setSelectedImage(imgSrc);
        setShowImageViewer(true);
    };

    const closeImageViewer = () => {
        setShowImageViewer(false);
    };

    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = imgSrc;
        link.download = 'Tia-certificate.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <motion.div layout onClick={() => setIsOpen(!isOpen)} className="card">
                <motion.h2 className='text-title-certificate'>{title} </motion.h2>
                <motion.div className="text-desc-certificate">{description}</motion.div>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}>
                        {/* <div> <img className="certificate-image" src={imgSrc} /> </div> */}
                        <div className="text-animation-card">
                            <img src={eye} alt="view" onClick={handleEyeClick} />
                            <img src={download} alt="download" onClick={handleDownloadClick} />
                        </div>
                    </motion.div>
                }
                <div>.</div>
                <div>.</div>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
            </motion.div>
            {showImageViewer && (
                <ImageViewer imgSrc={selectedImage} onClose={closeImageViewer} />
            )}
        </div>
    )
}

export default CardCertificate;
