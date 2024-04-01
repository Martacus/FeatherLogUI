import axios from "axios"; 

export default defineEventHandler(async () => { 
  try { 
    const response = await axios.get('http://localhost:8080/domain/list' );
    console.log(response.data);
    return response.data;  
  } catch (e) {
    console.error(e);
    throw e;
  } 
})