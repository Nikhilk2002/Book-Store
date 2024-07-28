import { userInstance } from "./Axios/axiosInstance";

export const createBook= async(book)=>{
    try{
        const response=await userInstance.post("/",book);
        return response.data
    }
    catch(error){
        console.error('Error in addBooks:', error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : new Error('Network Error');
      
    }
}

export const getBooks= async ()=>{
    try{
        const response = await userInstance.get("/");
        return response.data
    }
    
    catch(error){
        console.error('Error in fetch book:', error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : new Error('Network Error');
      
    }
}