/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from admin.conversations.create
 * @export
 * @interface AdminconversationsCreateChannelBasedConversationdefaultResponse
 */
export interface AdminconversationsCreateChannelBasedConversationdefaultResponse {
    /**
     * 
     * @type {string}
     * @memberof AdminconversationsCreateChannelBasedConversationdefaultResponse
     */
    'error': AdminconversationsCreateChannelBasedConversationdefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof AdminconversationsCreateChannelBasedConversationdefaultResponse
     */
    'ok': DefsOkFalse;
}

type AdminconversationsCreateChannelBasedConversationdefaultResponseErrorEnum = 'feature_not_enabled' | 'name_taken' | 'restricted_action' | 'team_not_found' | 'invalid_team' | 'invalid_name' | 'could_not_create_channel' | 'team_id_or_org_required'


