/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from conversations.open method
 * @export
 * @interface ConversationsOpendefaultResponse
 */
export interface ConversationsOpendefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof ConversationsOpendefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsOpendefaultResponse
     */
    'error': ConversationsOpendefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof ConversationsOpendefaultResponse
     */
    'ok': DefsOkFalse;
}

type ConversationsOpendefaultResponseErrorEnum = 'method_not_supported_for_channel_type' | 'user_not_found' | 'user_not_visible' | 'user_disabled' | 'users_list_not_supplied' | 'not_enough_users' | 'too_many_users' | 'invalid_user_combination' | 'not_authed' | 'invalid_auth' | 'account_inactive' | 'invalid_arg_name' | 'invalid_array_arg' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_type' | 'missing_post_type' | 'team_added_to_org' | 'invalid_json' | 'json_not_object' | 'request_timeout' | 'upgrade_required' | 'channel_not_found'

