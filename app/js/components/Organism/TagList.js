import React from 'react';
import Tag from '../Molecule/Tag';

export default class TagList extends React.Component
{
    render() {
        const tags = this.props.tags;
        return (
            <ul className="skills-chips">
                {
                    tags.map((tag, index) => <Tag key={index} tag={tag} />)
                }
            </ul>
        );
    }
}
