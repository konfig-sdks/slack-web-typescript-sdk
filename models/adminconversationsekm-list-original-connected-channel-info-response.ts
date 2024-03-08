/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkTrue } from './defs-ok-true';

/**
 * This method either only returns a brief _OK_ response or a verbose schema is not available for this method.
 * @export
 * @interface AdminconversationsekmListOriginalConnectedChannelInfoResponse
 */
export interface AdminconversationsekmListOriginalConnectedChannelInfoResponse {
    [key: string]: any;

    /**
     * 
     * @type {DefsOkTrue}
     * @memberof AdminconversationsekmListOriginalConnectedChannelInfoResponse
     */
    'ok': DefsOkTrue;
}

