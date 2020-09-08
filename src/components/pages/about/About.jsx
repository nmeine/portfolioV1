import React from 'react';
import Box from 'components/pages/about/box/Box';
import './About.scss'

function About() {
    return (
        <div className='about-page'>
            <div className='about-content-wrapper'>
                <div className='title'>
                    <h1>About Me</h1>
                    <div className='line'></div>
                </div>
                <div className='info-body'>
                    <p>
                        Hi, I’m Noah, nice to meet you! I’m a computer engineer based in the
                        <span className='purple'> Washington, D.C. </span>area.
                        <br /><br />
                    I enjoy building applications from scratch. I believe in writing
                    <span className='purple'> clean, performance-oriented code </span>
                    to bring new ideas to life.
                    I use simple design patterns to build powerful things. I enjoy rapid development, and I like to tackle complex projects.
                    I’m ambitous, positive, and a problem solver.<br /><br />

                    I’m currently a junior at <span className='purple'> Virginia Tech </span>majoring in
                    <span className='purple'> Computer Engineering</span>. While there,
                    I spend my time working in undergraduate research, student design teams, and hanging out with my friends. <br /><br />

                    Here are a few tools that I’ve used recently: <br /><br />

                        <div className='list'>
                            <ul className='left'>
                                <li>Python</li>
                                <li>C++</li>
                                <li>Javascript (ES6+)</li>
                            </ul>
                            <ul className='right'>
                                <li>Docker</li>
                                <li>TensorFlow</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                    </p>
                </div>
            </div>
            <Box />
        </div >
    );
}

export default About;