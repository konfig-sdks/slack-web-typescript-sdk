/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface StarsListResponseItemsInnerInnerAnyOf5
 */
export interface StarsListResponseItemsInnerInnerAnyOf5 {
    /**
     * 
     * @type {string}
     * @memberof StarsListResponseItemsInnerInnerAnyOf5
     */
    'channel': string;
    /**
     * 
     * @type {number}
     * @memberof StarsListResponseItemsInnerInnerAnyOf5
     */
    'date_create': number;
    /**
     * 
     * @type {string}
     * @memberof StarsListResponseItemsInnerInnerAnyOf5
     */
    'type': StarsListResponseItemsInnerInnerAnyOf5TypeEnum;
}

type StarsListResponseItemsInnerInnerAnyOf5TypeEnum = 'group'


