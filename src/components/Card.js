import React from 'react'
import '../css/Projects.css';

function Card({ title, description }) {
    return (
        <div className='crd'>
            <div className='container123'>
                <div className='text-in-middle'>
                    <h2>{title}</h2>
                    <div>{description}</div>
                </div>

            </div>
        </div>
    )
}

export default Card