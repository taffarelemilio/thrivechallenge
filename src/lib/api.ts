import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api", //This is hardcoded for the challenge only, it should be in a .env
});
