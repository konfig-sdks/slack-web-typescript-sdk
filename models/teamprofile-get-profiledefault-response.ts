/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from team.profile.get method
 * @export
 * @interface TeamprofileGetProfiledefaultResponse
 */
export interface TeamprofileGetProfiledefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof TeamprofileGetProfiledefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof TeamprofileGetProfiledefaultResponse
     */
    'error': TeamprofileGetProfiledefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof TeamprofileGetProfiledefaultResponse
     */
    'ok': DefsOkFalse;
}

type TeamprofileGetProfiledefaultResponseErrorEnum = 'not_authed' | 'invalid_auth' | 'account_inactive' | 'no_permission' | 'user_is_bot' | 'invalid_arg_name' | 'invalid_array_arg' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_typ' | 'missing_post_type' | 'team_added_to_org' | 'invalid_json' | 'json_not_object' | 'request_timeou' | 'upgrade_required'

