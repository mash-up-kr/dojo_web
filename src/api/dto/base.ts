import type { PaginationData } from "./pagination";

// TODO: 서버와 맞추기
export type BaseResponse<D = unknown> = {
	code: string;
	message: string;
	status: string;
	statusMessage: string;
	data: D;
};

// TODO: 서버와 맞추기
export type PaginationResponse<D = unknown> = BaseResponse<PaginationData<D>>;
