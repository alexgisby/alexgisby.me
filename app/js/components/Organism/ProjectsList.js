import React from 'react';
import Project from './Project';

export default class ProjectsList extends React.Component
{
    render() {
        const projects = this.props.projects;

        return (
            <section className="project-list-container">
                <h3 className="blue-grey-text text-darken-3">Experience</h3>
                <ul className="project-list">
                    {projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })}
                </ul>
            </section>
        );
    }
}
