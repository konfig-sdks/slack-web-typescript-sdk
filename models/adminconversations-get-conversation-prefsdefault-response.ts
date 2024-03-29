/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from admin.conversations.getConversationPrefs
 * @export
 * @interface AdminconversationsGetConversationPrefsdefaultResponse
 */
export interface AdminconversationsGetConversationPrefsdefaultResponse {
    /**
     * 
     * @type {string}
     * @memberof AdminconversationsGetConversationPrefsdefaultResponse
     */
    'error': AdminconversationsGetConversationPrefsdefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof AdminconversationsGetConversationPrefsdefaultResponse
     */
    'ok': DefsOkFalse;
}

type AdminconversationsGetConversationPrefsdefaultResponseErrorEnum = 'feature_not_enabled' | 'not_an_admin' | 'not_an_enterprise' | 'restricted_action' | 'missing_scope' | 'channel_not_found' | 'channel_type_not_supported' | 'could_not_get_conversation_prefs'


