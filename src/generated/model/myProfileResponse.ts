/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */

/**
 * 프로필 응답 Response
 */
export interface MyProfileResponse {
  /** 소유한 코인 개수 */
  coinCount: number;
  /** 유저의 친구 수 */
  friendCount: number;
  /** 유저 id */
  memberId: string;
  /** 유저 이름 */
  memberName: string;
  /** 유저 기수 */
  ordinal: number;
  /** 유저가 받은 픽 개수 */
  pickCount: number;
  /** 유저 플랫폼 */
  platform: string;
  /** 유저 프로필 이미지 url */
  profileImageUrl: string;
}