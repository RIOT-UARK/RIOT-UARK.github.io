import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../../utils/fetchProjects';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import CarouselCore from './CarouselCore';

const ProjectCarousel = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        const fetchProjectsData = async () => {
            const projects = await fetchProjects();
            setProjects(projects);
        };
        fetchProjectsData();
    }, []);

    const selectedProjects = projects && projects.filter((project) => project.inCarousel);

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
        <>
            {selectedProjects && (
                <div id="carousel-container">
                    <FaAngleLeft size="50px" onClick={prev} id="carousel-button" />
                    <Slider ref={sliderRef} {...settings}>
                        {selectedProjects.map((project) => (
                            <CarouselCore key={project.id} project={project} />
                        ))}
                    </Slider>
                    <FaAngleRight size="50px" onClick={next} id="carousel-button" />
                </div>
            )}
        </>
    );
};

export default ProjectCarousel;
