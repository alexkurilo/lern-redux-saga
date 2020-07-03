import React, {useEffect} from 'react';
import Button from './Button';
import Spinner from '../containers/Spinner';
import NewsContainer from '../containers/NewsContainer';
import DogContainer from '../containers/DogContainer';
import {connect} from "react-redux";
import ErrorContainer from "../containers/ErrorContainer";

const App = ({loading, error, news, getDog }) => {
    useEffect(() => {
        getDog();
    }, [
        getDog,
    ]);

    return (
        <div className="app_container">
            <Button />
            {loading
                ? <Spinner/>
                : error
                    ? <ErrorContainer/>
                    : news.length
                        ? <NewsContainer />
                        : <DogContainer/>
            }
        </div>
    );
};

export default connect(
    state => ({
        loading: state.loading,
        error: state.error,
        news: state.news,
    }),
    dispatch => ({
        getDog: () => {
            dispatch ({type: 'LOADING_DOG'})
        },
    })
)(App);