import React from 'react';
import Rocket from 'components/icons/Rocket';
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
            <div className='draw-container'>
                <svg id='python' viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152 2C98.8182 2 83.8182 27.2273 83.8182 43.5909V70.1818H152V90.6364H43.5909C22.4545 90.6364 2 108.364 2 152C2 195.636 22.4545 213.364 43.5909 213.364H83.8182V179.273C83.8182 164.273 96.0909 152 111.091 152H192.909C207.909 152 220.182 139.727 220.182 124.727V43.5909C220.182 26.5455 205.182 2 152 2Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                    <path d="M152 302C205.182 302 220.182 276.773 220.182 260.409V233.818H152V213.364H260.409C281.545 213.364 302 195.636 302 152C302 108.364 281.545 90.6364 260.409 90.6364H220.182V124.727C220.182 139.727 207.909 152 192.909 152H111.091C96.0909 152 83.8182 164.273 83.8182 179.273V260.409C83.8182 276.773 98.8182 302 152 302Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                </svg>
                <svg id='c' viewBox="0 0 284 313" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233 156H275M270.947 71.125L153.053 4.88399C146.214 1.04099 137.786 1.04099 130.947 4.88399L13.053 71.125C6.214 74.968 2 82.073 2 89.759V222.248C2 229.934 6.214 237.039 13.053 240.882L130.947 307.123C137.786 310.966 146.214 310.966 153.053 307.123L270.947 240.882C277.786 237.032 282 229.927 282 222.241V89.759C282 82.073 277.786 74.968 270.947 71.125ZM205 135V177V135ZM184 156H226H184ZM254 135V177V135Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                    <path d="M142 72C168.46 72 192.925 84.285 208.794 105.187L178.134 122.939C168.908 112.859 155.811 107 142 107C114.98 107 93 128.98 93 156C93 183.02 114.98 205 142 205C155.811 205 168.908 199.141 178.134 189.061L208.794 206.813C192.925 227.715 168.46 240 142 240C95.681 240 58 202.319 58 156C58 109.681 95.681 72 142 72Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                </svg>

            </div>
        </div >
    );
}

export default About;