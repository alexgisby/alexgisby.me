import React from 'react';
import TagList from './TagList';
import ExternalLink from '../Molecule/ExternalLink';

export default class Project extends React.Component
{
    render() {
        const project = this.props.project;
        return (
            <div className="project">
                <h4>{project.title}</h4>
                <div className="row">
                    <div className="col m4">
                        <div className="center-align project-icon">
                            <i className={'jumbo fa fa-'+project.icon} />
                        </div>

                        { project.dates &&
                            <p className="project-dates center-align">{project.dates}</p>
                        }

                        {project.externalLinks.length &&
                            <ul className="external-links browser-default">
                                {project.externalLinks.map(link => {
                                    return (<li key={link.url}>
                                        <ExternalLink url={link.url} title={link.title} />
                                    </li>);
                                })}
                            </ul>
                        }
                    </div>
                    <div className="col m8">
                        <p>{project.description}</p>
                        <TagList tags={project.tags} />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
