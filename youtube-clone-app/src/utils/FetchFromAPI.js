import axios from "axios"

 const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
 const options = {
    url:BASE_URL ,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '12c89c2686mshb93dea02e4dd448p171052jsnc40933efa81b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }

