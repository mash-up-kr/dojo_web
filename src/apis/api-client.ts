import Cookies from "js-cookie";
import { HttpClient } from "./http-client";

const httpClient = new HttpClient();

httpClient.instance.interceptors.request.use(
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

export const apiClient = httpClient.instance;
