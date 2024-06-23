import { Api } from "../axios-client";
import type { ExampleCrateDto, ExampleDto } from "../dto/_exampleDto";
import type { BaseResponse, PaginationResponse } from "../dto/base";
import type { PaginationParams } from "../dto/pagination";

export const getExample = () => {
	return Api.get<BaseResponse<ExampleDto>>("/example");
};

export const getExampleList = (customPaginationParams: PaginationParams) => {
	const paginationParams = { page: 0, size: 20, ...customPaginationParams };
	return Api.get<PaginationResponse<ExampleDto>>("/example", {
		params: paginationParams,
	});
};

export const createExample = (data: ExampleCrateDto) => {
	return Api.post<ExampleDto>("/example", data);
};
