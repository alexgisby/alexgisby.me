import React from 'react';
import {Link} from 'react-router';
import SocialLinks from '../Organism/SocialLinks';
import SocialLink from "../Molecule/SocialLink";
import AssetHelper from "../../lib/AssetHelper";

export default class HeaderSection extends React.Component
{
    render() {
        const assets = new AssetHelper();
        const size = this.props.size || 'large';

        if (size === 'small') {
            return (
                <header className="blue-grey darken-3 white-text size-small">
                    <div className="container">
                        <div className="row">
                            <div className="col s1 m1 vertical">
                                <Link to={'/'} className="white-text">
                                    <i className="fa fa-arrow-left jumbo" />
                                </Link>
                            </div>
                            <div className="col s11 m6">
                                <div className="title-avatar">
                                    <Link to={'/'} className="white-text">
                                        <img className="circle avatar" src={`${assets.assetPath()}/img/profile.jpg`} />
                                        <h1>Alex Gisby</h1>
                                        <p>Principal Web Developer and Tech Lead</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="col s12 m5 vertical">
                                <SocialLinks>
                                    <SocialLink key="github" link="https://github.com/alexgisby" icon="github"
                                                title="View my code on GitHub"/>
                                    <SocialLink key="linkedin" link="https://www.linkedin.com/in/alexgisby/" icon="linkedin"
                                                title="See my work experience on LinkedIn"/>
                                    <SocialLink key="medium" link="https://medium.com/@alexgisby" icon="medium"
                                                title="Read my writings on Medium"/>
                                    <SocialLink key="twitter" link="https://twitter.com/alexgisby" icon="twitter"
                                                title="Follow me on Twitter"/>
                                </SocialLinks>
                            </div>
                        </div>
                    </div>
                </header>
            );
        } else {
            return (
                <header className="blue-grey darken-3 white-text size-large">
                    <div className="title-avatar container">
                        <Link to={'/'} className="white-text">
                            <img className="circle avatar" src={`${assets.assetPath()}/img/profile.jpg`} />
                            <h1>Alex Gisby</h1>
                            <p>Principal Web Developer and Tech Lead</p>
                        </Link>
                    </div>
                    <SocialLinks>
                        <SocialLink key="github" link="https://github.com/alexgisby" icon="github"
                                    title="View my code on GitHub"/>
                        <SocialLink key="linkedin" link="https://www.linkedin.com/in/alexgisby/" icon="linkedin"
                                    title="See my work experience on LinkedIn"/>
                        <SocialLink key="medium" link="https://medium.com/@alexgisby" icon="medium"
                                    title="Read my writings on Medium"/>
                        <SocialLink key="twitter" link="https://twitter.com/alexgisby" icon="twitter"
                                    title="Follow me on Twitter"/>
                    </SocialLinks>
                </header>
            );
        }
    }
}
