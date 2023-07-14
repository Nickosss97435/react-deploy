import React from 'react';

import Section from '../../../HOC/Section';

import blogImage1 from '../../../assets/img/Catalogues/C_Legrend.png';
import blogImage2 from '../../../assets/img/Catalogues/-Page-001.jpg';
import blogImage3 from '../../../assets/img/Catalogues/C_COMUNELLO.png';
// import blogImage4 from '../../../assets/img/Catalogues/1.jpg';
import blogImage5 from '../../../assets/img/Catalogues/C_Basor.png';
import blogImage6 from '../../../assets/img/Catalogues/C_Dahua.png';
import blogImage7 from '../../../assets/img/Catalogues/C_Spit.png';
import blogImage8 from '../../../assets/img/Catalogues/C_VTAC.png';
import blogImage9 from '../../../assets/img/Catalogues/C_Ajax2.png';
import blogImage10 from '../../../assets/img/Catalogues/C_Schneider.png';
import blogImage11 from '../../../assets/img/Catalogues/V-TAC-Solar.jpg';

import Legrand from '../../../assets/img/fournisseurs/1200px-Logo_Legrand.svg.png';
import Uniformatic from '../../../assets/img/fournisseurs/Logo-Uniformatic-reseau-VDI-professionnel.png';
import Comunello from '../../../assets/img/fournisseurs/COMUNELLO_AUTOMATION_LOGO-300x90.png';
// import TotalTools from '../../../assets/img/fournisseurs/logo-total-variante4.png';
import Basor from '../../../assets/img/fournisseurs/images.png';
import Dahua from '../../../assets/img/fournisseurs/images (1).png';
import Spit from '../../../assets/img/fournisseurs/logo-spit_rvb.jpg';
import VTac from '../../../assets/img/fournisseurs/v-tac.png';
import Ajax from '../../../assets/img/fournisseurs/AJAJ-logo.jpg';
import Schneider from '../../../assets/img/fournisseurs/téléchargement.png';

const Bibliotheque = () => {
  return (
    <Section id='blog'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Nos </span>Catalogues
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>            
          </h6>
        </div>
        <div className='section-content'>
          <div className='row row-cols-auto '>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2 '>
              <div className='card rounded-4 '>
                <a href='https://assets.legrand.com/editorial/legrandfr/legrand-catalogue-france.pdf'>
                  <img src={blogImage1} className='card-img-top rounded-4' alt='Catalogue Legrand' />
                  </a>
                <div className='card-body d-flex'>
                  <img  style={{ width: '20%', height: 'auto' }} src={Legrand} alt='Legrand' />
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='http://media.uniformatic.fr/DL/CATALOGUES/CATALOGUE_UNIFORMATIC_VDI_2023_HD.pdf?__hstc=5012588.6c46f1fd0f037bc8cdb660f4e2a33855.1640183942293.1678109647976.1678272221422.137&__hssc=5012588.29.1678272221422&__hsfp=2602210153'>
                <img src={blogImage2} className='card-img-top rounded-4' alt='Catalogue Uniformatique' />
                </a>
                <div className='card-body d-flex'>
                  <img  style={{ width: '20%', height: 'auto' }} src={Uniformatic} alt='Uniformatic' />
                </div>
              </div>
            </div>
            <div className='col-lg-2  col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='https://www.comunello.com/media/products/automation/COMUNELLO-Automation-catalog-france.pdf'>
                <img src={blogImage3} className='card-img-top rounded-4' alt='Catalogue Comunello' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={Comunello} alt='Comunello' />
                </div>
              </div>
            </div>
            {/* <div className='col-lg-2 mb-4'>
              <div className='card rounded-4'>
              <a href='https://online.fliphtml5.com/jcvvc/cmmi/'>
                <img src={blogImage4} className='card-img-top rounded-4' alt='Catalogue Total-Tools' />
                </a>
                <div className='card-body'>
                <img  style={{ width: '20%', height: 'auto' }} src={TotalTools} alt='Total-Tools' />  
                </div>
              </div>
            </div> */}
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='../../../assets/doc/BASOR-catalogue.pdf'>
                <img src={blogImage5} className='card-img-top rounded-4' alt='Catalogue Basor' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={Basor} alt='Basor' />
                  
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='https://france.dahuatech.com/upload/202211/03/202211032345437391.pdf'>
                <img src={blogImage6} className='card-img-top rounded-4' alt='Catalogue Dahua' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={Dahua} alt='Dahua' />
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='https://fr.calameo.com/read/006570162c531af615c0c?page=1'>
                <img src={blogImage7} className='card-img-top rounded-4' alt='Catalogue Spit' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={Spit} alt='Spit' />
                
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='https://gheledpro.fr/catalogue/v-tac/'>
                <img src={blogImage8} className='card-img-top rounded-4' alt='Catalogue V-Tac' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={VTac} alt='V-TAC' />
                  
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='https://online.fliphtml5.com/jcvvc/kgaf/'>
                <img src={blogImage9} className='card-img-top rounded-4' alt='Catalogue Ajax' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={Ajax} alt='Ajax' />
                  
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='https://www.document.schneider-electric.fr/catalog/schneider-electric-avril-2023/'>
                <img src={blogImage10} className='card-img-top rounded-4' alt='Catalogue Schneider' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={Schneider} alt='Schneider' />
                  
                </div>
              </div>
              
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4 p-2'>
              <div className='card rounded-4'>
              <a href='http://documents.mondistri.re/V-TAC/Solar/'>
                <img src={blogImage11} className='card-img-top rounded-4' alt='Catalogue V-TAC Solaire' />
                </a>
                <div className='card-body d-flex'>
                <img  style={{ width: '20%', height: 'auto' }} src={VTac} alt='V-TAC Solaire' />
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </Section>
    
  );
};

export default Bibliotheque;
