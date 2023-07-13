import React from 'react';
import { FaUserFriends, FaShoppingCart, FaUikit, FaBuilding } from 'react-icons/fa';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/facts_bg.jpg';

const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <FaUserFriends />
              </div>
              <h4 className='facts-counter text-danger'>26</h4>
              <h5 className='facts-title text-danger'>Salariés</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-shop' />
                <FaShoppingCart />
              </div>
              <h4 className='facts-counter text-danger'>4</h4>
              <h5 className='facts-title text-danger'>Agences</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <FaBuilding />
              </div>
              <h4 className='facts-counter text-danger'>2</h4>
              <h5 className='facts-title text-danger'>Centrales d'achat</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <FaUikit />
              </div>
              <h4 className='facts-counter text-danger'>+ de 140 000</h4>
              <h5 className='facts-title text-danger'>Références</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
