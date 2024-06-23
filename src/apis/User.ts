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

import { LoginUserParamsType, UserType } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   * @response `default` `void` successful operation
   */
  createUsersWithListInput = (body: UserType[], params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/user/createWithList`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   * @response `200` `UserType` successful operation
   * @response `400` `void` Invalid username supplied
   * @response `404` `void` User not found
   */
  getUserByName = (username: string, params: RequestParams = {}) =>
    this.http.request<UserType, void>({
      path: `/user/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   * @response `400` `void` Invalid user supplied
   * @response `404` `void` User not found
   */
  updateUser = (username: string, body: UserType, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/user/${username}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   * @response `400` `void` Invalid username supplied
   * @response `404` `void` User not found
   */
  deleteUser = (username: string, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/user/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   * @response `200` `string` successful operation
   * @response `400` `void` Invalid username/password supplied
   */
  loginUser = (query: LoginUserParamsType, params: RequestParams = {}) =>
    this.http.request<string, void>({
      path: `/user/login`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   * @response `default` `void` successful operation
   */
  logoutUser = (params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/user/logout`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   * @response `default` `void` successful operation
   */
  createUsersWithArrayInput = (body: UserType[], params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/user/createWithArray`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   * @response `default` `void` successful operation
   */
  createUser = (body: UserType, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/user`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
}
