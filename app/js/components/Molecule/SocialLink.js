import React from 'react';

export default class SocialLink extends React.Component
{
    render() {
        return (
            <a href={this.props.link} className="white-text" title={this.props.title}>
                <i className={'jumbo fa fa-'+this.props.icon} />
            </a>
        );
    }
}
