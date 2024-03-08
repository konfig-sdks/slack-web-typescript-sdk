/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkTrue } from './defs-ok-true';
import { MessageObjectProperty } from './message-object-property';

/**
 * Schema for successful response of chat.update method
 * @export
 * @interface ChatUpdateResponse
 */
export interface ChatUpdateResponse {
    /**
     * 
     * @type {string}
     * @memberof ChatUpdateResponse
     */
    'channel': string;
    /**
     * 
     * @type {MessageObjectProperty}
     * @memberof ChatUpdateResponse
     */
    'message': MessageObjectProperty;
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof ChatUpdateResponse
     */
    'ok': DefsOkTrue;
    /**
     * 
     * @type {string}
     * @memberof ChatUpdateResponse
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof ChatUpdateResponse
     */
    'ts': string;
}

