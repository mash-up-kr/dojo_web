/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { PickOpenResponsePickOpenItem } from './pickOpenResponsePickOpenItem';

/**
 * 픽 오픈 응답
 */
export interface PickOpenResponse {
  /** 픽 id */
  pickId: string;
  /** 이미지 url */
  pickOpenImageUrl: string;
  /** 오픈 항목 */
  pickOpenItem: PickOpenResponsePickOpenItem;
  /** 오픈된 값 */
  pickOpenValue: string;
}
