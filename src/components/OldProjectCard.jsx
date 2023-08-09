const ProjectCard = ({ project }) => {
    if (project.yearFinished !== -1) {
        if (project.yearStarted === project.yearFinished) {
            return (
                <div className="projectCard">
                    <div className="myBtn">
                        <img
                            className="projectImage"
                            src="RIOT Logo Transparent.png"
                            alt="Placeholder"
                        ></img>
                        <div className="desc">
                            <p>{project.name}</p>
                            <h5>{project.yearStarted}</h5>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="projectCard">
                    <div className="myBtn">
                        <img
                            className="projectImage"
                            src="RIOT Logo.png"
                            alt="Placeholder"
                        ></img>
                        <div className="desc">
                            <p>{project.name}</p>
                            <h5>
                                {project.yearStarted} - {project.yearFinished}
                            </h5>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default ProjectCard;
