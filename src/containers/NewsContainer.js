import React from 'react';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';

let NewsContainer = ({ news }) => (
    <>
        {news.map((article, index) => <NewsItem key={index} article={article}/>)}
    </>
);

export default connect(
    state => ({
        news: state.news,
    }),
    dispatch => ({})
)(NewsContainer);