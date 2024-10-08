/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */

export type GetReceivedPickListParams = {
/**
 * 정렬 기준. LATEST는 최근에 Pick된 항목을 기준으로 정렬하고, MOST_PICKED는 가장 많이 Pick된 항목을 기준으로 정렬합니다.
 */
sort?: string;
/**
 * 페이지 번호. 0부터 시작합니다.
 */
pageNumber?: string;
/**
 * 페이지 크기. 한 페이지에 포함될 항목의 개수를 설정합니다.
 */
pageSize?: string;
};
