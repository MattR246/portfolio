import React from 'react';
import './about.styles.scss';
import Profile from '../../assets/profile.png';

const About = props => {
    const { about } = props.data;
    return (
        <React.Fragment>
            <section className="about-section">
                <div className="details">
                    <img src={Profile} alt="Matt Ruehling"/>
                    <div className="about">
                        <h2>ABOUT ME</h2>
                        <p>{about}</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default About;