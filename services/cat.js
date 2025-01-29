import axios from "axios";

const API_KEY = process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchCats({ breed, origin, page = 1, limit = 12 }) {
  const apiLimit = 100;
  let url = `${BASE_URL}/images/search?limit=${apiLimit}&page=${page}&has_breeds=1`;

  if (breed && breed !== "all") {
    url += `&breed_ids=${breed}`;
  }

  const response = await axios.get(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  let cats = response.data;

  if (origin && origin !== "all") {
    cats = cats.filter(
      (cat) => cat.breeds.length > 0 && cat.breeds[0].origin === origin
    );
  }

  const startIndex = (page - 1) * limit;
  const paginatedCats = cats.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(cats.length / limit);

  return {
    cats: paginatedCats,
    totalPages,
  };
}

export async function fetchBreeds() {
  const response = await axios.get(`${BASE_URL}/breeds`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return response.data;
}
