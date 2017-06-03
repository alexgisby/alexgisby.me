import React from 'react';
import HeaderSection from './Section/HeaderSection';

export default class Layout extends React.Component
{
    render() {
        return (
            <div className="application-container">
                <HeaderSection />
                <div className="main-container">
                    <h1>Hello From Layout!</h1>
                </div>
            </div>
        )
    }
}
