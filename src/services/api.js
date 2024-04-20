import axios from "axios";

const ACCES_KEY = "5I5eWCNfuzZ2TJ-M0l48OYAoe5_Ak-5XVimfs-x7hTU";

export const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestImages = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `/search/photos?query=${query}&page=${page}&client_id=${ACCES_KEY}`
  );
  return data.results;
};
