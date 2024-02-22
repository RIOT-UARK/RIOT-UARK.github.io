import { fetchProjects } from '../db/db';
import { useEffect, useState } from 'react';

import ProjectCard from '../components/ProjectCards/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjectsData = async () => {
            const projects = await fetchProjects();
            setProjects(projects);
        };
        fetchProjectsData();
    }, []);

        const currentProjects = projects && projects.filter(project =>
            project.yearFinished === -1
        );
        const prevProjects = projects && projects.filter(project =>
            project.yearFinished !== -1
        );

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
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            )}
            {prevProjects && (
                <div id="oldProjects">
                    <h1>Previous Projects</h1>
                    <div className="projectCardContainer">
                        {prevProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
