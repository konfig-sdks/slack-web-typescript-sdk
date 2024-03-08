/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ObjsTeamProfileFieldOptionsInner } from './objs-team-profile-field-options-inner';

/**
 * 
 * @export
 * @interface ObjsTeamProfileField
 */
export interface ObjsTeamProfileField {
    /**
     * 
     * @type {string}
     * @memberof ObjsTeamProfileField
     */
    'field_name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeamProfileField
     */
    'hint': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeamProfileField
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeamProfileField
     */
    'is_hidden'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeamProfileField
     */
    'label': string;
    /**
     * 
     * @type {Array<ObjsTeamProfileFieldOptionsInner>}
     * @memberof ObjsTeamProfileField
     */
    'options'?: Array<ObjsTeamProfileFieldOptionsInner>;
    /**
     * 
     * @type {number}
     * @memberof ObjsTeamProfileField
     */
    'ordering': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ObjsTeamProfileField
     */
    'possible_values'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeamProfileField
     */
    'type': ObjsTeamProfileFieldTypeEnum;
}

type ObjsTeamProfileFieldTypeEnum = 'text' | 'date' | 'link' | 'mailto' | 'options_list' | 'user'

