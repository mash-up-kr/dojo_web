/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { PickResponse } from './pickResponse';
import type { ReceivedPickListGetResponseSort } from './receivedPickListGetResponseSort';

export interface ReceivedPickListGetResponse {
  pickList: PickResponse[];
  sort: ReceivedPickListGetResponseSort;
}