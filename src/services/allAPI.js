
import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";


// get all movies
export const getAllMoviesAPI=async(searchKey)=>{
    return await commonAPI("GET",`${SERVER_URL}/movies`,"")
}



