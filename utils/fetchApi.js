import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com';
// export const loactionUrl = 'https://bayut.p.rapidapi.com/auto-complete';


  export const fetchApi = async (URL)=>{
    const {data} = await axios.get((URL),{
        headers: {
            'X-RapidAPI-Key': '4de1fb24e2mshc6df605b6d6cd40p15efb4jsned3294fc7947',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data
  }