/** @format */

import axios from "axios";

const API_KEY = "46512107-c348a6a5abc48a8fd682eefb6";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true";
  if (!params) return url;
  let paramkeys = Object.keys(params);
  paramkeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  console.log("final url", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (error) {
    console.log("Error:", error.message);
    return { success: false, msg: error.message };
  }
};
