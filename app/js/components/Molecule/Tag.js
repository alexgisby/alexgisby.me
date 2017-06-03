import React from 'react';

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
                <a href="#" className={'chip '+colourClass}>{this.props.tag.getName()}</a>
            </li>
        );
    }
}
