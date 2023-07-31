function modal(projectImage) {
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal
	var img = document.getElementById(projectImage);
	var modalImg = document.getElementById("img01");

	//Display image & info
	modal.style.display = "block";
	modalImg.src = img.src;

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	}
}

const ProjectCard = ({project}) => {
	if(project.yearFinished === -1) {
		return (
			<>
				<div className = "projectCard">
					<img
						className = "projectImage"
						onClick = {() => modal("projectImage")}
						src = "RIOT Logo.png"
						alt = "Placeholder">
					</img>
					<div className = "desc">
						<p>{project.name}</p>
						<h5>{project.yearStarted} - </h5>
					</div>
				</div>

				<div id="myModal" className = "modal">
					<img className = "modal-content" id="img01" alt=""></img>
					<div className = "modal-footer"></div>
					<div id="caption">{project.projectDesc}</div>
				</div>
			</>
		);
	}
}

export default ProjectCard