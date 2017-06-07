import React from 'react';
import {Link} from 'react-router';

export default class Tag extends React.Component
{
    render() {
        const tag = this.props.tag;

        const colourClassMap = {
            'experience': 'white',
            'languages': 'blue white-text',
            'frameworks': 'green white-text',
            'devops': 'yellow',
            'practices': 'purple white-text'
        };

        const colourClass = colourClassMap[tag.getType()] || 'blue';

        return (
            <li>
                <Link to={tag.getUrl()} className={'chip '+colourClass}>
                    {tag.getName()}
                </Link>
            </li>
        );
    }
}
