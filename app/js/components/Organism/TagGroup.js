import React from 'react';
import TagList from './TagList';

export default class TagGroup extends React.Component
{
    render() {
        return (
            <div className="skills-group row">
                <div className="col m3 s12">
                    <h2 className="blue-grey-text text-lighten-4">{this.props.group.getDescription()}</h2>
                </div>
                <div className="col m9 s12">
                    <TagList tags={this.props.group.tags}/>
                </div>
            </div>
        );
    }
}
