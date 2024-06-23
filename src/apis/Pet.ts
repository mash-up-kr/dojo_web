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

import {
  ApiResponseType,
  FindPetsByStatusParamsType,
  FindPetsByTagsParamsType,
  PetType,
  UpdatePetWithFormPayloadType,
  UploadFilePayloadType,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Pet<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   * @response `200` `ApiResponseType` successful operation
   */
  uploadFile = (petId: number, data: UploadFilePayloadType, params: RequestParams = {}) =>
    this.http.request<ApiResponseType, any>({
      path: `/pet/${petId}/uploadImage`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   * @response `405` `void` Invalid input
   */
  addPet = (body: PetType, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/pet`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   * @response `400` `void` Invalid ID supplied
   * @response `404` `void` Pet not found
   * @response `405` `void` Validation exception
   */
  updatePet = (body: PetType, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/pet`,
      method: "PUT",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   * @response `200` `(PetType)[]` successful operation
   * @response `400` `void` Invalid status value
   */
  findPetsByStatus = (query: FindPetsByStatusParamsType, params: RequestParams = {}) =>
    this.http.request<PetType[], void>({
      path: `/pet/findByStatus`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * @tags pet
   * @name FindPetsByTags
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @deprecated
   * @secure
   * @response `200` `(PetType)[]` successful operation
   * @response `400` `void` Invalid tag value
   */
  findPetsByTags = (query: FindPetsByTagsParamsType, params: RequestParams = {}) =>
    this.http.request<PetType[], void>({
      path: `/pet/findByTags`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single pet
   *
   * @tags pet
   * @name GetPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   * @response `200` `PetType` successful operation
   * @response `400` `void` Invalid ID supplied
   * @response `404` `void` Pet not found
   */
  getPetById = (petId: number, params: RequestParams = {}) =>
    this.http.request<PetType, void>({
      path: `/pet/${petId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name UpdatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   * @response `405` `void` Invalid input
   */
  updatePetWithForm = (petId: number, data: UpdatePetWithFormPayloadType, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/pet/${petId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name DeletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   * @response `400` `void` Invalid ID supplied
   * @response `404` `void` Pet not found
   */
  deletePet = (petId: number, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/pet/${petId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
