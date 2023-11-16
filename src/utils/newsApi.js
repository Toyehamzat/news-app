import { API_KEY } from "./ApiKey";
import axios, { Axios } from "axios";

const apibaseUrl = "https://newsapi.org/v2";

const topHeadlines = `${apibaseUrl}/top-headlines?country=us&apiKey=${API_KEY}`;

const recommendedNews = `${apibaseUrl}/top-headlines?country=us&category=buisness&apiKey=${API_KEY}`;

const dicoverNews = (discover) =>
  `${apibaseUrl}/topheadlines?country=us&category=${discover}&apiKey`;

const searchNews = (query) =>
  `${apibaseUrl}/everything?q=${query}&apiKey=${API_KEY}`;

const newsApiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    URL: endpoint,
    params: params ? params : {},
  };
  try {
    const reponse = await axios.request(options);
    return reponse.data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const fetchBreakingNews = async () => {
  return await newsApiCall(topHeadlines);
};

export const fetchRecommendedNews = async () => {
  return await newsApiCall(recommendedNews);
};

export const fetchDiscoverNews = async (discover) => {
  return await newsApiCall(dicoverNews(discover));
};

export const fetchSearchNews = async (query) => {
  const endpoint = searchNews(query);
  return await newsApiCall(endpoint);
};
