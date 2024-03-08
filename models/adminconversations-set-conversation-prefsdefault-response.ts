/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from admin.conversations.setConversationPrefs
 * @export
 * @interface AdminconversationsSetConversationPrefsdefaultResponse
 */
export interface AdminconversationsSetConversationPrefsdefaultResponse {
    /**
     * 
     * @type {string}
     * @memberof AdminconversationsSetConversationPrefsdefaultResponse
     */
    'error': AdminconversationsSetConversationPrefsdefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof AdminconversationsSetConversationPrefsdefaultResponse
     */
    'ok': DefsOkFalse;
}

type AdminconversationsSetConversationPrefsdefaultResponseErrorEnum = 'feature_not_enabled' | 'not_an_admin' | 'channel_not_found' | 'channel_type_not_supported' | 'restricted_action' | 'missing_scope' | 'could_not_set_channel_pref' | 'default_org_wide_channel'


