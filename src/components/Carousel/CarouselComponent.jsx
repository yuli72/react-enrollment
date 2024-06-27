import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import bc from './bc.jpg';
import dabois from './dabois.jpg';
import intrams from './intrams.jpg';
import Button from 'react-bootstrap/Button';

function CarouselComponent  () {
  return (
    <Carousel fade>
    <Carousel.Item className='carousel-item'>
    <img
          className="carousel-image d-block w-100"
          src={bc} //image1
          alt="First slide"
        />
      <Carousel.Caption className="carousel-caption top-0 mt-5 ">
      <p className="fs-3 mt-5">Some representative placeholder content for the first slide.</p>
        <h3 className="display-1 fw-bolder text-capitalized">First slide label</h3>
        <Button className='fs-5 mt-5' variant="primary" size="lg">Enroll Now!</Button>{' '}
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-item'>
    <img
          className="carousel-image d-block w-100"
          src={dabois} //image2
          alt="Second slide"
        />
      <Carousel.Caption className="carousel-caption top-0 mt-5 ">
      <p className="fs-3 mt-5">Some representative placeholder content for the second slide.</p>
        <h3 className="display-1 fw-bolder text-capitalized">Second slide label</h3>
        <Button className='fs-5 mt-5' variant="primary" size="lg">Enroll Now!</Button>{' '}
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-item '>
    <img
          className="carousel-image d-block w-100"
          src={intrams} //image3
          alt="Third slide"
        />
      <Carousel.Caption className="carousel-caption top-0 mt-5 ">
        <p className="fs-3 mt-5">Some representative placeholder content for the third slide.</p>
        <h3 className="display-1 fw-bolder text-capitalized">Third slide label</h3>
        <Button className='fs-5 mt-5' variant="primary" size="lg">Enroll Now!</Button>{' '}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
  
}

export default CarouselComponent
