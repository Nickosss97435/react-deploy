import React from 'react';

const Bibliotheque = () => {

    return (
        <main>
            <div id='bibliotheque'>
                <div className='container pt-2 pb-5'>
                    <div className='section-header pt-5 pb-5 text-center'>
                        <h3 className='section-title'>
                        <span>Notre </span>Bibliotheque
                        </h3>
                        <h6 className='section-subtitle mx-auto ml-auto'>
                        notre bibliothèque de catalogues fournisseurs regroupe une collection de catalogues de différents fournisseurs. 
                        Elle vous offre la possibilité de parcourir et de rechercher des produits ou des fournitures proposés par ces fournisseurs. 
                        Elle facilite l'accès à des informations détaillées sur les produits et permet de prendre des décisions lors des processus d'achat au pret de MONDISTRI. 
                        Grâce à cette bibliothèque, les utilisateurs peuvent gagner du temps et optimiser leur recherche de fournisseurs en ayant accès à une 
                        large gamme de catalogues au même endroit.
                        </h6>
                    </div>
                    <iframe className='iframe-container mx-auto' style={{ width: '100%', height: '800px' }} src="https://fliphtml5.com/bookcase/xtkjl/red"  
                    seamless="seamless" 
                    scrolling="no" frameborder="0" 
                    allowtransparency="true" allowfullscreen="true" >
                    </iframe>
                </div>
            </div>
        </main>
    );
};

export default Bibliotheque;