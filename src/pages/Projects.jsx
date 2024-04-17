import { fetchProjects } from '../utils/fetchProjects';
import { useEffect, useState } from 'react';

import ProjectCard from '../components/ProjectCards/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [openModalId, setOpenModalId] = useState(null); // State to track open modal ID

    useEffect(() => {
        const fetchProjectsData = async () => {
            const projects = await fetchProjects();
            setProjects(projects);
        };
        fetchProjectsData();
    }, []);

    // Function to toggle modal state and set open modal ID
    const handleToggleModal = (projectId) => {
        setOpenModalId(openModalId === projectId ? null : projectId);
    };

    // Filter current and previous projects
    const currentProjects = projects && projects.filter((project) => project.yearFinished === -1);
    const prevProjects = projects && projects.filter((project) => project.yearFinished !== -1);

    return (
        <div className="page projects">
            <div className="textBlurb">
                <h1>Projects</h1>
                <p>
                    RIOT is the home to many creative projects that have been developed and that are actively developed.
                    This website acts as a hub point for denoting what projects are currently being developed, and what
                    projects have already been completed. We give all files/resources developed, with the permission of
                    the designers, to the public through this website.
                </p>
            </div>
            {currentProjects && (
                <div id="currentProjects">
                    <h1>Current Projects</h1>
                    <div className="projectCardContainer">
                        {currentProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isOpen={openModalId === project.id} // Pass isOpen prop
                                onToggleModal={handleToggleModal} // Pass onToggleModal function
                            />
                        ))}
                    </div>
                </div>
            )}
            {prevProjects && (
                <div id="oldProjects">
                    <h1>Previous Projects</h1>
                    <div className="projectCardContainer">
                        {prevProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isOpen={openModalId === project.id} // Pass isOpen prop
                                onToggleModal={handleToggleModal} // Pass onToggleModal function
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
