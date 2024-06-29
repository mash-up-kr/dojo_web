import type { HttpError } from "./error";
import type { HttpRequestConfig } from "./types";

export * from "./types";

export abstract class HttpClient {
	abstract errorHandler(e: HttpError): Promise<HttpError> | HttpError;

	abstract request<
		ResponseBodyT = unknown,
		RequestQueryT = unknown,
		RequestBodyT = unknown,
	>(
		config: HttpRequestConfig<RequestQueryT, RequestBodyT>,
	): Promise<ResponseBodyT>;

	get<ResponseBodyT = unknown, RequestQueryT = unknown, RequestBodyT = unknown>(
		url: string,
		config?: HttpRequestConfig<RequestQueryT, RequestBodyT>,
	): Promise<ResponseBodyT> {
		return this.request<ResponseBodyT, RequestQueryT, RequestBodyT>({
			...config,
			url,
			method: "GET",
		});
	}

	delete<
		ResponseBodyT = unknown,
		RequestQueryT = unknown,
		RequestBodyT = unknown,
	>(
		url: string,
		config?: HttpRequestConfig<RequestQueryT, RequestBodyT>,
	): Promise<ResponseBodyT> {
		return this.request<ResponseBodyT, RequestQueryT, RequestBodyT>({
			...config,
			url,
			method: "DELETE",
		});
	}

	post<
		ResponseBodyT = unknown,
		RequestQueryT = unknown,
		RequestBodyT = unknown,
	>(
		url: string,
		data?: RequestBodyT,
		config?: HttpRequestConfig<RequestQueryT, RequestBodyT>,
	): Promise<ResponseBodyT> {
		return this.request<ResponseBodyT, RequestQueryT, RequestBodyT>({
			...config,
			url,
			data,
			method: "POST",
		});
	}

	put<ResponseBodyT = unknown, RequestQueryT = unknown, RequestBodyT = unknown>(
		url: string,
		data?: RequestBodyT,
		config?: HttpRequestConfig<RequestQueryT, RequestBodyT>,
	): Promise<ResponseBodyT> {
		return this.request<ResponseBodyT, RequestQueryT, RequestBodyT>({
			...config,
			url,
			data,
			method: "PUT",
		});
	}

	patch<
		ResponseBodyT = unknown,
		RequestQueryT = unknown,
		RequestBodyT = unknown,
	>(
		url: string,
		data?: Partial<RequestBodyT>,
		config?: HttpRequestConfig<RequestQueryT, RequestBodyT>,
	): Promise<ResponseBodyT> {
		return this.request<ResponseBodyT, RequestQueryT, Partial<RequestBodyT>>({
			...config,
			url,
			data,
			method: "PATCH",
		});
	}
}
