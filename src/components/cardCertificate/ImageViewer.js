import React from 'react';

//CSS
import "../../css/cardCertificate/cardCertificate.css";

//IMAGE
import closeButton from '../../image/close.png';

function ImageViewer({ imgSrc, onClose }) {
    return (
        <div className="image-viewer-overlay" onClick={onClose}>
            <div className="image-viewer-content">
                <button className="close-button" onClick={onClose}><img src={closeButton} alt="close" /></button>
                <img src={imgSrc} alt="Full Image" />
            </div>
        </div>
    );
}

export default ImageViewer;
