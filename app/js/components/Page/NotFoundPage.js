import React from 'react';
import HeaderSection from '../Section/HeaderSection';

export default class NotFoundPage extends React.Component
{
    render() {
        return (
            <div id="page-missing">
                <HeaderSection />
                <div className="center-align white-text">
                    <h2>404 Not Found</h2>
                    <p>I suppose I should put something witty here...</p>
                </div>
            </div>
        );
    }
}
