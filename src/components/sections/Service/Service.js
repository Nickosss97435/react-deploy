import React from 'react';

import Section from '../../HOC/Section';
import {FaShieldAlt} from 'react-icons/fa'

const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Nos </span>Services
          </h3>
          <h6 className='section-subtitle mx-auto ml-auto'>
          spécialisée dans la fourniture de services de qualité dans divers domaines. 
          Que ce soit pour vos besoins en câbles, en appareillages électriques, en éclairage, 
          en climatisation, en vidéo surveillance ou en systèmes d'alarme, nous sommes là pour vous aider. 
          Notre équipe expérimentée est dédiée à fournir des solutions adaptées à vos besoins, 
          en veillant à votre satisfaction et à votre tranquillité d'esprit. 
          Faites nous confiance pour des services fiables, des produits de qualité et un service client exceptionnel.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fas fa-bolt' />
                  
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Câbles</h5>
                  <p className='service-description'>
                  Nous fournissons une large gamme de câbles de haute qualité pour 
                  répondre à vos besoins en matière de connectivité. 
                  Que ce soit pour des applications résidentielles, commerciales ou industrielles, 
                  nos câbles sont conçus pour assurer des performances fiables et durables.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fas fa-plug' />
                  
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Appareillages</h5>
                  <p className='service-description'>
                  Nous proposons une sélection d'appareillages de qualité pour répondre à vos besoins 
                  en matière d'équipements électriques. Que vous ayez besoin de prises, d'interrupteurs, 
                  de disjoncteurs ou d'autres appareils électriques, nous avons ce qu'il vous faut.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fas fa-lightbulb' />
                  
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Éclairage</h5>
                  <p className='service-description'>
                  Nous proposons des solutions d'éclairage innovantes et efficaces pour créer l'ambiance parfaite dans votre espace. 
                  Que vous recherchiez un éclairage intérieur ou extérieur, nous avons une large gamme de luminaires et de systèmes 
                  d'éclairage pour répondre à vos besoins.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fas fa-snowflake' />
                  
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Climatiseation</h5>
                  <p className='service-description'>
                  Nous fournissons des services d'installation, de réparation et d'entretien de systèmes de climatisation 
                  pour assurer votre confort tout au long de l'année. Nos experts en climatisation vous aideront à choisir 
                  et à entretenir le système adapté à votre espace.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fa fa-video' />
                  
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Vidéo Surveillance</h5>
                  <p className='service-description'>
                  Nous proposons des solutions de vidéo surveillance avancées pour protéger votre propriété et assurer votre sécurité. 
                  Nos systèmes de surveillance vous permettent de surveiller en temps réel et d'enregistrer des vidéos pour une 
                  surveillance efficace et une tranquillité d'esprit.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                {/* <i className='fas fa-shield' /> */}
                  <FaShieldAlt />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Alarme</h5>
                  <p className='service-description'>
                  Nous offrons des systèmes d'alarme de haute qualité pour sécuriser votre domicile ou votre entreprise. 
                  Nos systèmes d'alarme sont dotés de fonctionnalités avancées telles que la détection de mouvement, 
                  les capteurs de porte et de fenêtre, et la notification d'alerte pour vous protéger contre les intrusions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
