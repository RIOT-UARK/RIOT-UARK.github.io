import supabase from "../config/supabaseClient";

export const fetchMembers = async () => {
    const { data, error } = await supabase.from('Members').select();
    if (error) return [{first_name :error.message}];
    return data;
};

export const fetchBoardMembers = async () => {
    const { data, error } = await supabase.from('Board Members').select();
    if (error) return [{first_name :error.message}];
    return data;
};

export const fetchProjects = async() => {
    const { data, error } = await supabase.from('Projects').select();
    if (error) return [{name :error.message}];
    return data;
};

export const fetchBattlebots = async() => {
    const { data, error } = await supabase.from('Battlebots').select();
    if (error) return [{name :error.message}];
    return data;
};