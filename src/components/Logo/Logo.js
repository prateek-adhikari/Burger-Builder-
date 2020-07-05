import React from 'react';
import blogo from '../../assets/images/logo.png';
import './Logo.css';

const logo = (props)  => (
    <div className='Logo' style={{height: props.height}}>
        <img src={blogo} alt="logo" />
    </div>
);

export default logo;