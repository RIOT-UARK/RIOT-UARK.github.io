import ProjectCard from "../components/ProjectCard/ProjectCard";
import LogoSpin from "../components/logoSpin/logoSpin";
import teamLeadCard from "../components/teamLeadCard/teamLeadCard";
import supabase from '../config/supabaseClient';
import { useEffect, useState } from "react";

const Tutorial = () => {
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
        <div>
            <h1>helloWorld</h1>
            <teamLeadCard/>
            
        </div>
    );
};

export default Tutorial;
