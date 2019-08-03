export const COUNTRIES = [
  {
    name: "Australia",
    code: "au"
  },
  {
    name: "France",
    code: "fr"
  },
  {
    name: "India",
    code: "in"
  },
  {
    name: "UK",
    code: "au"
  },
  {
    name: "USA",
    code: "us"
  }
];

export const REQUEST_STORIES = "REQUEST_STORIES";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const NEWS_API_ENDPOINT = "https://newsapi.org/v2/top-headlines";
const NEWS_API_KEY = "apiKey=971ea0c019c44f2295c42cb972032a67";
const NEWS_API_COUNTRY_PARAM = "country=us";
const NEWS_API_PAGE_SIZE = "pageSize=5";
export const NEWS_API_ENDPOINT_WITH_PARAMS = `${NEWS_API_ENDPOINT}?${NEWS_API_COUNTRY_PARAM}&${NEWS_API_PAGE_SIZE}&${NEWS_API_KEY}`;
