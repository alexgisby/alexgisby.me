import React from 'react';
import HeaderSection from '../Section/HeaderSection';
import Repository from '../../data/Repository';
import data from '../../../data/database';
import ProjectsList from '../Organism/ProjectsList';
import NotFoundPage from '../Page/NotFoundPage';

export default class TagPage extends React.Component
{
    render() {
        const repo = new Repository(data);

        const tagKey = this.props.params.tag;
        const tag = repo.fetchTagByUrlKey(tagKey);

        if (!tag) {
            return (
                <NotFoundPage />
            );
        }

        const projects = repo.fetchProjectsForTag(tag);

        return (
            <div id="page-tag">
                <HeaderSection size="small" />
                <div className="tag-details container white-text">
                    <h2>{tag.getName()}</h2>
                    <p>{tag.getDescription()}</p>
                    <ProjectsList projects={projects} />
                </div>
            </div>
        );
    }
}
