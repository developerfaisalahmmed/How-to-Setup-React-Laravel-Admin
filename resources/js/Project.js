import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from "./PageRouter/PageRouter";

function Project() {
    return (
        <PageRouter/>
    );
}

export default Project;

if (document.getElementById('app')) {
    ReactDOM.render(<Project/>, document.getElementById('app'));
}
