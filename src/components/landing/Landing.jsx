import React, { useEffect, useState } from "react";
import Loader from 'components/loader/Loader';
import NavBar from 'components/navBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from 'components/pages/Pages';
import './Landing.scss';

function Landing({ location }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5700);
    }, []);
    return (
        <div className='wrapper'>
            <Router>
                <Loader />
                {!loading ?
                    <>
                        <NavBar />
                        <div className='page-container'>
                            <Pages />
                        </div>
                    </>
                    : null}
            </Router>
        </div>
    );
}

export default Landing;