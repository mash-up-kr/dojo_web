/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { CoinBySolvedPick } from './coinBySolvedPick';
import type { DojoApiErrorResponse } from './dojoApiErrorResponse';

export interface DojoApiResponseCoinBySolvedPick {
  data?: CoinBySolvedPick;
  error?: DojoApiErrorResponse;
  success: boolean;
}