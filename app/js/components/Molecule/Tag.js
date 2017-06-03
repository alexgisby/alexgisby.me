import React from 'react';
import {Link} from 'react-router';

export default class Tag extends React.Component
{
    render() {
        const tag = this.props.tag;

        const colourClassMap = {
            'languages': 'blue white-text',
            'frameworks': 'green white-text',
            'devops': 'yellow',
            'practices': 'purple white-text'
        };

        const colourClass = colourClassMap[tag.getType()] || 'blue';

        return (
            <li>
                <Link to={this.props.tag.getUrl()} className={'chip '+colourClass}>
                    {this.props.tag.getName()}
                </Link>
            </li>
        );
    }
}
