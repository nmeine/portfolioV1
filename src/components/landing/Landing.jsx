import React from 'react';
import NavBar from 'components/navBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from 'components/pages/Pages';
import './Landing.scss';

function Landing({ location }) {
    return (
        <div className='wrapper'>
            <Router>
                <NavBar />
                <div className='page-container'>
                    <Pages />
                </div>
            </Router>
        </div>
    );
}

export default Landing;