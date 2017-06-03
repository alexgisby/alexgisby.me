import React from 'react';
import HeaderSection from './Section/HeaderSection';
import FooterSection from './Section/FooterSection';

export default class Layout extends React.Component
{
    render() {
        return (
            <div className="application-container">
                <HeaderSection />
                <div className="main-container">
                    <h1>Hello From Layout!</h1>
                </div>
                <FooterSection/>
            </div>
        );
    }
}
