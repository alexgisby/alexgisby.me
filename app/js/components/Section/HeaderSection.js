import React from 'react';
import {Link} from 'react-router';
import SocialLinks from '../Organism/SocialLinks';
import SocialLink from "../Molecule/SocialLink";

export default class HeaderSection extends React.Component
{
    render() {
        return (
            <header className="blue-grey darken-3 white-text">
                <div className="title-avatar container">
                    <Link to={'/'} className="white-text">
                        <img className="circle avatar" src="/img/profile.jpg" />
                        <h1>Alex Gisby</h1>
                        <p>Principal Web Developer and Tech Lead</p>
                    </Link>
                </div>
                <SocialLinks>
                    <SocialLink key="github" link="https://github.com/alexgisby" icon="github" title="View my code on GitHub" />
                    <SocialLink key="linkedin" link="https://www.linkedin.com/in/alexgisby/" icon="linkedin" title="See my work experience on LinkedIn" />
                    <SocialLink key="medium" link="https://medium.com/@alexgisby" icon="medium" title="Read my writings on Medium" />
                    <SocialLink key="twitter" link="https://twitter.com/alexgisby" icon="twitter" title="Follow me on Twitter" />
                </SocialLinks>
            </header>
        );
    }
}
