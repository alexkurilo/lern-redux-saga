import React from 'react';
import { connect } from 'react-redux';

const Button = ({getNews}) => {
    const clickHandler = () => getNews();

    return <button onClick={clickHandler}>Press to see news</button>;
};

export default connect(
    state => ({}),
    dispatch => ({
        getNews: () => {
            dispatch ({type: 'LOADING_NEWS'})
        },
    })
)(Button);