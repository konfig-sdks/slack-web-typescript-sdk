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
 * @interface ConversationsCreateRequest
 */
export interface ConversationsCreateRequest {
    /**
     * Create a private channel instead of a public one
     * @type {boolean}
     * @memberof ConversationsCreateRequest
     */
    'is_private'?: boolean;
    /**
     * Name of the public or private channel to create
     * @type {string}
     * @memberof ConversationsCreateRequest
     */
    'name'?: string;
}

