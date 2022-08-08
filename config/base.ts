import axios from "axios";

const base = "https://fakestoreapi.com";

const baseAxios = axios.create({
  baseURL: base,
});

export default baseAxios;
