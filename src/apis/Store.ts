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

import { OrderType } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Store<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   * @response `200` `Record<string,number>` successful operation
   */
  getInventory = (params: RequestParams = {}) =>
    this.http.request<Record<string, number>, any>({
      path: `/store/inventory`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   * @response `200` `OrderType` successful operation
   * @response `400` `void` Invalid Order
   */
  placeOrder = (body: OrderType, params: RequestParams = {}) =>
    this.http.request<OrderType, void>({
      path: `/store/order`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   * @response `200` `OrderType` successful operation
   * @response `400` `void` Invalid ID supplied
   * @response `404` `void` Order not found
   */
  getOrderById = (orderId: number, params: RequestParams = {}) =>
    this.http.request<OrderType, void>({
      path: `/store/order/${orderId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   * @response `400` `void` Invalid ID supplied
   * @response `404` `void` Order not found
   */
  deleteOrder = (orderId: number, params: RequestParams = {}) =>
    this.http.request<any, void>({
      path: `/store/order/${orderId}`,
      method: "DELETE",
      ...params,
    });
}
