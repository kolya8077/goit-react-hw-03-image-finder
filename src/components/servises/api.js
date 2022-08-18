import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '27869333-ebe884c8d87cf53a07508f1e4';

export const fetchData = async (query, page, perPage) => {
  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return response.data;
};


