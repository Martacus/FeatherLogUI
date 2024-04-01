import axios from "axios"; 

export default defineEventHandler(async (event) => {
  const domain = getRouterParam(event, 'domain') as string;  
  try { 
    const response = await axios.get('http://localhost:8080/log/' + domain);
    console.log(response.data);
    return response.data;  
  } catch (e) {
    console.error(e);
    throw e;
  } 
})