/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AdminApi,
  AdminAppsApi,
  AdminAppsApprovedApi,
  AdminAppsRequestsApi,
  AdminAppsRestrictedApi,
  AdminConversationsApi,
  AdminConversationsEkmApi,
  AdminConversationsRestrictAccessApi,
  AdminEmojiApi,
  AdminInviteRequestsApi,
  AdminInviteRequestsApprovedApi,
  AdminInviteRequestsDeniedApi,
  AdminTeamsApi,
  AdminTeamsAdminsApi,
  AdminTeamsOwnersApi,
  AdminTeamsSettingsApi,
  AdminUsergroupsApi,
  AdminUsersApi,
  AdminUsersSessionApi,
  ApiApi,
  AppsApi,
  AppsEventAuthorizationsApi,
  AppsPermissionsApi,
  AppsPermissionsResourcesApi,
  AppsPermissionsScopesApi,
  AppsPermissionsUsersApi,
  AuthApi,
  BotsApi,
  CallsApi,
  CallsParticipantsApi,
  ChatApi,
  ChatScheduledMessagesApi,
  ConversationsApi,
  DialogApi,
  DndApi,
  EmojiApi,
  FilesApi,
  FilesCommentsApi,
  FilesRemoteApi,
  MigrationApi,
  OauthApi,
  OauthV2Api,
  PinsApi,
  ReactionsApi,
  RemindersApi,
  RtmApi,
  SearchApi,
  StarsApi,
  TeamApi,
  TeamProfileApi,
  UsergroupsApi,
  UsergroupsUsersApi,
  UsersApi,
  UsersProfileApi,
  ViewsApi,
  WorkflowsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { SlackWebCustom } from "./client-custom";

