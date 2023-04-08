import Axios, { AxiosError } from "axios";

/**
 * default configの設定
 */
export const axios = Axios.create({
  method: "get",
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    "X-MICROCMS-API-KEY": `${process.env.NEXT_PUBLIC_X_MICROCMS_API_KEY}`,
  },
});

/**
 * response interceptors
 */
axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    console.log("--axios response interceptors--");
    console.error(error.toJSON());
    return Promise.reject(error);
  },
);
