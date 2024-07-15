import Cookies from "js-cookie";
import axios from 'axios';
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
 
 
const createApiInstance = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: "http://dojo-backend-eb-env.eba-33qhzuax.ap-northeast-2.elasticbeanstalk.com",
    headers: {
      'Content-Type': 'application/json',
    },
  })

   instance.interceptors.request.use(
    (config) => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
  
      if (token) {
        Cookies.set("token", token);
      }
  
      const tokenFromCookie = Cookies.get("token");
      if (tokenFromCookie) {
        config.headers["Authorization"] = `Bearer ${tokenFromCookie}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance
}


const apiInstance = createApiInstance()

 export const customInstance = <T>(
   config: AxiosRequestConfig,
   options?: AxiosRequestConfig,
 ): Promise<T> => {
   const promise = apiInstance({
     ...config,
     ...options,
   }).then(({ data }) => data);
 
   return promise;
 };
 

 
 export type ErrorType<Error> = AxiosError<Error>;
 
 export type BodyType<BodyData> = BodyData;
  