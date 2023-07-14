import React, { Component } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

import Section from '../HOC/Section';
import Img1 from '../../assets/img/Carousel/tempimage01.jpeg';
import Img2 from '../../assets/img/Carousel/tempimage02.jpeg';
import Img3 from '../../assets/img/Carousel/tempimage03.jpeg';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.AUTOCHANGE_TIME = 40;
    this.carouselRef = React.createRef(); // Créez une référence pour le Carousel
  }

  componentDidMount() {
    this.startAutoChange();
  }

  componentWillUnmount() {
    this.stopAutoChange();
  }

  startAutoChange() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, this.AUTOCHANGE_TIME);
  }

  stopAutoChange() {
    clearInterval(this.carouselInterval);
  }

  nextSlide() {
    if (this.carouselRef.current && typeof this.carouselRef.current.next === 'function') {
      this.carouselRef.current.next(); // Utilisez la méthode next à partir de la référence
    }
  }

  render() {
    return (
      <Section id='carousel'>
        <div className='bg-darck'>
        <div className='container pt-5 pb-2'>
          <div className='section-header pt-2 pb-5 text-center'>
            <h3 className='section-title'>
            <span>En </span>Image
            </h3>
            <CCarousel controls transition="crossfade"className='pt-5 pb-4 mx-1'>
            <CCarouselItem>
                <CImage className="d-block w-100 rounded-4" src={Img1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 rounded-4" src={Img2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100  rounded-4" src={Img3} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>
          </div>
        </div>
        </div>
      </Section>
    );
  }
}

export default Carousel;
