import React from 'react'
import '../css/Projects.css';

function Card({ title, description }) {
    return (
        <div className='card'>
            <div className='face face1'>
                <div className='content'>
                    <span className='stars'></span>
                    <div className='Airbnb'>
                        <h2>{title}</h2>
                        <div>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card