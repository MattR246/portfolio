import React from 'react';
import './projects.styles.scss';

const Projects = props => {
    const { portfolio } = props.data;
    return (
        <React.Fragment>
          <div className="portfolio">
            <div className="twelve columns collapsed">
              <h2>PORTFOLIO</h2>
              <div>
              {
                portfolio.map(({ id, project, description, link}) => {
                  return(
                    <div className="projects" key={id}>
                      <h5>{project}</h5>
                      <p>{description}
                        <br/>
                        <a href={link} target="_blank" rel="noopener noreferrer">Click here to check it out.</a>
                      </p>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
        </React.Fragment>
      );
}

export default Projects;