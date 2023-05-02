import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getAll: async (endpoint: string) => {
    const response = await http.get(endpoint);
    return response.data;
  },
  getById: async (endpoint: string, id: string | undefined) => {
    const response = await http.get(`${endpoint}/${id}`);
    return response.data;
  },
};

// https://jsoplaceholder.typicode.com/albums
// https://jsoplaceholder.typicode.com/albums/1
// https://jsonplaceholder.typicode.com/albums/1/photos
// https://jsoplaceholder.typicode.com/photos/1
