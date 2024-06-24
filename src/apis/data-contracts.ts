/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponseType {
  /** @format int32 */
  code?: number;
  type?: string;
  message?: string;
}

export interface CategoryType {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface PetType {
  /** @format int64 */
  id?: number;
  category?: CategoryType;
  /** @example "doggie" */
  name: string;
  photoUrls: string[];
  tags?: TagType[];
  /** pet status in the store */
  status?: PetStatusEnumType;
}

export interface TagType {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface OrderType {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  petId?: number;
  /** @format int32 */
  quantity?: number;
  /** @format date-time */
  shipDate?: string;
  /** Order Status */
  status?: OrderStatusEnumType;
  complete?: boolean;
}

export interface UserType {
  /** @format int64 */
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   * @format int32
   */
  userStatus?: number;
}

/** pet status in the store */
export type PetStatusEnumType = "available" | "pending" | "sold";

/** Order Status */
export type OrderStatusEnumType = "placed" | "approved" | "delivered";

export interface UploadFilePayloadType {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: File;
}

export interface FindPetsByStatusParamsType {
  /** Status values that need to be considered for filter */
  status: StatusEnumType[];
}

/** @default "available" */
export type StatusEnumType = "available" | "pending" | "sold";

/** @default "available" */
export type FindPetsByStatusParams1StatusEnumType = "available" | "pending" | "sold";

export interface FindPetsByTagsParamsType {
  /** Tags to filter by */
  tags: string[];
}

export interface UpdatePetWithFormPayloadType {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

export interface LoginUserParamsType {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}
