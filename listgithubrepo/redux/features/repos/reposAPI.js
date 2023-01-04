import axios from "axios";

export const fetchRepositoryAPI = async ({search, ...params}) => {
    if(search){
        const response = await axios.get(`https://api.github.com/users/${search}/repos`, {
            params: {
                ...params
            }
        })
        return response.data
    }
}