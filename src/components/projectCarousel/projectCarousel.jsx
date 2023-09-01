import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ProjectCarousel = ({ images }) => {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: false,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        className: 'innerSlide',
        dotsClass: 'slick-dots',
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const prev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div id="carousel-container">
            <FaAngleLeft size="50px" onClick={prev} id="carousel-button" />
            <Slider ref={sliderRef} {...settings}>
                {images.map((image) => (
                    <div id="carouselContent" key={image.id}>
                        <img src={image.src} alt={image.alt} />
                        <p>{image.projectDesc}</p>
                    </div>
                ))}
            </Slider>
            <FaAngleRight size="50px" onClick={next} id="carousel-button" />
        </div>
    );
};

export default ProjectCarousel;
