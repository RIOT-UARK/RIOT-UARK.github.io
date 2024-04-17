import supabase from "../config/supabaseClient";

export const fetchProjects = async() => {
    const { data, error } = await supabase.from('Projects').select();
    if (error) return [{name :error.message}];
    return data;
};