export class SlackWeb extends SlackWebCustom {
  readonly admin: AdminApi;
  readonly adminApps: AdminAppsApi;
  readonly adminAppsApproved: AdminAppsApprovedApi;
  readonly adminAppsRequests: AdminAppsRequestsApi;
  readonly adminAppsRestricted: AdminAppsRestrictedApi;
  readonly adminConversations: AdminConversationsApi;
  readonly adminConversationsEkm: AdminConversationsEkmApi;
  readonly adminConversationsRestrictAccess: AdminConversationsRestrictAccessApi;
  readonly adminEmoji: AdminEmojiApi;
  readonly adminInviteRequests: AdminInviteRequestsApi;
  readonly adminInviteRequestsApproved: AdminInviteRequestsApprovedApi;
  readonly adminInviteRequestsDenied: AdminInviteRequestsDeniedApi;
  readonly adminTeams: AdminTeamsApi;
  readonly adminTeamsAdmins: AdminTeamsAdminsApi;
  readonly adminTeamsOwners: AdminTeamsOwnersApi;
  readonly adminTeamsSettings: AdminTeamsSettingsApi;
  readonly adminUsergroups: AdminUsergroupsApi;
  readonly adminUsers: AdminUsersApi;
  readonly adminUsersSession: AdminUsersSessionApi;
  readonly api: ApiApi;
  readonly apps: AppsApi;
  readonly appsEventAuthorizations: AppsEventAuthorizationsApi;
  readonly appsPermissions: AppsPermissionsApi;
  readonly appsPermissionsResources: AppsPermissionsResourcesApi;
  readonly appsPermissionsScopes: AppsPermissionsScopesApi;
  readonly appsPermissionsUsers: AppsPermissionsUsersApi;
  readonly auth: AuthApi;
  readonly bots: BotsApi;
  readonly calls: CallsApi;
  readonly callsParticipants: CallsParticipantsApi;
  readonly chat: ChatApi;
  readonly chatScheduledMessages: ChatScheduledMessagesApi;
  readonly conversations: ConversationsApi;
  readonly dialog: DialogApi;
  readonly dnd: DndApi;
  readonly emoji: EmojiApi;
  readonly files: FilesApi;
  readonly filesComments: FilesCommentsApi;
  readonly filesRemote: FilesRemoteApi;
  readonly migration: MigrationApi;
  readonly oauth: OauthApi;
  readonly oauthV2: OauthV2Api;
  readonly pins: PinsApi;
  readonly reactions: ReactionsApi;
  readonly reminders: RemindersApi;
  readonly rtm: RtmApi;
  readonly search: SearchApi;
  readonly stars: StarsApi;
  readonly team: TeamApi;
  readonly teamProfile: TeamProfileApi;
  readonly usergroups: UsergroupsApi;
  readonly usergroupsUsers: UsergroupsUsersApi;
  readonly users: UsersApi;
  readonly usersProfile: UsersProfileApi;
  readonly views: ViewsApi;
  readonly workflows: WorkflowsApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.admin = new AdminApi(configuration);
    this.adminApps = new AdminAppsApi(configuration);
    this.adminAppsApproved = new AdminAppsApprovedApi(configuration);
    this.adminAppsRequests = new AdminAppsRequestsApi(configuration);
    this.adminAppsRestricted = new AdminAppsRestrictedApi(configuration);
    this.adminConversations = new AdminConversationsApi(configuration);
    this.adminConversationsEkm = new AdminConversationsEkmApi(configuration);
    this.adminConversationsRestrictAccess = new AdminConversationsRestrictAccessApi(configuration);
    this.adminEmoji = new AdminEmojiApi(configuration);
    this.adminInviteRequests = new AdminInviteRequestsApi(configuration);
    this.adminInviteRequestsApproved = new AdminInviteRequestsApprovedApi(configuration);
    this.adminInviteRequestsDenied = new AdminInviteRequestsDeniedApi(configuration);
    this.adminTeams = new AdminTeamsApi(configuration);
    this.adminTeamsAdmins = new AdminTeamsAdminsApi(configuration);
    this.adminTeamsOwners = new AdminTeamsOwnersApi(configuration);
    this.adminTeamsSettings = new AdminTeamsSettingsApi(configuration);
    this.adminUsergroups = new AdminUsergroupsApi(configuration);
    this.adminUsers = new AdminUsersApi(configuration);
    this.adminUsersSession = new AdminUsersSessionApi(configuration);
    this.api = new ApiApi(configuration);
    this.apps = new AppsApi(configuration);
    this.appsEventAuthorizations = new AppsEventAuthorizationsApi(configuration);
    this.appsPermissions = new AppsPermissionsApi(configuration);
    this.appsPermissionsResources = new AppsPermissionsResourcesApi(configuration);
    this.appsPermissionsScopes = new AppsPermissionsScopesApi(configuration);
    this.appsPermissionsUsers = new AppsPermissionsUsersApi(configuration);
    this.auth = new AuthApi(configuration);
    this.bots = new BotsApi(configuration);
    this.calls = new CallsApi(configuration);
    this.callsParticipants = new CallsParticipantsApi(configuration);
    this.chat = new ChatApi(configuration);
    this.chatScheduledMessages = new ChatScheduledMessagesApi(configuration);
    this.conversations = new ConversationsApi(configuration);
    this.dialog = new DialogApi(configuration);
    this.dnd = new DndApi(configuration);
    this.emoji = new EmojiApi(configuration);
    this.files = new FilesApi(configuration);
    this.filesComments = new FilesCommentsApi(configuration);
    this.filesRemote = new FilesRemoteApi(configuration);
    this.migration = new MigrationApi(configuration);
    this.oauth = new OauthApi(configuration);
    this.oauthV2 = new OauthV2Api(configuration);
    this.pins = new PinsApi(configuration);
    this.reactions = new ReactionsApi(configuration);
    this.reminders = new RemindersApi(configuration);
    this.rtm = new RtmApi(configuration);
    this.search = new SearchApi(configuration);
    this.stars = new StarsApi(configuration);
    this.team = new TeamApi(configuration);
    this.teamProfile = new TeamProfileApi(configuration);
    this.usergroups = new UsergroupsApi(configuration);
    this.usergroupsUsers = new UsergroupsUsersApi(configuration);
    this.users = new UsersApi(configuration);
    this.usersProfile = new UsersProfileApi(configuration);
    this.views = new ViewsApi(configuration);
    this.workflows = new WorkflowsApi(configuration);
  }

}
