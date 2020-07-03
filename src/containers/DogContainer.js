import React from 'react';
import { connect } from 'react-redux';

let DogContainer = ({ dog }) => (
    <div className="img_container">
        <img className="dog_img" src={dog} alt=""/>
    </div>
);

export default connect(
    state => ({
        dog: state.dog,
    }),
    dispatch => ({})
)(DogContainer);
