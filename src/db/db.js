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