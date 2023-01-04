import axios from "axios";

export const fetchRepositoryAPI = async (params)=>{
    const response = await axios.get(`https://api.github.com/users/${search}/repos`, {
        params: {
            ...params
        }
    })
    return response.data
}