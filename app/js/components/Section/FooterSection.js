import React from 'react';

export default class FooterSection extends React.Component
{
    render() {
        return (
            <footer className="page-footer blue-grey lighten-2">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">
                                You can use rows and columns here to organize your footer content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        &copy; 2017 Copyright Text
                    </div>
                </div>
            </footer>
        );
    }
}
