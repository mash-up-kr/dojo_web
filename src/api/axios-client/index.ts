import axios, {
	type AxiosInstance,
	type AxiosRequestConfig,
	type AxiosResponse,
} from "axios";

import {
	HttpClient,
	type HttpRequestConfig,
	type HttpResponse,
} from "../http-client";
import { HttpError } from "../http-client/error";

//TODO: 서버와 맞추기
const BASE_URL = "";

class AxiosClient extends HttpClient {
	private readonly client: AxiosInstance;

	constructor() {
		super();
		const axiosInstance = axios.create({
			baseURL: BASE_URL,
			withCredentials: true,
		});
		this.client = axiosInstance;
	}

	async request<
		ResponseBodyT = unknown,
		RequestQueryT = unknown,
		RequestBodyT = unknown,
	>(
		config: HttpRequestConfig<RequestQueryT, RequestBodyT>,
	): Promise<ResponseBodyT> {
		try {
			const requestConfig: AxiosRequestConfig<ResponseBodyT> = {
				...this.client.defaults,
				...config,
				headers: { ...config.headers },
			};
			const response: AxiosResponse<ResponseBodyT> =
				await this.client(requestConfig);
			const { data } = response;
			return data;
		} catch (e) {
			if (!axios.isAxiosError(e)) {
				throw this.errorHandler(
					new HttpError({
						message: "Something went wrong!",
						response: { status: 500, data: undefined },
					}),
				);
			}

			const httpErrorResponse: HttpResponse = {
				data: e.response?.data,
				status: e.response?.status ?? 500,
			};

			throw this.errorHandler(
				new HttpError({
					message: e.message,
					response: e.response ? httpErrorResponse : undefined,
				}),
			);
		}
	}

	public errorHandler(
		e: HttpError<unknown>,
	): HttpError<unknown> | Promise<HttpError<unknown>> {
		//TODO: 서버와 코드 맞추고 핸들링 로직 추가
		if (e.response?.status === 403) {
			alert("권한 없어용");
		}
		return e;
	}
}

export default AxiosClient;
export const Api = new AxiosClient();
