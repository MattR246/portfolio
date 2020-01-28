import React from 'react';
import './footer.styles.scss';

const Footer = props => {
    const { social } = props.data;
    return (
        <footer>
            <div className="social-links">
                {social.map(({ url, id, platform, icon }) => {
                        return (
                            <a href={url} key={id}>
                                <div className={icon}></div>
                            </a>
                        )
                    })
                }
            </div>
        </footer>
    );
}

export default Footer;