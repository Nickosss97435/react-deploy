import React from 'react';
import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/Mondistri-re.jpg';
import MD_Ouest from '../../../assets/img/mondistri_avant03.jpg'

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>HZH </span>Mondistri
          </h3>
          <h6 className='section-subtitle mx-auto ml-auto'>
            Découvrez MONDISTRI (Compagnie Réunionnaise de Distribution et de Matériel),
            une entreprise dynamique qui a vu le jour en 2019, apportant une nouvelle dimension
            à la distribution et au matériel à La Réunion.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row row-md-6 row-lg-6 row-sm-12'>
            <div className='col-md-6 col-lg-6 col-sm-6 '>
                <div className='image-container'>
                  <img className='img-fluid p-2 rounded mx-auto' src={aboutImage} alt='about company' />
                  <img className='img-fluid p-2 rounded mx-auto' src={MD_Ouest} alt='about company' />
                </div>
            </div>
            <div className='col-md-6 col-lg-6 col-sm-6'>
              <h3 className='about-title'>À propos de nous</h3>
              <div className='about-description'>
                <p>
                  Notre passion pour offrir des solutions innovantes et de qualité à nos clients nous a conduit à établir nos agences stratégiquement positionnées dans toute l'île. Tout a commencé avec notre première agence située au 2 RUE DES VAVANGUES à SAINT-DENIS, où nous avons commencé à bâtir notre réputation.
                </p>
                <p>
                  Fort de notre succès initial, nous avons rapidement étendu notre présence pour mieux servir nos clients à travers l'île. Ainsi, nous avons ouvert deux autres agences stratégiquement positionnées : au 20 Avenue Charles Isautier à SAINT-PIERRE dans le Sud de l'île, et au 16 Bis Rue Claude Chappe au Port dans l'Ouest.
                </p>
                <p>
                  Aujourd'hui, nous sommes ravis d'annoncer l'ouverture de notre nouvelle agence dans l'Est de l'île, située au 1830 Bis Avenue Île de France à Saint André. Cela nous permet de couvrir l'ensemble de La Réunion et de répondre aux besoins de nos clients dans toutes les régions.
                </p>
                <p>
                  Chez MONDISTRI, nous nous engageons à fournir des produits et des services de haute qualité, en mettant l'accent sur la satisfaction de nos clients. Nous sommes fiers de notre équipe dévouée, compétente et passionnée, qui travaille chaque jour pour offrir des solutions adaptées à vos besoins.
                </p>
                <p>
                  Que vous soyez un particulier à la recherche d'équipements de qualité pour votre maison, un entrepreneur à la recherche d'outils et de matériel pour vos projets, ou une entreprise en quête de solutions de distribution efficaces, MONDISTRI est là pour vous accompagner.
                </p>
                <p>
                  Faites confiance à MONDISTRI pour vos besoins en distribution et en matériel à La Réunion. Nous sommes là pour vous offrir des produits de qualité, un service exceptionnel et une expérience client inégalée.
                </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </Section>
  );
};

export default about;
