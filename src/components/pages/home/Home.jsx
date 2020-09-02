import React from 'react';
import BitMoji from 'components/icons/BitMoji';
import Button from 'components/styles/Button';
import LargeButton from 'components/styles/LargeButton';
import Pyramid from 'components/icons/Pyramid';
import './Home.scss';

function Home() {
    return (
        <div className='home-page'>
            <div className='resume-icon'>
                <a href="/resume.pdf"
                    target="_blank"
                    rel="nofollow noopener noreferrer">
                    <Button className='resume-button'>Resume</Button>
                </a>
                <BitMoji />
            </div>
            <div className='content-wrapper'>
                <div className='title-section'>
                    <h3>Hi, my name is</h3>
                    <h1>Noah Meine,</h1>
                    <h2>I make things that make a difference</h2>
                </div>
                <div className='intro-section'>
                    <p>
                        I'm a computer engineer based in the Washington DC area,
                        who designs and builds awesome applications, software systems,
                        and occasionally things for the web. I love overcoming challenges,
                        and I want to help make a difference.
                    </p>
                </div>
                <div className='contact'>
                    <a href='mailto:noahmeine@gmail.com'>
                        <LargeButton className='contact-button'>Contact Me</LargeButton>
                    </a>
                </div>
            </div>
            <Pyramid />
        </div>
    );
}

export default Home;