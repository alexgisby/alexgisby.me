import React from 'react';

export default class ExternalLink extends React.Component
{
    render() {
        return (
            <a href={this.props.url} className="orange-text" target="_blank">
                {this.props.title}&nbsp;
                <i className="fa fa-external-link" />
            </a>
        );
    }
}
