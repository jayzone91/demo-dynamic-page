import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

const API = import.meta.env.VITE_API;

export const client = axios.create({
  baseURL: `${API}/php`,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
  } as RawAxiosRequestHeaders,
};

// Types
