import React from 'react';

export default class FooterSection extends React.Component
{
    render() {
        return (
            <footer className="page-footer blue-grey lighten-2 white-text">
                <div className="container">
                    <div className="row">
                        <div className="col l8 s12">
                            <h5><i className="fa fa-paper-plane-o" /> Say Hi!</h5>
                            <p className="grey-text text-lighten-4">
                                I'm looking for my next opportunity! I'm available from September 2017, get
                                in touch if you've got something awesome to share!
                            </p>
                            <p>
                                <strong>
                                    I <u>do not</u> reply to "I have a client..." emails. Contact me directly,
                                    name the company or gtfo!
                                </strong>
                            </p>
                        </div>
                        <div className="col l4 s12">
                            <ul className="right-align">
                                <li>
                                    <a href="mailto:alex@solution10.com" className="white-text">
                                        alex@solution10.com <i className="fa fa-envelope" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/alexgisby" className="white-text">
                                        @alexgisby <i className="fa fa-twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        &copy; 2017 Alex Gisby
                    </div>
                </div>
            </footer>
        );
    }
}
