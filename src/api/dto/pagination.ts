// TODO: 서버와 맞추기
export type PaginationData<D> = {
	dataList: D[];
	totalPages: number;
};

// TODO: 서버와 맞추기
export type PaginationParams = {
	page?: number;
	size?: number;
};
