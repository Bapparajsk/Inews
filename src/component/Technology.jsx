import React from 'react';
import Articles from "./Articles";

const Technology = (props) => {
    return (
        <div>
            <h1 className={'text-blue-50 text-3xl text-center py-4'}>Inews Top Technology news</h1>
            <Articles setprogress={props.setprogress} newsName={props.newsName} q={props.q}/>
        </div>
    );
};

export default Technology;