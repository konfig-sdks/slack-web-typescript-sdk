/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from conversations.setPurpose method
 * @export
 * @interface ConversationsSetPurposedefaultResponse
 */
export interface ConversationsSetPurposedefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof ConversationsSetPurposedefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsSetPurposedefaultResponse
     */
    'error': ConversationsSetPurposedefaultResponseErrorEnum;
    /**
     * 
     * @type {string}
     * @memberof ConversationsSetPurposedefaultResponse
     */
    'needed'?: string;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof ConversationsSetPurposedefaultResponse
     */
    'ok': DefsOkFalse;
    /**
     * 
     * @type {string}
     * @memberof ConversationsSetPurposedefaultResponse
     */
    'provided'?: string;
}

type ConversationsSetPurposedefaultResponseErrorEnum = 'method_not_supported_for_channel_type' | 'missing_scope' | 'channel_not_found' | 'not_in_channel' | 'is_archived' | 'too_long' | 'user_is_restricted' | 'not_authed' | 'invalid_auth' | 'account_inactive' | 'invalid_arg_name' | 'invalid_array_arg' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_type' | 'missing_post_type' | 'team_added_to_org' | 'invalid_json' | 'json_not_object' | 'request_timeout' | 'upgrade_required'

