import axios from "axios";

export const Config = {
  apiUrl: "https://source.mn/wp/wp-json",
  menuUrl: "https://source.mn/wp/wp-json/menus/v1/menus",
};

export const fetcher = (url) => axios.get(url).then((res) => res.data);
