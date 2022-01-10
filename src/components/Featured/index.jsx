import React from 'react';
import "./style.scss";
import developer from '../../images/developer.jpg';
// import photographer from '../../images/photographer.jpg';
import photographer from '../../images/ros_spegel.jpg';

export default function Featured() {
    return (
        <section className="featured-section">
            <div className='featured-row-layout'>
                <h6>developer and film photographer</h6>
                <img src={developer} alt="developer"/>
            </div>
            <div className='featured-column-layout'>
                <h6>madeleine enberg</h6>
                <img src={photographer} alt="photographer"/>
            </div>
        </section>
    )
}