/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { MemberRelationId } from './memberRelationId';
import type { DojoApiErrorResponse } from './dojoApiErrorResponse';

export interface DojoApiResponseMemberRelationId {
  data?: MemberRelationId;
  error?: DojoApiErrorResponse;
  success: boolean;
}