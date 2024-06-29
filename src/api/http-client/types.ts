export interface HttpResponse<ResponseBodyT = unknown> {
	status: number;
	data: ResponseBodyT;
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface HttpRequestConfig<
	RequestQueryT = unknown,
	RequestBodyT = unknown,
> {
	url?: string;
	baseUrl?: string;
	method?: HttpMethod;
	data?: RequestBodyT;
	params?: RequestQueryT;
	headers?: Record<string, string | number | boolean>;
}
