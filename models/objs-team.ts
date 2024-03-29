/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ObjsExternalOrgMigrations } from './objs-external-org-migrations';
import { ObjsIcon } from './objs-icon';
import { ObjsPrimaryOwner } from './objs-primary-owner';
import { ObjsTeamDiscoverableInner } from './objs-team-discoverable-inner';
import { ObjsTeamSsoProvider } from './objs-team-sso-provider';

/**
 * 
 * @export
 * @interface ObjsTeam
 */
export interface ObjsTeam {
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'description'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeam
     */
    'archived'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'avatar_base_url'?: string;
    /**
     * 
     * @type {number}
     * @memberof ObjsTeam
     */
    'created'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjsTeam
     */
    'date_create'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeam
     */
    'deleted'?: boolean;
    /**
     * 
     * @type {Array<ObjsTeamDiscoverableInner>}
     * @memberof ObjsTeam
     */
    'discoverable'?: Array<ObjsTeamDiscoverableInner>;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'domain': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'email_domain': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'enterprise_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'enterprise_name'?: string;
    /**
     * 
     * @type {ObjsExternalOrgMigrations}
     * @memberof ObjsTeam
     */
    'external_org_migrations'?: ObjsExternalOrgMigrations;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeam
     */
    'has_compliance_export'?: boolean;
    /**
     * 
     * @type {ObjsIcon}
     * @memberof ObjsTeam
     */
    'icon': ObjsIcon;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeam
     */
    'is_assigned'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ObjsTeam
     */
    'is_enterprise'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeam
     */
    'is_over_storage_limit'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ObjsTeam
     */
    'limit_ts'?: number;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'locale'?: string;
    /**
     * 
     * @type {number}
     * @memberof ObjsTeam
     */
    'messages_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjsTeam
     */
    'msg_edit_window_mins'?: number;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'name': string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeam
     */
    'over_integrations_limit'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsTeam
     */
    'over_storage_limit'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'pay_prod_cur'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsTeam
     */
    'plan'?: ObjsTeamPlanEnum;
    /**
     * 
     * @type {ObjsPrimaryOwner}
     * @memberof ObjsTeam
     */
    'primary_owner'?: ObjsPrimaryOwner;
    /**
     * 
     * @type {ObjsTeamSsoProvider}
     * @memberof ObjsTeam
     */
    'sso_provider'?: ObjsTeamSsoProvider;
}

type ObjsTeamPlanEnum = '' | 'std' | 'plus' | 'compliance' | 'enterprise'


