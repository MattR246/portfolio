import React from 'react';
import './header.styles.scss';

const Header = props => {
    const { name, description } = props.data;
    return (
        <React.Fragment>
           <header className="header">
               <div className="banner">
                  <h1 className="name">{name.toUpperCase()}</h1>
                  <h3 className="description">{description}</h3>
               </div>
           </header>
        </React.Fragment>
      );
}

export default Header;