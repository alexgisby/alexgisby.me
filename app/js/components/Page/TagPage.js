import React from 'react';
import Repository from '../../data/Repository';
import data from '../../../data/database';

export default class TagPage extends React.Component
{
    render() {
        const repo = new Repository(data);

        const tagKey = this.props.params.tag;
        const tag = repo.fetchTagByUrlKey(tagKey);

        console.log(tagKey);
        console.log(tag);

        return (
            <div className="tag-details container white-text">
                <h2>{tag.getName()}</h2>
                <p>{tag.getDescription()}</p>
            </div>
        );
    }
}
