/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from reactions.add method
 * @export
 * @interface ReactionsAdddefaultResponse
 */
export interface ReactionsAdddefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof ReactionsAdddefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReactionsAdddefaultResponse
     */
    'error': ReactionsAdddefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof ReactionsAdddefaultResponse
     */
    'ok': DefsOkFalse;
}

type ReactionsAdddefaultResponseErrorEnum = 'bad_timestamp' | 'message_not_found' | 'no_item_specified' | 'invalid_name' | 'already_reacted' | 'too_many_emoji' | 'too_many_reactions' | 'not_authed' | 'invalid_auth' | 'account_inactive' | 'no_permission' | 'invalid_arg_name' | 'invalid_array_arg' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_type' | 'missing_post_type' | 'team_added_to_org' | 'invalid_json' | 'json_not_object' | 'request_timeout' | 'upgrade_required'

