import React from 'react';
import { CBadge } from '@coreui/react';
import Section from '../../HOC/Section';

const Footer = () => {
  return (
    <footer className='footer'>
      <Section id='footer'>
      <div className='container text-light pt-5'>
        <div className='row '>
          <div className='col-sm-3 col-md-3 col-lg-3 mb-4'>
            <div className='footer-title'>
              <h6>Agence Saint Denis</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-light'>
                 2 Rue des Vavangues, Zac Finette <br/>
                 97490 Sainte Clotilde
                </small>
              </p>
              <a className='btn btn-sm btn btn-outline-danger rounded ' href='https://goo.gl/maps/vnDZ4oDAUR2FXcsNA'>
                J'y vais
              </a>               
            </div>
          </div>
          <div className='col-sm-3 col-md-3 col-lg-3 mb-4'>
            <div className='footer-title'>
              <h6>Agence Le Port</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-light'>
                 16 Bis Rue Claude Chappe, <br/>Zac 2000 
                 97420 Le Port
                </small>
              </p>
              <a className='btn btn-sm btn btn-outline-danger rounded' href='https://goo.gl/maps/2fBVMe28hontZiqz7'>
                J'y vais
              </a>               
            </div>
            
          </div>
          <div className='col-sm-3 col-md-3 col-lg-3 mb-4'>
          <div className='footer-title'>
              <h6>Agence Saint Pierre</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-light'>
                 20 Avenue Charles Isautier, Zi N°3 <br/>
                 97410 Saint Pierre
                </small>
              </p>  
              <a className='btn btn-sm btn btn-outline-danger rounded' href='https://goo.gl/maps/xZLd6FoQtNh3ubA49'>
                J'y vais
              </a>             
            </div>
                           
          </div>
          <div className='col-sm-3 col-md-3 col-lg-3 mb-4'>            
            <div className='footer-content'>
              <div className='footer-title'>
                <h6>Agence Saint André  </h6>
              </div>
              <div className='footer-content'>
                <p>
                  <small className='text-light'>
                 1830 Avenue Île de France <br/>
                 97440 Saint André
                  </small>
                </p>
                  <a className='btn btn-sm btn btn-outline-danger rounded' href='https://goo.gl/maps/aLoFejDEpoqR4KsL7'>
                  J'y vais
                  </a>
                  <CBadge color="primary" className='badge mx-2'>New</CBadge> 
              </div>
            </div>
          </div>
            <div className='social-media text-end'>
              <div className='footer-body'>
                <a href='tel:+262262259999' className='text-light px-2'>
                  <i className='fas fa-phone-alt px-2' />
                  <i className='' />+262 (0)262 25 99 99
                </a>
                <a href='mailto:info@mondistri.re' className='text-light px-2'>
                  <i className='fas fa-envelope px-2' />
                  <i className='' />info@mondistri.re
                </a>
                {/* <div className='p-2 text-end'> */}
                <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fmondistri%2F' className='text-light px-2'>
                  <i className='fab fa-facebook-f px-2' />
                </a>
                <a href='https://wa.me/262692165436/' className='text-light p-2 '>
                  <i className='fab fa-whatsapp px-2' />
                </a>
                <a href='https://www.instagram.com/mondistri_reunion/' className='text-light p-2'>
                  <i className='fab fa-instagram px-2' />
                </a>
                <a href='https://www.youtube.com/@mondistrireunion9199' className='text-light p-2'>
                  <i className='fab fa-youtube px-2' />
                </a>
                <a href='https://www.linkedin.com/company/hzh-mondistri/mycompany/' className='text-light p-2'>
                  <i className='fab fa-linkedin px-2' />
                </a>
                {/* </div> */}
              </div>
            </div>
          </div>
      </div>
      </Section>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© Tous droits réservés. Conception par Nicolas QUÉRAT - 2023 - By HZH-Mondistri</small>
      </div>
    </footer>
  );
};

export default Footer;
