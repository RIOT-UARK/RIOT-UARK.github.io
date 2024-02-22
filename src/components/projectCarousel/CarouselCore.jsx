const CarouselCore = ({ project }) => {
	return (
		<div id="carouselContent" key={project.id}>
			<img src={project.image_url} alt={project.name} />
			<p>{project.projectDesc}</p>
		</div>
	);
};

export default CarouselCore;