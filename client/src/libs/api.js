import axios from "axios";

const api = axios.create({
  baseURL: "http://15.164.103.93:5000/",
  params: {
    language: "en-US",
  },
});

export const userApi = {
  getUser: () => api.get("api/users"),
};

export const commentApi = {
  getSerious: () => api.get("api/comment/serious"),
  getHumor: () => api.get("api/comment/humor"),
};
