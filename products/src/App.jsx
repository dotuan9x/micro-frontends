import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter} from 'react-router-dom';

function App({children}) {
    return (
        <HashRouter>
            <div>Hello</div>
        </HashRouter>
    );
}

App.propTypes = {
    children: PropTypes.Any
};

export default App;
