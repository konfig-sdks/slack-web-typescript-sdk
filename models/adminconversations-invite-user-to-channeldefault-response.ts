/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from admin.conversations.invite
 * @export
 * @interface AdminconversationsInviteUserToChanneldefaultResponse
 */
export interface AdminconversationsInviteUserToChanneldefaultResponse {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof AdminconversationsInviteUserToChanneldefaultResponse
     */
    'error': AdminconversationsInviteUserToChanneldefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof AdminconversationsInviteUserToChanneldefaultResponse
     */
    'ok': DefsOkFalse;
}

type AdminconversationsInviteUserToChanneldefaultResponseErrorEnum = 'feature_not_enabled' | 'channel_not_found' | 'channel_type_not_supported' | 'default_org_wide_channel' | 'restricted_action' | 'user_must_be_admin' | 'failed_for_some_users'


