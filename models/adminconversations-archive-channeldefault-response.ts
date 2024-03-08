/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from admin.conversations.archive
 * @export
 * @interface AdminconversationsArchiveChanneldefaultResponse
 */
export interface AdminconversationsArchiveChanneldefaultResponse {
    /**
     * 
     * @type {string}
     * @memberof AdminconversationsArchiveChanneldefaultResponse
     */
    'error': AdminconversationsArchiveChanneldefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof AdminconversationsArchiveChanneldefaultResponse
     */
    'ok': DefsOkFalse;
}

type AdminconversationsArchiveChanneldefaultResponseErrorEnum = 'feature_not_enabled' | 'channel_not_found' | 'channel_type_not_supported' | 'default_org_wide_channel' | 'already_archived' | 'cant_archive_general' | 'restricted_action' | 'could_not_archive_channel'


