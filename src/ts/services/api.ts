import axios, { AxiosRequestConfig } from "axios";

export const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org",
});

const apiKeyFilmes =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJkMjY4NWM0YmUzZTIyOGViZTgxNWZmZjQ3YjI1OSIsInN1YiI6IjYyNjdmMGYyMTJhYWJjMDA1MTY3MDk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jVMr7oMF26ooqbHRwbdXBmNt_GR5DnNkADZQN-fE6xM";

apiFilmes.interceptors.request.use((request: AxiosRequestConfig) => {
  request.headers["Authorization"] = `Bearer ${apiKeyFilmes}`;
  request.headers["Content-Type"] = `application/json`;

  return request;
});
