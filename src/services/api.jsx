import axios from 'axios'

export const getRecipes = async(searchedQuery) =>{
    let API_URL = "https://forkify-api.herokuapp.com/api"
    try {
       let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`)
       return response.data;

    } catch (error) {
        console.log("Error While calling Api" , error.message);
        return error.response;
    }
}

export const getRecipe = async(searchedQuery) =>{
    let API_URL = "https://forkify-api.herokuapp.com/api"
    try {
       let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`)
       return response.data;

    } catch (error) {
        console.log("Error While calling Api" , error.message);
        return error.response;
    }
}