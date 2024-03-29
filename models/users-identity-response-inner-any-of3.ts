/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkTrue } from './defs-ok-true';
import { RtmConnectResponseSelf } from './rtm-connect-response-self';
import { UsersIdentityResponseInnerAnyOf3Team } from './users-identity-response-inner-any-of3-team';

/**
 * Schema for \'identity.basic,identity.team\' scopes
 * @export
 * @interface UsersIdentityResponseInnerAnyOf3
 */
export interface UsersIdentityResponseInnerAnyOf3 {
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof UsersIdentityResponseInnerAnyOf3
     */
    'ok': DefsOkTrue;
    /**
     * 
     * @type {UsersIdentityResponseInnerAnyOf3Team}
     * @memberof UsersIdentityResponseInnerAnyOf3
     */
    'team': UsersIdentityResponseInnerAnyOf3Team;
    /**
     * 
     * @type {RtmConnectResponseSelf}
     * @memberof UsersIdentityResponseInnerAnyOf3
     */
    'user': RtmConnectResponseSelf;
}

