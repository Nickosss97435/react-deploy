import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-inline text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between '>
          <div className='d-flex pt-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2 px-2 align-item-center pt-2' />
              <small><a className='btn align-item-center text-light'href='tel:+262262259999'>+262 (0) 262 25 99 99</a></small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2 px-2 align-item-center pt-2' />
              <small ><a className=' btn  align-item-center text-light'href='mailto:info@mondistri.re'>info@mondistri.re</a></small>
            </div>
          </div>
          <div className='d-flex pt-1 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fmondistri%2F' className='text-light'>
                <i className='fab fa-facebook-f mr-2 px-1' />
              </a>
              <a href='https://wa.me/262692165436/' className='text-light'>
                <i className='fab fa-whatsapp mr-2 px-1' />
              </a>
              <a href='https://www.instagram.com/mondistri_reunion/' className='text-light'>
                <i className='fab fa-instagram mr-2 px-1' />
              </a>
              <a href='https://www.youtube.com/@mondistrireunion9199' className='text-light'>
                <i className='fab fa-youtube mr-2 px-1' />
              </a>
              <a href='https://www.linkedin.com/company/hzh-mondistri/mycompany/' className='text-light'>
                <i className='fab fa-linkedin mr-2 px-1' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;
