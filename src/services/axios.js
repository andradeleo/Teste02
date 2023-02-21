import axios from "axios";

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/729f364408af4005aa992a99049f30b3',
  timeout: 1000,
});
