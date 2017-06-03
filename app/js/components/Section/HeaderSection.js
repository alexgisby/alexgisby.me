import React from 'react';
import SocialLinks from '../Organism/SocialLinks';
import SocialLink from "../Molecule/SocialLink";

export default class HeaderSection extends React.Component
{
    render() {
        return (
            <header className="blue-grey darken-3 white-text">
                <div className="container">
                    <h1>Alex Gisby</h1>
                    <p>Principal Web Developer and Tech Lead</p>
                </div>
                <SocialLinks>
                    <SocialLink key="github" link="https://github.com/alexgisby" icon="github" title="View my code on GitHub" />
                    <SocialLink key="linkedin" link="https://linkedin.com/alexgisby" icon="linkedin" title="See my work experience on LinkedIn" />
                    <SocialLink key="medium" link="https://medium.com/@alexgisby" icon="medium" title="Read my writings on Medium" />
                    <SocialLink key="twitter" link="https://twitter.com/alexgisby" icon="twitter" title="Follow me on Twitter" />
                </SocialLinks>
            </header>
        );
    }
}
