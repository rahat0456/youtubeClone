import axios from "axios";
/**/
const API_KEY = "3e2d5c02c1msh6d3c4fb79b883a2p100dbejsnac80227fd049";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/video/details/",
  params: {
    id: "kJQP7kiw5Fk",
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": "3e2d5c02c1msh6d3c4fb79b883a2p100dbejsnac80227fd049",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("error fetching api data: ", error);
    throw error;
  }
};
