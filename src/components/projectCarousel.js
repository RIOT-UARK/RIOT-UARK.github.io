import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = ({ images }) => {
	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: false,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<>
			<div className="imgslider">
				<Slider {...settings}>
					{images.map((images) => (
						<div id = "carouselContent" key={images.id}>
							<img src={images.src} width="1000" height="500" alt={images.alt} />
							<p>{images.projectDesc}</p>
						</div>
					))}
				</Slider>
			</div>
		</>
	)
}

export default ProjectCarousel