import React from 'react';
import Navigation from '../components/Navigation';

const home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Nicolas QUERAT</h1>
                    <h2>Développeur Front-end</h2>
                    <div className="pdf">
                        <a href="./media/CV - QUERAT Nicolas 12 - 2020.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default home;