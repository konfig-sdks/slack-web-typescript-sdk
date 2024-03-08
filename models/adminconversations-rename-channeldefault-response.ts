/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from admin.conversations.rename
 * @export
 * @interface AdminconversationsRenameChanneldefaultResponse
 */
export interface AdminconversationsRenameChanneldefaultResponse {
    /**
     * 
     * @type {string}
     * @memberof AdminconversationsRenameChanneldefaultResponse
     */
    'error': AdminconversationsRenameChanneldefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof AdminconversationsRenameChanneldefaultResponse
     */
    'ok': DefsOkFalse;
}

type AdminconversationsRenameChanneldefaultResponseErrorEnum = 'feature_not_enabled' | 'channel_not_found' | 'channel_type_not_supported' | 'restricted_action' | 'could_not_rename_channel' | 'default_org_wide_channel' | 'name_taken'


