import supabase from "../config/supabaseClient";

export const fetchBattlebots = async() => {
    const { data, error } = await supabase.from('Battlebots').select();
    if (error) return [{name :error.message}];
    return data;
};