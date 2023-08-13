import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';

import PortalExample from '../components/PortalExample';
//import ProjectCard from "../components/ProjectCard"
import OldProjectCard from '../components/OldProjectCard';

const Projects = () => {
    const [fetchError, setFetchError] = useState(null);
    const [Projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase.from('Projects').select();

            if (error) {
                setFetchError('Error: failed to fetch data');
                console.log(error);
                setProjects(null);
            }
            if (data) {
                setProjects(data);
                setFetchError(null);
            }
        };
        fetchProjects();
    }, []);

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
            <div id="currentProjects">
                <h1>Current Projects</h1>
                {fetchError && <p>{fetchError}</p>}
                {Projects && (
                    <div className="projectCardContainer">
                        {Projects.map((project) => (
                            <PortalExample key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>

            <div id="oldProjects">
                <h1>Previous Projects</h1>
                {fetchError && <p>{fetchError}</p>}
                {Projects && (
                    <div className="projectCardContainer">
                        {Projects.map((project) => (
                            <OldProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
