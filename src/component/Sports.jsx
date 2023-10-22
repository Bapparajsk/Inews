import React from 'react';
import PropTypes from 'prop-types';
import Articles from "./Articles";

const Sports = props => {
    return (
        <div>
            <h1 className={'text-blue-50 text-3xl text-center py-4'}>Inews Top Sports news</h1>
            <Articles setprogress={props.setprogress} newsName={props.newsName} q={props.q}/>
        </div>
    );
};

Sports.propTypes = {

};

export default Sports;