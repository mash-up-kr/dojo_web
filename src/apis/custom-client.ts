import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const createApiInstance = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: "https://docker-ecs.net",
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const tokenFromCookie = Cookies.get("token");
      if (tokenFromCookie) {
        config.headers.Authorization = tokenFromCookie;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
      if (err.response?.status === 401) {
        Cookies.remove("token");
        const urlParams = new URLSearchParams(window.location.href);
        const memberId = urlParams.get("memberId");
        window.location.href = `/login?memberId=${memberId}&returnUrl=${encodeURIComponent(window.location.href)}`;
      }
      return Promise.reject(err);
    },
  );

  return instance;
};

const apiInstance = createApiInstance();

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
