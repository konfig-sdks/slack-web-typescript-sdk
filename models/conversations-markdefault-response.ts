/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from conversations.mark method
 * @export
 * @interface ConversationsMarkdefaultResponse
 */
export interface ConversationsMarkdefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof ConversationsMarkdefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsMarkdefaultResponse
     */
    'error': ConversationsMarkdefaultResponseErrorEnum;
    /**
     * 
     * @type {string}
     * @memberof ConversationsMarkdefaultResponse
     */
    'needed'?: string;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof ConversationsMarkdefaultResponse
     */
    'ok': DefsOkFalse;
    /**
     * 
     * @type {string}
     * @memberof ConversationsMarkdefaultResponse
     */
    'provided'?: string;
}

type ConversationsMarkdefaultResponseErrorEnum = 'method_not_supported_for_channel_type' | 'missing_scope' | 'channel_not_found' | 'invalid_timestamp' | 'not_in_channel' | 'not_authed' | 'invalid_auth' | 'account_inactive' | 'invalid_arg_name' | 'invalid_array_arg' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_type' | 'missing_post_type' | 'invalid_json' | 'json_not_object' | 'request_timeout' | 'upgrade_required' | 'not_allowed_token_type'

