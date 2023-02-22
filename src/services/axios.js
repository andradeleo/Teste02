import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/6a0f2a23b5494f7ea8772d09f33e1589",
  timeout: 1000,
});
