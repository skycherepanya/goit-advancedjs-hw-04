import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const API_KEY = '56361798-f8b70e825b8ee5840492d6dfc';
  const BASE_URL = 'https://pixabay.com/api/';

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
