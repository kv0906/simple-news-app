import ApiBase from "./ApiBase";

export function get_articles() {
  return ApiBase.get(
    `/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
}
export function get_custom_articles(keyword) {
  return ApiBase.get(
    `/everything?q=${keyword}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
}
