import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

const PORT = import.meta.env.VITE_PORT;
const API = import.meta.env.VITE_API;

export const client = axios.create({
  baseURL: `${API}:${PORT}/php`,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
  } as RawAxiosRequestHeaders,
};

// Types
