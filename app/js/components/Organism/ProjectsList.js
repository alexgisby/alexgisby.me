import React from 'react';
import Project from './Project';

export default class ProjectsList extends React.Component
{
    render() {
        const projects = this.props.projects;

        return (
            <section className="project-list-container">
                <hr />
                <ul className="project-list">
                    {projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })}
                </ul>
            </section>
        );
    }
}
