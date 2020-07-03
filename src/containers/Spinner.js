import React from 'react';
import img from '../Spinner-Preloader-Gif.gif';

const Spinner = () => (
    <div className="img_container">
        <img src={img} alt='loading' />
    </div>
);

export default Spinner;