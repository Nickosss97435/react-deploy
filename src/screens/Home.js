import React from 'react';

import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import Section from '../components/HOC/Section';
import bgImage from '../assets/img/la_reunion.png';

const home = () => {
  return (
    <Section id='home'>
     
        <motion.div initial={{ opacity: 0, y: '-100px' }}
            animate={{ opacity: 10, y: 0 }}
            transition={{ duration: 2.5 }}
          className='home-content'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <motion.div initial={{ opacity: 0, y: '-100px' }}
            animate={{ opacity: 10, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            transition={{duration: 2.5, repeat: Infinity, repeatType: 'reverse', rotate: 180}}  className='title h1'>MONDISTRI
            <span className='title2'>.re</span></motion.div>
            <motion.div variants={fadeIn('up', 0.3)} whileInView={'show'} viewport={{once: false, amount: 0.7}}
            transition={{ duration: 5.5 }}
            className='sub-title md-4'>
            <TypeAnimation sequence={[
                'Ensemble, innovons le monde de l électricité !',
                2000,
                'Appareillages',
                2000,
                'Câbles',
                2000,
                'VDI',
                2000,
                'Domotique',
                2000,
                'CCTV',
                2000,
                'Alarme',
                2000,
                'Ensemble, innovons le monde de l électricité !',
                2000,
              ]}
              speed={50}
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
          </div>
        </motion.div>
      
    </Section>
  );
};

export default home;
