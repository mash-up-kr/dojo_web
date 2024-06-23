import type { HttpResponse } from "./types";

export interface HttpErrorProps<ResponseBodyT = unknown> {
	message: string;
	response?: HttpResponse<ResponseBodyT>;
}

export class HttpError<ResponseBodyT = unknown> extends Error {
	response?: HttpResponse<ResponseBodyT>;
	constructor({ message, response }: HttpErrorProps<ResponseBodyT>) {
		super(message);
		this.response = response;
	}
}
