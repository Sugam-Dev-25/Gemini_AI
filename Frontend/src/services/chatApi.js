import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const sendMessage = async (message) => {
  const response = await api.post("/chat", {
    message,
  });

  return response.data;
};