import React from 'react';

function SocialLinkWrapper(props) {
    return (
        <div className={'center-align col s'+props.size}>
            {props.link}
        </div>
    );
}

export default class SocialLinks extends React.Component
{
    render() {
        const perLink = 12 / this.props.children.length;
        return (
            <div className="extlinks-container blue-grey darken-2">
                <div className="container">
                    <div className="row extlinks-row">
                        {
                            this.props.children.map(
                                (child, index) => <SocialLinkWrapper key={index} link={child} size={perLink}/>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
