/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkTrue } from './defs-ok-true';
import { ObjsReminder } from './objs-reminder';

/**
 * Schema for successful response from reminders.info method
 * @export
 * @interface RemindersInfoResponse
 */
export interface RemindersInfoResponse {
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof RemindersInfoResponse
     */
    'ok': DefsOkTrue;
    /**
     * 
     * @type {ObjsReminder}
     * @memberof RemindersInfoResponse
     */
    'reminder': ObjsReminder;
}
