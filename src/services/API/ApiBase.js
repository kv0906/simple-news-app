import axios from "axios";

const BASE_URL = process.env.REACT_APP_NEWS_API;

const _axiosInstance = axios.create({
  baseURL: BASE_URL
});

export default {
  get(url, config) {
    return _axiosInstance
      .get(url, config)
      .then(res => ({ res }))
      .catch(error => ({ error }));
  }
};
