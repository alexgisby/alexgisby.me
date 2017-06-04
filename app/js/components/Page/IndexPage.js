import React from 'react';
import HeaderSection from '../Section/HeaderSection';
import TagGroup from '../Organism/TagGroup';
import Repository from '../../data/Repository';
import data from '../../../data/database';

export default class IndexPage extends React.Component
{
    render() {
        const repo = new Repository(data);
        const groups = repo.fetchTagsGroupedByType();

        return (
            <div id="page-index">
                <HeaderSection />
                <div className="skills-groups container white-text">
                    {groups.map(tagGroup => <TagGroup key={tagGroup.description} group={tagGroup}/>)}
                </div>
            </div>
        );
    }
}
