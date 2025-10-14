import axiosOriginal from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axiosOriginal.create({
  baseURL: process.env.SUPABASE_URL,
  timeout: 2000,
  headers: {
    apikey: process.env.SUPABASE_ANON_KEY,
    "Content-Type": "application/json",
  },
});
const axios = setupCache(instance, {
  ttl: 5 * 60 * 1000,
  methods: ["get"],
  interpretHeader: true,
});

export default axios;
