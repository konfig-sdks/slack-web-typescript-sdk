/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.
 * @export
 * @interface ViewsPushdefaultResponse
 */
export interface ViewsPushdefaultResponse {
    [key: string]: any;

    /**
     * 
     * @type {DefsOkFalse}
     * @memberof ViewsPushdefaultResponse
     */
    'ok': DefsOkFalse;
}

