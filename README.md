<div align="left">

[![Visit Slack](./header.png)](https://slack.dev)

# [Slack](https://slack.dev)<a id="slack"></a>

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`slackweb.admin.addDefaultChannels`](#slackwebadminadddefaultchannels)
  * [`slackweb.admin.addEmoji`](#slackwebadminaddemoji)
  * [`slackweb.admin.addGroupIdpGroups`](#slackwebadminaddgroupidpgroups)
  * [`slackweb.admin.addWorkspaceUser`](#slackwebadminaddworkspaceuser)
  * [`slackweb.admin.aliasAdd`](#slackwebadminaliasadd)
  * [`slackweb.admin.approveAppInstallation`](#slackwebadminapproveappinstallation)
  * [`slackweb.admin.approveRequest`](#slackwebadminapproverequest)
  * [`slackweb.admin.archiveChannel`](#slackwebadminarchivechannel)
  * [`slackweb.admin.associateDefaultWorkspaces`](#slackwebadminassociatedefaultworkspaces)
  * [`slackweb.admin.convertToPrivateChannel`](#slackwebadminconverttoprivatechannel)
  * [`slackweb.admin.createChannelBasedConversation`](#slackwebadmincreatechannelbasedconversation)
  * [`slackweb.admin.createEnterpriseTeam`](#slackwebadmincreateenterpriseteam)
  * [`slackweb.admin.deleteChannel`](#slackwebadmindeletechannel)
  * [`slackweb.admin.denyRequest`](#slackwebadmindenyrequest)
  * [`slackweb.admin.disconnectSharedChannel`](#slackwebadmindisconnectsharedchannel)
  * [`slackweb.admin.getAll`](#slackwebadmingetall)
  * [`slackweb.admin.getConversationPrefs`](#slackwebadmingetconversationprefs)
  * [`slackweb.admin.getInfo`](#slackwebadmingetinfo)
  * [`slackweb.admin.getList`](#slackwebadmingetlist)
  * [`slackweb.admin.getTeamsList`](#slackwebadmingetteamslist)
  * [`slackweb.admin.invalidateSession`](#slackwebadmininvalidatesession)
  * [`slackweb.admin.inviteUserToChannel`](#slackwebadmininviteusertochannel)
  * [`slackweb.admin.inviteUserToWorkspace`](#slackwebadmininviteusertoworkspace)
  * [`slackweb.admin.list`](#slackwebadminlist)
  * [`slackweb.admin.listAll`](#slackwebadminlistall)
  * [`slackweb.admin.listChannelsGet`](#slackwebadminlistchannelsget)
  * [`slackweb.admin.listEnterpriseEmoji`](#slackwebadminlistenterpriseemoji)
  * [`slackweb.admin.listGroups`](#slackwebadminlistgroups)
  * [`slackweb.admin.listOriginalConnectedChannelInfo`](#slackwebadminlistoriginalconnectedchannelinfo)
  * [`slackweb.admin.listOwners`](#slackwebadminlistowners)
  * [`slackweb.admin.listPendingWorkspaceInviteRequests`](#slackwebadminlistpendingworkspaceinviterequests)
  * [`slackweb.admin.listWorkspaceUsers`](#slackwebadminlistworkspaceusers)
  * [`slackweb.admin.list_0`](#slackwebadminlist_0)
  * [`slackweb.admin.list_1`](#slackwebadminlist_1)
  * [`slackweb.admin.list_2`](#slackwebadminlist_2)
  * [`slackweb.admin.removeChannels`](#slackwebadminremovechannels)
  * [`slackweb.admin.removeEnterpriseEmoji`](#slackwebadminremoveenterpriseemoji)
  * [`slackweb.admin.removeIdpGroup`](#slackwebadminremoveidpgroup)
  * [`slackweb.admin.removeUserFromWorkspace`](#slackwebadminremoveuserfromworkspace)
  * [`slackweb.admin.renameChannel`](#slackwebadminrenamechannel)
  * [`slackweb.admin.renameEmoji`](#slackwebadminrenameemoji)
  * [`slackweb.admin.resetSessions`](#slackwebadminresetsessions)
  * [`slackweb.admin.restrictApp`](#slackwebadminrestrictapp)
  * [`slackweb.admin.searchChannels`](#slackwebadminsearchchannels)
  * [`slackweb.admin.setAdminUser`](#slackwebadminsetadminuser)
  * [`slackweb.admin.setConversationPrefs`](#slackwebadminsetconversationprefs)
  * [`slackweb.admin.setDefaultChannels`](#slackwebadminsetdefaultchannels)
  * [`slackweb.admin.setDescription`](#slackwebadminsetdescription)
  * [`slackweb.admin.setDiscoverabilityOfWorkspace`](#slackwebadminsetdiscoverabilityofworkspace)
  * [`slackweb.admin.setExpirationGuest`](#slackwebadminsetexpirationguest)
  * [`slackweb.admin.setIcon`](#slackwebadminseticon)
  * [`slackweb.admin.setName`](#slackwebadminsetname)
  * [`slackweb.admin.setRegularUser`](#slackwebadminsetregularuser)
  * [`slackweb.admin.setTeamsWorkspaceConnection`](#slackwebadminsetteamsworkspaceconnection)
  * [`slackweb.admin.setWorkspaceOwner`](#slackwebadminsetworkspaceowner)
  * [`slackweb.admin.unarchiveChannel`](#slackwebadminunarchivechannel)
  * [`slackweb.adminApps.approveAppInstallation`](#slackwebadminappsapproveappinstallation)
  * [`slackweb.adminApps.restrictApp`](#slackwebadminappsrestrictapp)
  * [`slackweb.adminAppsApproved.list`](#slackwebadminappsapprovedlist)
  * [`slackweb.adminAppsRequests.list`](#slackwebadminappsrequestslist)
  * [`slackweb.adminAppsRestricted.getList`](#slackwebadminappsrestrictedgetlist)
  * [`slackweb.adminConversations.archiveChannel`](#slackwebadminconversationsarchivechannel)
  * [`slackweb.adminConversations.convertToPrivateChannel`](#slackwebadminconversationsconverttoprivatechannel)
  * [`slackweb.adminConversations.createChannelBasedConversation`](#slackwebadminconversationscreatechannelbasedconversation)
  * [`slackweb.adminConversations.deleteChannel`](#slackwebadminconversationsdeletechannel)
  * [`slackweb.adminConversations.disconnectSharedChannel`](#slackwebadminconversationsdisconnectsharedchannel)
  * [`slackweb.adminConversations.getConversationPrefs`](#slackwebadminconversationsgetconversationprefs)
  * [`slackweb.adminConversations.getTeamsList`](#slackwebadminconversationsgetteamslist)
  * [`slackweb.adminConversations.inviteUserToChannel`](#slackwebadminconversationsinviteusertochannel)
  * [`slackweb.adminConversations.renameChannel`](#slackwebadminconversationsrenamechannel)
  * [`slackweb.adminConversations.searchChannels`](#slackwebadminconversationssearchchannels)
  * [`slackweb.adminConversations.setConversationPrefs`](#slackwebadminconversationssetconversationprefs)
  * [`slackweb.adminConversations.setTeamsWorkspaceConnection`](#slackwebadminconversationssetteamsworkspaceconnection)
  * [`slackweb.adminConversations.unarchiveChannel`](#slackwebadminconversationsunarchivechannel)
  * [`slackweb.adminConversationsEkm.listOriginalConnectedChannelInfo`](#slackwebadminconversationsekmlistoriginalconnectedchannelinfo)
  * [`slackweb.adminConversationsRestrictAccess.addGroupIdpGroups`](#slackwebadminconversationsrestrictaccessaddgroupidpgroups)
  * [`slackweb.adminConversationsRestrictAccess.listGroups`](#slackwebadminconversationsrestrictaccesslistgroups)
  * [`slackweb.adminConversationsRestrictAccess.removeIdpGroup`](#slackwebadminconversationsrestrictaccessremoveidpgroup)
  * [`slackweb.adminEmoji.addEmoji`](#slackwebadminemojiaddemoji)
  * [`slackweb.adminEmoji.aliasAdd`](#slackwebadminemojialiasadd)
  * [`slackweb.adminEmoji.listEnterpriseEmoji`](#slackwebadminemojilistenterpriseemoji)
  * [`slackweb.adminEmoji.removeEnterpriseEmoji`](#slackwebadminemojiremoveenterpriseemoji)
  * [`slackweb.adminEmoji.renameEmoji`](#slackwebadminemojirenameemoji)
  * [`slackweb.adminInviteRequests.approveRequest`](#slackwebadmininviterequestsapproverequest)
  * [`slackweb.adminInviteRequests.denyRequest`](#slackwebadmininviterequestsdenyrequest)
  * [`slackweb.adminInviteRequests.listPendingWorkspaceInviteRequests`](#slackwebadmininviterequestslistpendingworkspaceinviterequests)
  * [`slackweb.adminInviteRequestsApproved.list`](#slackwebadmininviterequestsapprovedlist)
  * [`slackweb.adminInviteRequestsDenied.list`](#slackwebadmininviterequestsdeniedlist)
  * [`slackweb.adminTeams.createEnterpriseTeam`](#slackwebadminteamscreateenterpriseteam)
  * [`slackweb.adminTeams.listAll`](#slackwebadminteamslistall)
  * [`slackweb.adminTeamsAdmins.getAll`](#slackwebadminteamsadminsgetall)
  * [`slackweb.adminTeamsOwners.listOwners`](#slackwebadminteamsownerslistowners)
  * [`slackweb.adminTeamsSettings.getInfo`](#slackwebadminteamssettingsgetinfo)
  * [`slackweb.adminTeamsSettings.setDefaultChannels`](#slackwebadminteamssettingssetdefaultchannels)
  * [`slackweb.adminTeamsSettings.setDescription`](#slackwebadminteamssettingssetdescription)
  * [`slackweb.adminTeamsSettings.setDiscoverabilityOfWorkspace`](#slackwebadminteamssettingssetdiscoverabilityofworkspace)
  * [`slackweb.adminTeamsSettings.setIcon`](#slackwebadminteamssettingsseticon)
  * [`slackweb.adminTeamsSettings.setName`](#slackwebadminteamssettingssetname)
  * [`slackweb.adminUsergroups.addDefaultChannels`](#slackwebadminusergroupsadddefaultchannels)
  * [`slackweb.adminUsergroups.associateDefaultWorkspaces`](#slackwebadminusergroupsassociatedefaultworkspaces)
  * [`slackweb.adminUsergroups.listChannelsGet`](#slackwebadminusergroupslistchannelsget)
  * [`slackweb.adminUsergroups.removeChannels`](#slackwebadminusergroupsremovechannels)
  * [`slackweb.adminUsers.addWorkspaceUser`](#slackwebadminusersaddworkspaceuser)
  * [`slackweb.adminUsers.inviteUserToWorkspace`](#slackwebadminusersinviteusertoworkspace)
  * [`slackweb.adminUsers.listWorkspaceUsers`](#slackwebadminuserslistworkspaceusers)
  * [`slackweb.adminUsers.removeUserFromWorkspace`](#slackwebadminusersremoveuserfromworkspace)
  * [`slackweb.adminUsers.setAdminUser`](#slackwebadminuserssetadminuser)
  * [`slackweb.adminUsers.setExpirationGuest`](#slackwebadminuserssetexpirationguest)
  * [`slackweb.adminUsers.setRegularUser`](#slackwebadminuserssetregularuser)
  * [`slackweb.adminUsers.setWorkspaceOwner`](#slackwebadminuserssetworkspaceowner)
  * [`slackweb.adminUsersSession.invalidateSession`](#slackwebadminuserssessioninvalidatesession)
  * [`slackweb.adminUsersSession.resetSessions`](#slackwebadminuserssessionresetsessions)
  * [`slackweb.api.test`](#slackwebapitest)
  * [`slackweb.apps.additionalScopesRequest`](#slackwebappsadditionalscopesrequest)
  * [`slackweb.apps.getList`](#slackwebappsgetlist)
  * [`slackweb.apps.getList_0`](#slackwebappsgetlist_0)
  * [`slackweb.apps.getResourcesList`](#slackwebappsgetresourceslist)
  * [`slackweb.apps.listPermissions`](#slackwebappslistpermissions)
  * [`slackweb.apps.listUserGrants`](#slackwebappslistusergrants)
  * [`slackweb.apps.requestModal`](#slackwebappsrequestmodal)
  * [`slackweb.apps.uninstall`](#slackwebappsuninstall)
  * [`slackweb.appsEventAuthorizations.getList`](#slackwebappseventauthorizationsgetlist)
  * [`slackweb.appsPermissions.additionalScopesRequest`](#slackwebappspermissionsadditionalscopesrequest)
  * [`slackweb.appsPermissions.listPermissions`](#slackwebappspermissionslistpermissions)
  * [`slackweb.appsPermissionsResources.getResourcesList`](#slackwebappspermissionsresourcesgetresourceslist)
  * [`slackweb.appsPermissionsScopes.getList`](#slackwebappspermissionsscopesgetlist)
  * [`slackweb.appsPermissionsUsers.listUserGrants`](#slackwebappspermissionsuserslistusergrants)
  * [`slackweb.appsPermissionsUsers.requestModal`](#slackwebappspermissionsusersrequestmodal)
  * [`slackweb.auth.revoke`](#slackwebauthrevoke)
  * [`slackweb.auth.test`](#slackwebauthtest)
  * [`slackweb.bots.info`](#slackwebbotsinfo)
  * [`slackweb.calls.add`](#slackwebcallsadd)
  * [`slackweb.calls.addNewParticipant`](#slackwebcallsaddnewparticipant)
  * [`slackweb.calls.end`](#slackwebcallsend)
  * [`slackweb.calls.info`](#slackwebcallsinfo)
  * [`slackweb.calls.registerRemoved`](#slackwebcallsregisterremoved)
  * [`slackweb.calls.update`](#slackwebcallsupdate)
  * [`slackweb.callsParticipants.addNewParticipant`](#slackwebcallsparticipantsaddnewparticipant)
  * [`slackweb.callsParticipants.registerRemoved`](#slackwebcallsparticipantsregisterremoved)
  * [`slackweb.chat.delete`](#slackwebchatdelete)
  * [`slackweb.chat.deleteScheduledMessage`](#slackwebchatdeletescheduledmessage)
  * [`slackweb.chat.getPermalink`](#slackwebchatgetpermalink)
  * [`slackweb.chat.list`](#slackwebchatlist)
  * [`slackweb.chat.meMessage`](#slackwebchatmemessage)
  * [`slackweb.chat.postEphemeral`](#slackwebchatpostephemeral)
  * [`slackweb.chat.postMessage`](#slackwebchatpostmessage)
  * [`slackweb.chat.scheduleMessage`](#slackwebchatschedulemessage)
  * [`slackweb.chat.unfurl`](#slackwebchatunfurl)
  * [`slackweb.chat.update`](#slackwebchatupdate)
  * [`slackweb.chatScheduledMessages.list`](#slackwebchatscheduledmessageslist)
  * [`slackweb.conversations.archive`](#slackwebconversationsarchive)
  * [`slackweb.conversations.close`](#slackwebconversationsclose)
  * [`slackweb.conversations.create`](#slackwebconversationscreate)
  * [`slackweb.conversations.history`](#slackwebconversationshistory)
  * [`slackweb.conversations.info`](#slackwebconversationsinfo)
  * [`slackweb.conversations.invite`](#slackwebconversationsinvite)
  * [`slackweb.conversations.join`](#slackwebconversationsjoin)
  * [`slackweb.conversations.kick`](#slackwebconversationskick)
  * [`slackweb.conversations.leave`](#slackwebconversationsleave)
  * [`slackweb.conversations.list`](#slackwebconversationslist)
  * [`slackweb.conversations.mark`](#slackwebconversationsmark)
  * [`slackweb.conversations.members`](#slackwebconversationsmembers)
  * [`slackweb.conversations.open`](#slackwebconversationsopen)
  * [`slackweb.conversations.rename`](#slackwebconversationsrename)
  * [`slackweb.conversations.replies`](#slackwebconversationsreplies)
  * [`slackweb.conversations.setPurpose`](#slackwebconversationssetpurpose)
  * [`slackweb.conversations.setTopic`](#slackwebconversationssettopic)
  * [`slackweb.conversations.unarchive`](#slackwebconversationsunarchive)
  * [`slackweb.dialog.open`](#slackwebdialogopen)
  * [`slackweb.dnd.endDnd`](#slackwebdndenddnd)
  * [`slackweb.dnd.endSnooze`](#slackwebdndendsnooze)
  * [`slackweb.dnd.info`](#slackwebdndinfo)
  * [`slackweb.dnd.setSnooze`](#slackwebdndsetsnooze)
  * [`slackweb.dnd.teamInfo`](#slackwebdndteaminfo)
  * [`slackweb.emoji.list`](#slackwebemojilist)
  * [`slackweb.files.addFromRemote`](#slackwebfilesaddfromremote)
  * [`slackweb.files.delete`](#slackwebfilesdelete)
  * [`slackweb.files.deleteComment`](#slackwebfilesdeletecomment)
  * [`slackweb.files.deleteFile`](#slackwebfilesdeletefile)
  * [`slackweb.files.getInfo`](#slackwebfilesgetinfo)
  * [`slackweb.files.info`](#slackwebfilesinfo)
  * [`slackweb.files.list`](#slackwebfileslist)
  * [`slackweb.files.listRemoteFiles`](#slackwebfileslistremotefiles)
  * [`slackweb.files.revokePublicURL`](#slackwebfilesrevokepublicurl)
  * [`slackweb.files.shareRemoteFile`](#slackwebfilesshareremotefile)
  * [`slackweb.files.sharedPublicURL`](#slackwebfilessharedpublicurl)
  * [`slackweb.files.updateRemoteFile`](#slackwebfilesupdateremotefile)
  * [`slackweb.files.upload`](#slackwebfilesupload)
  * [`slackweb.filesComments.deleteComment`](#slackwebfilescommentsdeletecomment)
  * [`slackweb.filesRemote.addFromRemote`](#slackwebfilesremoteaddfromremote)
  * [`slackweb.filesRemote.deleteFile`](#slackwebfilesremotedeletefile)
  * [`slackweb.filesRemote.getInfo`](#slackwebfilesremotegetinfo)
  * [`slackweb.filesRemote.listRemoteFiles`](#slackwebfilesremotelistremotefiles)
  * [`slackweb.filesRemote.shareRemoteFile`](#slackwebfilesremoteshareremotefile)
  * [`slackweb.filesRemote.updateRemoteFile`](#slackwebfilesremoteupdateremotefile)
  * [`slackweb.migration.exchange`](#slackwebmigrationexchange)
  * [`slackweb.oauth.access`](#slackweboauthaccess)
  * [`slackweb.oauth.exchangeToken`](#slackweboauthexchangetoken)
  * [`slackweb.oauth.token`](#slackweboauthtoken)
  * [`slackweb.oauthV2.exchangeToken`](#slackweboauthv2exchangetoken)
  * [`slackweb.pins.add`](#slackwebpinsadd)
  * [`slackweb.pins.list`](#slackwebpinslist)
  * [`slackweb.pins.remove`](#slackwebpinsremove)
  * [`slackweb.reactions.add`](#slackwebreactionsadd)
  * [`slackweb.reactions.get`](#slackwebreactionsget)
  * [`slackweb.reactions.list`](#slackwebreactionslist)
  * [`slackweb.reactions.remove`](#slackwebreactionsremove)
  * [`slackweb.reminders.add`](#slackwebremindersadd)
  * [`slackweb.reminders.complete`](#slackwebreminderscomplete)
  * [`slackweb.reminders.delete`](#slackwebremindersdelete)
  * [`slackweb.reminders.info`](#slackwebremindersinfo)
  * [`slackweb.reminders.list`](#slackwebreminderslist)
  * [`slackweb.rtm.connect`](#slackwebrtmconnect)
  * [`slackweb.search.messages`](#slackwebsearchmessages)
  * [`slackweb.stars.add`](#slackwebstarsadd)
  * [`slackweb.stars.list`](#slackwebstarslist)
  * [`slackweb.stars.remove`](#slackwebstarsremove)
  * [`slackweb.team.accessLogs`](#slackwebteamaccesslogs)
  * [`slackweb.team.billableInfo`](#slackwebteambillableinfo)
  * [`slackweb.team.getProfile`](#slackwebteamgetprofile)
  * [`slackweb.team.info`](#slackwebteaminfo)
  * [`slackweb.team.integrationLogs`](#slackwebteamintegrationlogs)
  * [`slackweb.teamProfile.getProfile`](#slackwebteamprofilegetprofile)
  * [`slackweb.usergroups.create`](#slackwebusergroupscreate)
  * [`slackweb.usergroups.disable`](#slackwebusergroupsdisable)
  * [`slackweb.usergroups.enable`](#slackwebusergroupsenable)
  * [`slackweb.usergroups.list`](#slackwebusergroupslist)
  * [`slackweb.usergroups.listAllUsers`](#slackwebusergroupslistallusers)
  * [`slackweb.usergroups.update`](#slackwebusergroupsupdate)
  * [`slackweb.usergroups.updateList`](#slackwebusergroupsupdatelist)
  * [`slackweb.usergroupsUsers.listAllUsers`](#slackwebusergroupsuserslistallusers)
  * [`slackweb.usergroupsUsers.updateList`](#slackwebusergroupsusersupdatelist)
  * [`slackweb.users.conversations`](#slackwebusersconversations)
  * [`slackweb.users.deletePhoto`](#slackwebusersdeletephoto)
  * [`slackweb.users.getPresence`](#slackwebusersgetpresence)
  * [`slackweb.users.getProfileInfo`](#slackwebusersgetprofileinfo)
  * [`slackweb.users.identity`](#slackwebusersidentity)
  * [`slackweb.users.info`](#slackwebusersinfo)
  * [`slackweb.users.list`](#slackwebuserslist)
  * [`slackweb.users.lookupByEmail`](#slackwebuserslookupbyemail)
  * [`slackweb.users.setActive`](#slackwebuserssetactive)
  * [`slackweb.users.setPhoto`](#slackwebuserssetphoto)
  * [`slackweb.users.setPresence`](#slackwebuserssetpresence)
  * [`slackweb.users.setProfileInfo`](#slackwebuserssetprofileinfo)
  * [`slackweb.usersProfile.getProfileInfo`](#slackwebusersprofilegetprofileinfo)
  * [`slackweb.usersProfile.setProfileInfo`](#slackwebusersprofilesetprofileinfo)
  * [`slackweb.views.open`](#slackwebviewsopen)
  * [`slackweb.views.publish`](#slackwebviewspublish)
  * [`slackweb.views.push`](#slackwebviewspush)
  * [`slackweb.views.update`](#slackwebviewsupdate)
  * [`slackweb.workflows.stepCompleted`](#slackwebworkflowsstepcompleted)
  * [`slackweb.workflows.stepFailed`](#slackwebworkflowsstepfailed)
  * [`slackweb.workflows.updateStep`](#slackwebworkflowsupdatestep)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Slack&serviceName=Web&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { SlackWeb } from "slack-web-typescript-sdk";

const slackweb = new SlackWeb({
  // Defining the base path is optional and defaults to https://slack.com/api
  // basePath: "https://slack.com/api",
});

const addDefaultChannelsResponse = await slackweb.admin.addDefaultChannels({
  token: "token_example",
  channel_ids: "channel_ids_example",
  usergroup_id: "usergroup_id_example",
});

console.log(addDefaultChannelsResponse);
```

## Reference<a id="reference"></a>


### `slackweb.admin.addDefaultChannels`<a id="slackwebadminadddefaultchannels"></a>

Add one or more default channels to an IDP group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addDefaultChannelsResponse = await slackweb.admin.addDefaultChannels({
  token: "token_example",
  channel_ids: "channel_ids_example",
  usergroup_id: "usergroup_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.usergroups:write`

##### channelIds: `string`<a id="channelids-string"></a>

Comma separated string of channel IDs.

##### usergroupId: `string`<a id="usergroupid-string"></a>

ID of the IDP group to add default channels for.

##### teamId: `string`<a id="teamid-string"></a>

The workspace to add default channels in.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsAddDefaultChannelsResponse](./models/adminusergroups-add-default-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.addChannels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.addEmoji`<a id="slackwebadminaddemoji"></a>

Add an emoji.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmojiResponse = await slackweb.admin.addEmoji({
  name: "name_example",
  token: "token_example",
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### url: `string`<a id="url-string"></a>

The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiAddEmojiResponse](./models/adminemoji-add-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.addGroupIdpGroups`<a id="slackwebadminaddgroupidpgroups"></a>

Add an allowlist of IDP groups for accessing a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addGroupIdpGroupsResponse = await slackweb.admin.addGroupIdpGroups({
  channel_id: "channel_id_example",
  group_id: "group_id_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The channel to link this group to.

##### groupId: `string`<a id="groupid-string"></a>

The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### teamId: `string`<a id="teamid-string"></a>

The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsrestrictAccessAddGroupIdpGroupsResponse](./models/adminconversationsrestrict-access-add-group-idp-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.restrictAccess.addGroup` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.addWorkspaceUser`<a id="slackwebadminaddworkspaceuser"></a>

Add an Enterprise user to a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addWorkspaceUserResponse = await slackweb.admin.addWorkspaceUser({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to add to the workspace.

##### channelIds: `string`<a id="channelids-string"></a>

Comma separated values of channel IDs to add user in the new workspace.

##### isRestricted: `boolean`<a id="isrestricted-boolean"></a>

True if user should be added to the workspace as a guest.

##### isUltraRestricted: `boolean`<a id="isultrarestricted-boolean"></a>

True if user should be added to the workspace as a single-channel guest.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersAddWorkspaceUserResponse](./models/adminusers-add-workspace-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.assign` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.aliasAdd`<a id="slackwebadminaliasadd"></a>

Add an emoji alias.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const aliasAddResponse = await slackweb.admin.aliasAdd({
  alias_for: "alias_for_example",
  name: "name_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### aliasFor: `string`<a id="aliasfor-string"></a>

The alias of the emoji.

##### name: `string`<a id="name-string"></a>

The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiAliasAddResponse](./models/adminemoji-alias-add-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.addAlias` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.approveAppInstallation`<a id="slackwebadminapproveappinstallation"></a>

Approve an app for installation on a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveAppInstallationResponse =
  await slackweb.admin.approveAppInstallation({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:write`

##### appId: `string`<a id="appid-string"></a>

The id of the app to approve.

##### requestId: `string`<a id="requestid-string"></a>

The id of the request to approve.

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsApproveAppInstallationResponse](./models/adminapps-approve-app-installation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.approveRequest`<a id="slackwebadminapproverequest"></a>

Approve a workspace invite request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveRequestResponse = await slackweb.admin.approveRequest({
  token: "token_example",
  invite_request_id: "invite_request_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invite_request_id: `string`<a id="invite_request_id-string"></a>

ID of the request to invite.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:write`

##### team_id: `string`<a id="team_id-string"></a>

ID for the workspace where the invite request was made.

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsApproveRequestResponse](./models/admininvite-requests-approve-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.archiveChannel`<a id="slackwebadminarchivechannel"></a>

Archive a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const archiveChannelResponse = await slackweb.admin.archiveChannel({
  token: "token_example",
  channel_id: "channel_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to archive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsArchiveChannelResponse](./models/adminconversations-archive-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.archive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.associateDefaultWorkspaces`<a id="slackwebadminassociatedefaultworkspaces"></a>

Associate one or more default workspaces with an organization-wide IDP group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const associateDefaultWorkspacesResponse =
  await slackweb.admin.associateDefaultWorkspaces({
    token: "token_example",
    team_ids: "team_ids_example",
    usergroup_id: "usergroup_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### teamIds: `string`<a id="teamids-string"></a>

A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token.

##### usergroupId: `string`<a id="usergroupid-string"></a>

An encoded usergroup (IDP Group) ID.

##### autoProvision: `boolean`<a id="autoprovision-boolean"></a>

When `true`, this method automatically creates new workspace accounts for the IDP group members.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsAssociateDefaultWorkspacesResponse](./models/adminusergroups-associate-default-workspaces-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.addTeams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.convertToPrivateChannel`<a id="slackwebadminconverttoprivatechannel"></a>

Convert a public channel to a private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const convertToPrivateChannelResponse =
  await slackweb.admin.convertToPrivateChannel({
    token: "token_example",
    channel_id: "channel_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to convert to private.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsConvertToPrivateChannelResponse](./models/adminconversations-convert-to-private-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.convertToPrivate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.createChannelBasedConversation`<a id="slackwebadmincreatechannelbasedconversation"></a>

Create a public or private channel-based conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createChannelBasedConversationResponse =
  await slackweb.admin.createChannelBasedConversation({
    token: "token_example",
    is_private: true,
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### isPrivate: `boolean`<a id="isprivate-boolean"></a>

When `true`, creates a private channel instead of a public channel

##### name: `string`<a id="name-string"></a>

Name of the public or private channel to create.

##### description: `string`<a id="description-string"></a>

Description of the public or private channel to create.

##### orgWide: `boolean`<a id="orgwide-boolean"></a>

When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel

##### teamId: `string`<a id="teamid-string"></a>

The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsCreateChannelBasedConversationResponse](./models/adminconversations-create-channel-based-conversation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.create` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.createEnterpriseTeam`<a id="slackwebadmincreateenterpriseteam"></a>

Create an Enterprise team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEnterpriseTeamResponse = await slackweb.admin.createEnterpriseTeam({
  token: "token_example",
  team_domain: "team_domain_example",
  team_name: "team_name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### teamDomain: `string`<a id="teamdomain-string"></a>

Team domain (for example, slacksoftballteam).

##### teamName: `string`<a id="teamname-string"></a>

Team name (for example, Slack Softball Team).

##### teamDescription: `string`<a id="teamdescription-string"></a>

Description for the team.

##### teamDiscoverability: `string`<a id="teamdiscoverability-string"></a>

Who can join the team. A team\\\'s discoverability can be `open`, `closed`, `invite_only`, or `unlisted`.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsCreateEnterpriseTeamResponse](./models/adminteams-create-enterprise-team-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.create` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.deleteChannel`<a id="slackwebadmindeletechannel"></a>

Delete a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChannelResponse = await slackweb.admin.deleteChannel({
  token: "token_example",
  channel_id: "channel_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to delete.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsDeleteChannelResponse](./models/adminconversations-delete-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.denyRequest`<a id="slackwebadmindenyrequest"></a>

Deny a workspace invite request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const denyRequestResponse = await slackweb.admin.denyRequest({
  token: "token_example",
  invite_request_id: "invite_request_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invite_request_id: `string`<a id="invite_request_id-string"></a>

ID of the request to invite.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:write`

##### team_id: `string`<a id="team_id-string"></a>

ID for the workspace where the invite request was made.

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsDenyRequestResponse](./models/admininvite-requests-deny-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.deny` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.disconnectSharedChannel`<a id="slackwebadmindisconnectsharedchannel"></a>

Disconnect a connected channel from one or more workspaces.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const disconnectSharedChannelResponse =
  await slackweb.admin.disconnectSharedChannel({
    token: "token_example",
    channel_id: "channel_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to be disconnected from some workspaces.

##### leavingTeamIds: `string`<a id="leavingteamids-string"></a>

The team to be removed from the channel. Currently only a single team id can be specified.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsDisconnectSharedChannelResponse](./models/adminconversations-disconnect-shared-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.disconnectShared` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.getAll`<a id="slackwebadmingetall"></a>

List all of the admins on a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await slackweb.admin.getAll({
  token: "token_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### teamId: `string`<a id="teamid-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsadminsGetAllResponse](./models/adminteamsadmins-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.admins.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.getConversationPrefs`<a id="slackwebadmingetconversationprefs"></a>

Get conversation preferences for a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConversationPrefsResponse = await slackweb.admin.getConversationPrefs({
  token: "token_example",
  channelId: "channelId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelId: `string`<a id="channelid-string"></a>

The channel to get preferences for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsGetConversationPrefsResponse](./models/adminconversations-get-conversation-prefs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.getConversationPrefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.getInfo`<a id="slackwebadmingetinfo"></a>

Fetch information about settings in a workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await slackweb.admin.getInfo({
  token: "token_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsGetInfoResponse](./models/adminteamssettings-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.getList`<a id="slackwebadmingetlist"></a>

List restricted apps for an org or workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await slackweb.admin.getList({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### teamId: `string`<a id="teamid-string"></a>

##### enterpriseId: `string`<a id="enterpriseid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsrestrictedGetListResponse](./models/adminappsrestricted-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.restricted.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.getTeamsList`<a id="slackwebadmingetteamslist"></a>

Get all the workspaces a given public or private channel is connected to within this Enterprise org.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTeamsListResponse = await slackweb.admin.getTeamsList({
  token: "token_example",
  channelId: "channelId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelId: `string`<a id="channelid-string"></a>

The channel to determine connected workspaces within the organization for.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsGetTeamsListResponse](./models/adminconversations-get-teams-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.getTeams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.invalidateSession`<a id="slackwebadmininvalidatesession"></a>

Invalidate a single session for a user by session_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invalidateSessionResponse = await slackweb.admin.invalidateSession({
  token: "token_example",
  session_id: 1,
  team_id: "team_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### sessionId: `number`<a id="sessionid-number"></a>

##### teamId: `string`<a id="teamid-string"></a>

ID of the team that the session belongs to

#### 🔄 Return<a id="🔄-return"></a>

[AdminuserssessionInvalidateSessionResponse](./models/adminuserssession-invalidate-session-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.session.invalidate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.inviteUserToChannel`<a id="slackwebadmininviteusertochannel"></a>

Invite a user to a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteUserToChannelResponse = await slackweb.admin.inviteUserToChannel({
  token: "token_example",
  channel_id: "channel_id_example",
  user_ids: "user_ids_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel that the users will be invited to.

##### userIds: `string`<a id="userids-string"></a>

The users to invite.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsInviteUserToChannelResponse](./models/adminconversations-invite-user-to-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.invite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.inviteUserToWorkspace`<a id="slackwebadmininviteusertoworkspace"></a>

Invite a user to a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteUserToWorkspaceResponse =
  await slackweb.admin.inviteUserToWorkspace({
    token: "token_example",
    channel_ids: "channel_ids_example",
    email: "email_example",
    team_id: "team_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### channelIds: `string`<a id="channelids-string"></a>

A comma-separated list of `channel_id`s for this user to join. At least one channel is required.

##### email: `string`<a id="email-string"></a>

The email address of the person to invite.

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### customMessage: `string`<a id="custommessage-string"></a>

An optional message to send to the user in the invite email.

##### guestExpirationTs: `string`<a id="guestexpirationts-string"></a>

Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date.

##### isRestricted: `boolean`<a id="isrestricted-boolean"></a>

Is this user a multi-channel guest user? (default: false)

##### isUltraRestricted: `boolean`<a id="isultrarestricted-boolean"></a>

Is this user a single channel guest user? (default: false)

##### realName: `string`<a id="realname-string"></a>

Full name of the user.

##### resend: `boolean`<a id="resend-boolean"></a>

Allow this invite to be resent in the future if a user has not signed up yet. (default: false)

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersInviteUserToWorkspaceResponse](./models/adminusers-invite-user-to-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.invite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.list`<a id="slackwebadminlist"></a>

List approved apps for an org or workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.admin.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### teamId: `string`<a id="teamid-string"></a>

##### enterpriseId: `string`<a id="enterpriseid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsapprovedListResponse](./models/adminappsapproved-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.approved.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listAll`<a id="slackwebadminlistall"></a>

List all teams on an Enterprise organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await slackweb.admin.listAll({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 100 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsListAllResponse](./models/adminteams-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listChannelsGet`<a id="slackwebadminlistchannelsget"></a>

List the channels linked to an org-level IDP group (user group).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listChannelsGetResponse = await slackweb.admin.listChannelsGet({
  token: "token_example",
  usergroupId: "usergroupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.usergroups:read`

##### usergroupId: `string`<a id="usergroupid-string"></a>

ID of the IDP group to list default channels for.

##### teamId: `string`<a id="teamid-string"></a>

ID of the the workspace.

##### includeNumMembers: `boolean`<a id="includenummembers-boolean"></a>

Flag to include or exclude the count of members per channel.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsListChannelsGetResponse](./models/adminusergroups-list-channels-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.listChannels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listEnterpriseEmoji`<a id="slackwebadminlistenterpriseemoji"></a>

List emoji for an Enterprise Grid organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEnterpriseEmojiResponse = await slackweb.admin.listEnterpriseEmoji({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiListEnterpriseEmojiResponse](./models/adminemoji-list-enterprise-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listGroups`<a id="slackwebadminlistgroups"></a>

List all IDP Groups linked to a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGroupsResponse = await slackweb.admin.listGroups({
  token: "token_example",
  channelId: "channelId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelId: `string`<a id="channelid-string"></a>

##### teamId: `string`<a id="teamid-string"></a>

The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsrestrictAccessListGroupsResponse](./models/adminconversationsrestrict-access-list-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.restrictAccess.listGroups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listOriginalConnectedChannelInfo`<a id="slackwebadminlistoriginalconnectedchannelinfo"></a>

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOriginalConnectedChannelInfoResponse =
  await slackweb.admin.listOriginalConnectedChannelInfo({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelIds: `string`<a id="channelids-string"></a>

A comma-separated list of channels to filter to.

##### teamIds: `string`<a id="teamids-string"></a>

A comma-separated list of the workspaces to which the channels you would like returned belong.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsekmListOriginalConnectedChannelInfoResponse](./models/adminconversationsekm-list-original-connected-channel-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.ekm.listOriginalConnectedChannelInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listOwners`<a id="slackwebadminlistowners"></a>

List all of the owners on a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOwnersResponse = await slackweb.admin.listOwners({
  token: "token_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### teamId: `string`<a id="teamid-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsownersListOwnersResponse](./models/adminteamsowners-list-owners-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.owners.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listPendingWorkspaceInviteRequests`<a id="slackwebadminlistpendingworkspaceinviterequests"></a>

List all pending workspace invite requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPendingWorkspaceInviteRequestsResponse =
  await slackweb.admin.listPendingWorkspaceInviteRequests({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:read`

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace where the invite requests were made.

##### cursor: `string`<a id="cursor-string"></a>

Value of the `next_cursor` field sent as part of the previous API response

##### limit: `number`<a id="limit-number"></a>

The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsListPendingWorkspaceInviteRequestsResponse](./models/admininvite-requests-list-pending-workspace-invite-requests-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.listWorkspaceUsers`<a id="slackwebadminlistworkspaceusers"></a>

List users on a workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorkspaceUsersResponse = await slackweb.admin.listWorkspaceUsers({
  token: "token_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:read`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

##### limit: `number`<a id="limit-number"></a>

Limit for how many users to be retrieved per page

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersListWorkspaceUsersResponse](./models/adminusers-list-workspace-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.list_0`<a id="slackwebadminlist_0"></a>

List app requests for a team/workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const list_0Response = await slackweb.admin.list_0({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsrequestsListResponse](./models/adminappsrequests-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.requests.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.list_1`<a id="slackwebadminlist_1"></a>

List all approved workspace invite requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const list_1Response = await slackweb.admin.list_1({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:read`

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace where the invite requests were made.

##### cursor: `string`<a id="cursor-string"></a>

Value of the `next_cursor` field sent as part of the previous API response

##### limit: `number`<a id="limit-number"></a>

The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsapprovedListResponse](./models/admininvite-requestsapproved-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.approved.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.list_2`<a id="slackwebadminlist_2"></a>

List all denied workspace invite requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const list_2Response = await slackweb.admin.list_2({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:read`

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace where the invite requests were made.

##### cursor: `string`<a id="cursor-string"></a>

Value of the `next_cursor` field sent as part of the previous api response

##### limit: `number`<a id="limit-number"></a>

The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsdeniedListResponse](./models/admininvite-requestsdenied-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.denied.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.removeChannels`<a id="slackwebadminremovechannels"></a>

Remove one or more default channels from an org-level IDP group (user group).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeChannelsResponse = await slackweb.admin.removeChannels({
  token: "token_example",
  channel_ids: "channel_ids_example",
  usergroup_id: "usergroup_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.usergroups:write`

##### channelIds: `string`<a id="channelids-string"></a>

Comma-separated string of channel IDs

##### usergroupId: `string`<a id="usergroupid-string"></a>

ID of the IDP Group

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsRemoveChannelsResponse](./models/adminusergroups-remove-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.removeChannels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.removeEnterpriseEmoji`<a id="slackwebadminremoveenterpriseemoji"></a>

Remove an emoji across an Enterprise Grid organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEnterpriseEmojiResponse =
  await slackweb.admin.removeEnterpriseEmoji({
    name: "name_example",
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiRemoveEnterpriseEmojiResponse](./models/adminemoji-remove-enterprise-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.removeIdpGroup`<a id="slackwebadminremoveidpgroup"></a>

Remove a linked IDP group linked from a private channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeIdpGroupResponse = await slackweb.admin.removeIdpGroup({
  channel_id: "channel_id_example",
  group_id: "group_id_example",
  team_id: "team_id_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The channel to remove the linked group from.

##### groupId: `string`<a id="groupid-string"></a>

The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel.

##### teamId: `string`<a id="teamid-string"></a>

The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsrestrictAccessRemoveIdpGroupResponse](./models/adminconversationsrestrict-access-remove-idp-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.restrictAccess.removeGroup` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.removeUserFromWorkspace`<a id="slackwebadminremoveuserfromworkspace"></a>

Remove a user from a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserFromWorkspaceResponse =
  await slackweb.admin.removeUserFromWorkspace({
    token: "token_example",
    team_id: "team_id_example",
    user_id: "user_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to remove.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersRemoveUserFromWorkspaceResponse](./models/adminusers-remove-user-from-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.renameChannel`<a id="slackwebadminrenamechannel"></a>

Rename a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renameChannelResponse = await slackweb.admin.renameChannel({
  token: "token_example",
  channel_id: "channel_id_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to rename.

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsRenameChannelResponse](./models/adminconversations-rename-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.rename` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.renameEmoji`<a id="slackwebadminrenameemoji"></a>

Rename an emoji.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renameEmojiResponse = await slackweb.admin.renameEmoji({
  name: "name_example",
  new_name: "new_name_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### newName: `string`<a id="newname-string"></a>

The new name of the emoji.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiRenameEmojiResponse](./models/adminemoji-rename-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.rename` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.resetSessions`<a id="slackwebadminresetsessions"></a>

Wipes all valid sessions on all devices for a given user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resetSessionsResponse = await slackweb.admin.resetSessions({
  token: "token_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### userId: `string`<a id="userid-string"></a>

The ID of the user to wipe sessions for

##### mobileOnly: `boolean`<a id="mobileonly-boolean"></a>

Only expire mobile sessions (default: false)

##### webOnly: `boolean`<a id="webonly-boolean"></a>

Only expire web sessions (default: false)

#### 🔄 Return<a id="🔄-return"></a>

[AdminuserssessionResetSessionsResponse](./models/adminuserssession-reset-sessions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.session.reset` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.restrictApp`<a id="slackwebadminrestrictapp"></a>

Restrict an app for installation on a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restrictAppResponse = await slackweb.admin.restrictApp({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:write`

##### appId: `string`<a id="appid-string"></a>

The id of the app to restrict.

##### requestId: `string`<a id="requestid-string"></a>

The id of the request to restrict.

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsRestrictAppResponse](./models/adminapps-restrict-app-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.restrict` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.searchChannels`<a id="slackwebadminsearchchannels"></a>

Search for public or private channels in an Enterprise organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchChannelsResponse = await slackweb.admin.searchChannels({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### teamIds: `string`<a id="teamids-string"></a>

Comma separated string of team IDs, signifying the workspaces to search through.

##### query: `string`<a id="query-string"></a>

Name of the the channel to query by.

##### limit: `number`<a id="limit-number"></a>

Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

##### searchChannelTypes: `string`<a id="searchchanneltypes-string"></a>

The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](https://slack.dev).

##### sort: `string`<a id="sort-string"></a>

Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted 

##### sortDir: `string`<a id="sortdir-string"></a>

Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a)

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsSearchChannelsResponse](./models/adminconversations-search-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setAdminUser`<a id="slackwebadminsetadminuser"></a>

Set an existing guest, regular user, or owner to be an admin user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setAdminUserResponse = await slackweb.admin.setAdminUser({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to designate as an admin.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetAdminUserResponse](./models/adminusers-set-admin-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setAdmin` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setConversationPrefs`<a id="slackwebadminsetconversationprefs"></a>

Set the posting permissions for a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setConversationPrefsResponse = await slackweb.admin.setConversationPrefs({
  token: "token_example",
  channel_id: "channel_id_example",
  prefs: "prefs_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to set the prefs for

##### prefs: `string`<a id="prefs-string"></a>

The prefs for this channel in a stringified JSON format.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsSetConversationPrefsResponse](./models/adminconversations-set-conversation-prefs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.setConversationPrefs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setDefaultChannels`<a id="slackwebadminsetdefaultchannels"></a>

Set the default channels of a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDefaultChannelsResponse = await slackweb.admin.setDefaultChannels({
  channel_ids: "channel_ids_example",
  team_id: "team_id_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelIds: `string`<a id="channelids-string"></a>

An array of channel IDs.

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the default channel for.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetDefaultChannelsResponse](./models/adminteamssettings-set-default-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setDefaultChannels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setDescription`<a id="slackwebadminsetdescription"></a>

Set the description of a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDescriptionResponse = await slackweb.admin.setDescription({
  token: "token_example",
  description: "description_example",
  team_id: "team_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### description: `string`<a id="description-string"></a>

The new description for the workspace.

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the description for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetDescriptionResponse](./models/adminteamssettings-set-description-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setDescription` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setDiscoverabilityOfWorkspace`<a id="slackwebadminsetdiscoverabilityofworkspace"></a>

An API method that allows admins to set the discoverability of a given workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDiscoverabilityOfWorkspaceResponse =
  await slackweb.admin.setDiscoverabilityOfWorkspace({
    token: "token_example",
    discoverability: "discoverability_example",
    team_id: "team_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### discoverability: `string`<a id="discoverability-string"></a>

This workspace\\\'s discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`.

##### teamId: `string`<a id="teamid-string"></a>

The ID of the workspace to set discoverability on.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetDiscoverabilityOfWorkspaceResponse](./models/adminteamssettings-set-discoverability-of-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setDiscoverability` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setExpirationGuest`<a id="slackwebadminsetexpirationguest"></a>

Set an expiration for a guest user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setExpirationGuestResponse = await slackweb.admin.setExpirationGuest({
  token: "token_example",
  expiration_ts: 1,
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### expirationTs: `number`<a id="expirationts-number"></a>

Timestamp when guest account should be disabled.

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to set an expiration for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetExpirationGuestResponse](./models/adminusers-set-expiration-guest-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setExpiration` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setIcon`<a id="slackwebadminseticon"></a>

Sets the icon of a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setIconResponse = await slackweb.admin.setIcon({
  image_url: "image_url_example",
  team_id: "team_id_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### imageUrl: `string`<a id="imageurl-string"></a>

Image URL for the icon

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the icon for.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetIconResponse](./models/adminteamssettings-set-icon-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setIcon` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setName`<a id="slackwebadminsetname"></a>

Set the name of a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setNameResponse = await slackweb.admin.setName({
  token: "token_example",
  name: "name_example",
  team_id: "team_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### name: `string`<a id="name-string"></a>

The new name of the workspace.

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the name for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetNameResponse](./models/adminteamssettings-set-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setName` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setRegularUser`<a id="slackwebadminsetregularuser"></a>

Set an existing guest user, admin user, or owner to be a regular user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setRegularUserResponse = await slackweb.admin.setRegularUser({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to designate as a regular user.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetRegularUserResponse](./models/adminusers-set-regular-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setRegular` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setTeamsWorkspaceConnection`<a id="slackwebadminsetteamsworkspaceconnection"></a>

Set the workspaces in an Enterprise grid org that connect to a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setTeamsWorkspaceConnectionResponse =
  await slackweb.admin.setTeamsWorkspaceConnection({
    token: "token_example",
    channel_id: "channel_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The encoded `channel_id` to add or remove to workspaces.

##### orgChannel: `boolean`<a id="orgchannel-boolean"></a>

True if channel has to be converted to an org channel

##### targetTeamIds: `string`<a id="targetteamids-string"></a>

A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide.

##### teamId: `string`<a id="teamid-string"></a>

The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsSetTeamsWorkspaceConnectionResponse](./models/adminconversations-set-teams-workspace-connection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.setTeams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.setWorkspaceOwner`<a id="slackwebadminsetworkspaceowner"></a>

Set an existing guest, regular user, or admin user to be a workspace owner.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setWorkspaceOwnerResponse = await slackweb.admin.setWorkspaceOwner({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

Id of the user to promote to owner.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetWorkspaceOwnerResponse](./models/adminusers-set-workspace-owner-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setOwner` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.admin.unarchiveChannel`<a id="slackwebadminunarchivechannel"></a>

Unarchive a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unarchiveChannelResponse = await slackweb.admin.unarchiveChannel({
  token: "token_example",
  channel_id: "channel_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to unarchive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsUnarchiveChannelResponse](./models/adminconversations-unarchive-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.unarchive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminApps.approveAppInstallation`<a id="slackwebadminappsapproveappinstallation"></a>

Approve an app for installation on a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveAppInstallationResponse =
  await slackweb.adminApps.approveAppInstallation({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:write`

##### appId: `string`<a id="appid-string"></a>

The id of the app to approve.

##### requestId: `string`<a id="requestid-string"></a>

The id of the request to approve.

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsApproveAppInstallationResponse](./models/adminapps-approve-app-installation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminApps.restrictApp`<a id="slackwebadminappsrestrictapp"></a>

Restrict an app for installation on a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restrictAppResponse = await slackweb.adminApps.restrictApp({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:write`

##### appId: `string`<a id="appid-string"></a>

The id of the app to restrict.

##### requestId: `string`<a id="requestid-string"></a>

The id of the request to restrict.

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsRestrictAppResponse](./models/adminapps-restrict-app-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.restrict` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminAppsApproved.list`<a id="slackwebadminappsapprovedlist"></a>

List approved apps for an org or workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.adminAppsApproved.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### teamId: `string`<a id="teamid-string"></a>

##### enterpriseId: `string`<a id="enterpriseid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsapprovedListResponse](./models/adminappsapproved-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.approved.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminAppsRequests.list`<a id="slackwebadminappsrequestslist"></a>

List app requests for a team/workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.adminAppsRequests.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsrequestsListResponse](./models/adminappsrequests-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.requests.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminAppsRestricted.getList`<a id="slackwebadminappsrestrictedgetlist"></a>

List restricted apps for an org or workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await slackweb.adminAppsRestricted.getList({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.apps:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### teamId: `string`<a id="teamid-string"></a>

##### enterpriseId: `string`<a id="enterpriseid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminappsrestrictedGetListResponse](./models/adminappsrestricted-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.apps.restricted.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.archiveChannel`<a id="slackwebadminconversationsarchivechannel"></a>

Archive a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const archiveChannelResponse = await slackweb.adminConversations.archiveChannel(
  {
    token: "token_example",
    channel_id: "channel_id_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to archive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsArchiveChannelResponse](./models/adminconversations-archive-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.archive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.convertToPrivateChannel`<a id="slackwebadminconversationsconverttoprivatechannel"></a>

Convert a public channel to a private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const convertToPrivateChannelResponse =
  await slackweb.adminConversations.convertToPrivateChannel({
    token: "token_example",
    channel_id: "channel_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to convert to private.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsConvertToPrivateChannelResponse](./models/adminconversations-convert-to-private-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.convertToPrivate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.createChannelBasedConversation`<a id="slackwebadminconversationscreatechannelbasedconversation"></a>

Create a public or private channel-based conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createChannelBasedConversationResponse =
  await slackweb.adminConversations.createChannelBasedConversation({
    token: "token_example",
    is_private: true,
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### isPrivate: `boolean`<a id="isprivate-boolean"></a>

When `true`, creates a private channel instead of a public channel

##### name: `string`<a id="name-string"></a>

Name of the public or private channel to create.

##### description: `string`<a id="description-string"></a>

Description of the public or private channel to create.

##### orgWide: `boolean`<a id="orgwide-boolean"></a>

When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel

##### teamId: `string`<a id="teamid-string"></a>

The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsCreateChannelBasedConversationResponse](./models/adminconversations-create-channel-based-conversation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.create` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.deleteChannel`<a id="slackwebadminconversationsdeletechannel"></a>

Delete a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChannelResponse = await slackweb.adminConversations.deleteChannel({
  token: "token_example",
  channel_id: "channel_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to delete.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsDeleteChannelResponse](./models/adminconversations-delete-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.disconnectSharedChannel`<a id="slackwebadminconversationsdisconnectsharedchannel"></a>

Disconnect a connected channel from one or more workspaces.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const disconnectSharedChannelResponse =
  await slackweb.adminConversations.disconnectSharedChannel({
    token: "token_example",
    channel_id: "channel_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to be disconnected from some workspaces.

##### leavingTeamIds: `string`<a id="leavingteamids-string"></a>

The team to be removed from the channel. Currently only a single team id can be specified.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsDisconnectSharedChannelResponse](./models/adminconversations-disconnect-shared-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.disconnectShared` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.getConversationPrefs`<a id="slackwebadminconversationsgetconversationprefs"></a>

Get conversation preferences for a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConversationPrefsResponse =
  await slackweb.adminConversations.getConversationPrefs({
    token: "token_example",
    channelId: "channelId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelId: `string`<a id="channelid-string"></a>

The channel to get preferences for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsGetConversationPrefsResponse](./models/adminconversations-get-conversation-prefs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.getConversationPrefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.getTeamsList`<a id="slackwebadminconversationsgetteamslist"></a>

Get all the workspaces a given public or private channel is connected to within this Enterprise org.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTeamsListResponse = await slackweb.adminConversations.getTeamsList({
  token: "token_example",
  channelId: "channelId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelId: `string`<a id="channelid-string"></a>

The channel to determine connected workspaces within the organization for.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsGetTeamsListResponse](./models/adminconversations-get-teams-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.getTeams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.inviteUserToChannel`<a id="slackwebadminconversationsinviteusertochannel"></a>

Invite a user to a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteUserToChannelResponse =
  await slackweb.adminConversations.inviteUserToChannel({
    token: "token_example",
    channel_id: "channel_id_example",
    user_ids: "user_ids_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel that the users will be invited to.

##### userIds: `string`<a id="userids-string"></a>

The users to invite.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsInviteUserToChannelResponse](./models/adminconversations-invite-user-to-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.invite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.renameChannel`<a id="slackwebadminconversationsrenamechannel"></a>

Rename a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renameChannelResponse = await slackweb.adminConversations.renameChannel({
  token: "token_example",
  channel_id: "channel_id_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to rename.

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsRenameChannelResponse](./models/adminconversations-rename-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.rename` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.searchChannels`<a id="slackwebadminconversationssearchchannels"></a>

Search for public or private channels in an Enterprise organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchChannelsResponse = await slackweb.adminConversations.searchChannels(
  {
    token: "token_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### teamIds: `string`<a id="teamids-string"></a>

Comma separated string of team IDs, signifying the workspaces to search through.

##### query: `string`<a id="query-string"></a>

Name of the the channel to query by.

##### limit: `number`<a id="limit-number"></a>

Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

##### searchChannelTypes: `string`<a id="searchchanneltypes-string"></a>

The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](https://slack.dev).

##### sort: `string`<a id="sort-string"></a>

Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted 

##### sortDir: `string`<a id="sortdir-string"></a>

Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a)

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsSearchChannelsResponse](./models/adminconversations-search-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.setConversationPrefs`<a id="slackwebadminconversationssetconversationprefs"></a>

Set the posting permissions for a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setConversationPrefsResponse =
  await slackweb.adminConversations.setConversationPrefs({
    token: "token_example",
    channel_id: "channel_id_example",
    prefs: "prefs_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to set the prefs for

##### prefs: `string`<a id="prefs-string"></a>

The prefs for this channel in a stringified JSON format.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsSetConversationPrefsResponse](./models/adminconversations-set-conversation-prefs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.setConversationPrefs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.setTeamsWorkspaceConnection`<a id="slackwebadminconversationssetteamsworkspaceconnection"></a>

Set the workspaces in an Enterprise grid org that connect to a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setTeamsWorkspaceConnectionResponse =
  await slackweb.adminConversations.setTeamsWorkspaceConnection({
    token: "token_example",
    channel_id: "channel_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The encoded `channel_id` to add or remove to workspaces.

##### orgChannel: `boolean`<a id="orgchannel-boolean"></a>

True if channel has to be converted to an org channel

##### targetTeamIds: `string`<a id="targetteamids-string"></a>

A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide.

##### teamId: `string`<a id="teamid-string"></a>

The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsSetTeamsWorkspaceConnectionResponse](./models/adminconversations-set-teams-workspace-connection-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.setTeams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversations.unarchiveChannel`<a id="slackwebadminconversationsunarchivechannel"></a>

Unarchive a public or private channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unarchiveChannelResponse =
  await slackweb.adminConversations.unarchiveChannel({
    token: "token_example",
    channel_id: "channel_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### channelId: `string`<a id="channelid-string"></a>

The channel to unarchive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsUnarchiveChannelResponse](./models/adminconversations-unarchive-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.unarchive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversationsEkm.listOriginalConnectedChannelInfo`<a id="slackwebadminconversationsekmlistoriginalconnectedchannelinfo"></a>

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOriginalConnectedChannelInfoResponse =
  await slackweb.adminConversationsEkm.listOriginalConnectedChannelInfo({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelIds: `string`<a id="channelids-string"></a>

A comma-separated list of channels to filter to.

##### teamIds: `string`<a id="teamids-string"></a>

A comma-separated list of the workspaces to which the channels you would like returned belong.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsekmListOriginalConnectedChannelInfoResponse](./models/adminconversationsekm-list-original-connected-channel-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.ekm.listOriginalConnectedChannelInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversationsRestrictAccess.addGroupIdpGroups`<a id="slackwebadminconversationsrestrictaccessaddgroupidpgroups"></a>

Add an allowlist of IDP groups for accessing a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addGroupIdpGroupsResponse =
  await slackweb.adminConversationsRestrictAccess.addGroupIdpGroups({
    channel_id: "channel_id_example",
    group_id: "group_id_example",
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The channel to link this group to.

##### groupId: `string`<a id="groupid-string"></a>

The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

##### teamId: `string`<a id="teamid-string"></a>

The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsrestrictAccessAddGroupIdpGroupsResponse](./models/adminconversationsrestrict-access-add-group-idp-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.restrictAccess.addGroup` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversationsRestrictAccess.listGroups`<a id="slackwebadminconversationsrestrictaccesslistgroups"></a>

List all IDP Groups linked to a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGroupsResponse =
  await slackweb.adminConversationsRestrictAccess.listGroups({
    token: "token_example",
    channelId: "channelId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:read`

##### channelId: `string`<a id="channelid-string"></a>

##### teamId: `string`<a id="teamid-string"></a>

The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsrestrictAccessListGroupsResponse](./models/adminconversationsrestrict-access-list-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.restrictAccess.listGroups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminConversationsRestrictAccess.removeIdpGroup`<a id="slackwebadminconversationsrestrictaccessremoveidpgroup"></a>

Remove a linked IDP group linked from a private channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeIdpGroupResponse =
  await slackweb.adminConversationsRestrictAccess.removeIdpGroup({
    channel_id: "channel_id_example",
    group_id: "group_id_example",
    team_id: "team_id_example",
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The channel to remove the linked group from.

##### groupId: `string`<a id="groupid-string"></a>

The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel.

##### teamId: `string`<a id="teamid-string"></a>

The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.conversations:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminconversationsrestrictAccessRemoveIdpGroupResponse](./models/adminconversationsrestrict-access-remove-idp-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.conversations.restrictAccess.removeGroup` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminEmoji.addEmoji`<a id="slackwebadminemojiaddemoji"></a>

Add an emoji.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmojiResponse = await slackweb.adminEmoji.addEmoji({
  name: "name_example",
  token: "token_example",
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### url: `string`<a id="url-string"></a>

The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiAddEmojiResponse](./models/adminemoji-add-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminEmoji.aliasAdd`<a id="slackwebadminemojialiasadd"></a>

Add an emoji alias.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const aliasAddResponse = await slackweb.adminEmoji.aliasAdd({
  alias_for: "alias_for_example",
  name: "name_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### aliasFor: `string`<a id="aliasfor-string"></a>

The alias of the emoji.

##### name: `string`<a id="name-string"></a>

The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiAliasAddResponse](./models/adminemoji-alias-add-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.addAlias` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminEmoji.listEnterpriseEmoji`<a id="slackwebadminemojilistenterpriseemoji"></a>

List emoji for an Enterprise Grid organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEnterpriseEmojiResponse =
  await slackweb.adminEmoji.listEnterpriseEmoji({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiListEnterpriseEmojiResponse](./models/adminemoji-list-enterprise-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminEmoji.removeEnterpriseEmoji`<a id="slackwebadminemojiremoveenterpriseemoji"></a>

Remove an emoji across an Enterprise Grid organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEnterpriseEmojiResponse =
  await slackweb.adminEmoji.removeEnterpriseEmoji({
    name: "name_example",
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiRemoveEnterpriseEmojiResponse](./models/adminemoji-remove-enterprise-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminEmoji.renameEmoji`<a id="slackwebadminemojirenameemoji"></a>

Rename an emoji.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renameEmojiResponse = await slackweb.adminEmoji.renameEmoji({
  name: "name_example",
  new_name: "new_name_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.

##### newName: `string`<a id="newname-string"></a>

The new name of the emoji.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminemojiRenameEmojiResponse](./models/adminemoji-rename-emoji-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.emoji.rename` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminInviteRequests.approveRequest`<a id="slackwebadmininviterequestsapproverequest"></a>

Approve a workspace invite request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveRequestResponse =
  await slackweb.adminInviteRequests.approveRequest({
    token: "token_example",
    invite_request_id: "invite_request_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invite_request_id: `string`<a id="invite_request_id-string"></a>

ID of the request to invite.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:write`

##### team_id: `string`<a id="team_id-string"></a>

ID for the workspace where the invite request was made.

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsApproveRequestResponse](./models/admininvite-requests-approve-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminInviteRequests.denyRequest`<a id="slackwebadmininviterequestsdenyrequest"></a>

Deny a workspace invite request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const denyRequestResponse = await slackweb.adminInviteRequests.denyRequest({
  token: "token_example",
  invite_request_id: "invite_request_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invite_request_id: `string`<a id="invite_request_id-string"></a>

ID of the request to invite.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:write`

##### team_id: `string`<a id="team_id-string"></a>

ID for the workspace where the invite request was made.

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsDenyRequestResponse](./models/admininvite-requests-deny-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.deny` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminInviteRequests.listPendingWorkspaceInviteRequests`<a id="slackwebadmininviterequestslistpendingworkspaceinviterequests"></a>

List all pending workspace invite requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPendingWorkspaceInviteRequestsResponse =
  await slackweb.adminInviteRequests.listPendingWorkspaceInviteRequests({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:read`

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace where the invite requests were made.

##### cursor: `string`<a id="cursor-string"></a>

Value of the `next_cursor` field sent as part of the previous API response

##### limit: `number`<a id="limit-number"></a>

The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsListPendingWorkspaceInviteRequestsResponse](./models/admininvite-requests-list-pending-workspace-invite-requests-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminInviteRequestsApproved.list`<a id="slackwebadmininviterequestsapprovedlist"></a>

List all approved workspace invite requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.adminInviteRequestsApproved.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:read`

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace where the invite requests were made.

##### cursor: `string`<a id="cursor-string"></a>

Value of the `next_cursor` field sent as part of the previous API response

##### limit: `number`<a id="limit-number"></a>

The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsapprovedListResponse](./models/admininvite-requestsapproved-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.approved.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminInviteRequestsDenied.list`<a id="slackwebadmininviterequestsdeniedlist"></a>

List all denied workspace invite requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.adminInviteRequestsDenied.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.invites:read`

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace where the invite requests were made.

##### cursor: `string`<a id="cursor-string"></a>

Value of the `next_cursor` field sent as part of the previous api response

##### limit: `number`<a id="limit-number"></a>

The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive

#### 🔄 Return<a id="🔄-return"></a>

[AdmininviteRequestsdeniedListResponse](./models/admininvite-requestsdenied-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.inviteRequests.denied.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeams.createEnterpriseTeam`<a id="slackwebadminteamscreateenterpriseteam"></a>

Create an Enterprise team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEnterpriseTeamResponse =
  await slackweb.adminTeams.createEnterpriseTeam({
    token: "token_example",
    team_domain: "team_domain_example",
    team_name: "team_name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### teamDomain: `string`<a id="teamdomain-string"></a>

Team domain (for example, slacksoftballteam).

##### teamName: `string`<a id="teamname-string"></a>

Team name (for example, Slack Softball Team).

##### teamDescription: `string`<a id="teamdescription-string"></a>

Description for the team.

##### teamDiscoverability: `string`<a id="teamdiscoverability-string"></a>

Who can join the team. A team\\\'s discoverability can be `open`, `closed`, `invite_only`, or `unlisted`.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsCreateEnterpriseTeamResponse](./models/adminteams-create-enterprise-team-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.create` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeams.listAll`<a id="slackwebadminteamslistall"></a>

List all teams on an Enterprise organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await slackweb.adminTeams.listAll({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 100 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsListAllResponse](./models/adminteams-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsAdmins.getAll`<a id="slackwebadminteamsadminsgetall"></a>

List all of the admins on a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await slackweb.adminTeamsAdmins.getAll({
  token: "token_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### teamId: `string`<a id="teamid-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsadminsGetAllResponse](./models/adminteamsadmins-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.admins.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsOwners.listOwners`<a id="slackwebadminteamsownerslistowners"></a>

List all of the owners on a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOwnersResponse = await slackweb.adminTeamsOwners.listOwners({
  token: "token_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### teamId: `string`<a id="teamid-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Must be between 1 - 1000 both inclusive.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamsownersListOwnersResponse](./models/adminteamsowners-list-owners-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.owners.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsSettings.getInfo`<a id="slackwebadminteamssettingsgetinfo"></a>

Fetch information about settings in a workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await slackweb.adminTeamsSettings.getInfo({
  token: "token_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:read`

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsGetInfoResponse](./models/adminteamssettings-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsSettings.setDefaultChannels`<a id="slackwebadminteamssettingssetdefaultchannels"></a>

Set the default channels of a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDefaultChannelsResponse =
  await slackweb.adminTeamsSettings.setDefaultChannels({
    channel_ids: "channel_ids_example",
    team_id: "team_id_example",
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelIds: `string`<a id="channelids-string"></a>

An array of channel IDs.

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the default channel for.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetDefaultChannelsResponse](./models/adminteamssettings-set-default-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setDefaultChannels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsSettings.setDescription`<a id="slackwebadminteamssettingssetdescription"></a>

Set the description of a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDescriptionResponse = await slackweb.adminTeamsSettings.setDescription(
  {
    token: "token_example",
    description: "description_example",
    team_id: "team_id_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### description: `string`<a id="description-string"></a>

The new description for the workspace.

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the description for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetDescriptionResponse](./models/adminteamssettings-set-description-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setDescription` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsSettings.setDiscoverabilityOfWorkspace`<a id="slackwebadminteamssettingssetdiscoverabilityofworkspace"></a>

An API method that allows admins to set the discoverability of a given workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDiscoverabilityOfWorkspaceResponse =
  await slackweb.adminTeamsSettings.setDiscoverabilityOfWorkspace({
    token: "token_example",
    discoverability: "discoverability_example",
    team_id: "team_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### discoverability: `string`<a id="discoverability-string"></a>

This workspace\\\'s discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`.

##### teamId: `string`<a id="teamid-string"></a>

The ID of the workspace to set discoverability on.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetDiscoverabilityOfWorkspaceResponse](./models/adminteamssettings-set-discoverability-of-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setDiscoverability` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsSettings.setIcon`<a id="slackwebadminteamssettingsseticon"></a>

Sets the icon of a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setIconResponse = await slackweb.adminTeamsSettings.setIcon({
  image_url: "image_url_example",
  team_id: "team_id_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### imageUrl: `string`<a id="imageurl-string"></a>

Image URL for the icon

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the icon for.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetIconResponse](./models/adminteamssettings-set-icon-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setIcon` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminTeamsSettings.setName`<a id="slackwebadminteamssettingssetname"></a>

Set the name of a given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setNameResponse = await slackweb.adminTeamsSettings.setName({
  token: "token_example",
  name: "name_example",
  team_id: "team_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### name: `string`<a id="name-string"></a>

The new name of the workspace.

##### teamId: `string`<a id="teamid-string"></a>

ID for the workspace to set the name for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminteamssettingsSetNameResponse](./models/adminteamssettings-set-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.teams.settings.setName` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsergroups.addDefaultChannels`<a id="slackwebadminusergroupsadddefaultchannels"></a>

Add one or more default channels to an IDP group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addDefaultChannelsResponse =
  await slackweb.adminUsergroups.addDefaultChannels({
    token: "token_example",
    channel_ids: "channel_ids_example",
    usergroup_id: "usergroup_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.usergroups:write`

##### channelIds: `string`<a id="channelids-string"></a>

Comma separated string of channel IDs.

##### usergroupId: `string`<a id="usergroupid-string"></a>

ID of the IDP group to add default channels for.

##### teamId: `string`<a id="teamid-string"></a>

The workspace to add default channels in.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsAddDefaultChannelsResponse](./models/adminusergroups-add-default-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.addChannels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsergroups.associateDefaultWorkspaces`<a id="slackwebadminusergroupsassociatedefaultworkspaces"></a>

Associate one or more default workspaces with an organization-wide IDP group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const associateDefaultWorkspacesResponse =
  await slackweb.adminUsergroups.associateDefaultWorkspaces({
    token: "token_example",
    team_ids: "team_ids_example",
    usergroup_id: "usergroup_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.teams:write`

##### teamIds: `string`<a id="teamids-string"></a>

A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token.

##### usergroupId: `string`<a id="usergroupid-string"></a>

An encoded usergroup (IDP Group) ID.

##### autoProvision: `boolean`<a id="autoprovision-boolean"></a>

When `true`, this method automatically creates new workspace accounts for the IDP group members.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsAssociateDefaultWorkspacesResponse](./models/adminusergroups-associate-default-workspaces-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.addTeams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsergroups.listChannelsGet`<a id="slackwebadminusergroupslistchannelsget"></a>

List the channels linked to an org-level IDP group (user group).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listChannelsGetResponse = await slackweb.adminUsergroups.listChannelsGet({
  token: "token_example",
  usergroupId: "usergroupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.usergroups:read`

##### usergroupId: `string`<a id="usergroupid-string"></a>

ID of the IDP group to list default channels for.

##### teamId: `string`<a id="teamid-string"></a>

ID of the the workspace.

##### includeNumMembers: `boolean`<a id="includenummembers-boolean"></a>

Flag to include or exclude the count of members per channel.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsListChannelsGetResponse](./models/adminusergroups-list-channels-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.listChannels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsergroups.removeChannels`<a id="slackwebadminusergroupsremovechannels"></a>

Remove one or more default channels from an org-level IDP group (user group).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeChannelsResponse = await slackweb.adminUsergroups.removeChannels({
  token: "token_example",
  channel_ids: "channel_ids_example",
  usergroup_id: "usergroup_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.usergroups:write`

##### channelIds: `string`<a id="channelids-string"></a>

Comma-separated string of channel IDs

##### usergroupId: `string`<a id="usergroupid-string"></a>

ID of the IDP Group

#### 🔄 Return<a id="🔄-return"></a>

[AdminusergroupsRemoveChannelsResponse](./models/adminusergroups-remove-channels-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.usergroups.removeChannels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.addWorkspaceUser`<a id="slackwebadminusersaddworkspaceuser"></a>

Add an Enterprise user to a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addWorkspaceUserResponse = await slackweb.adminUsers.addWorkspaceUser({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to add to the workspace.

##### channelIds: `string`<a id="channelids-string"></a>

Comma separated values of channel IDs to add user in the new workspace.

##### isRestricted: `boolean`<a id="isrestricted-boolean"></a>

True if user should be added to the workspace as a guest.

##### isUltraRestricted: `boolean`<a id="isultrarestricted-boolean"></a>

True if user should be added to the workspace as a single-channel guest.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersAddWorkspaceUserResponse](./models/adminusers-add-workspace-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.assign` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.inviteUserToWorkspace`<a id="slackwebadminusersinviteusertoworkspace"></a>

Invite a user to a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteUserToWorkspaceResponse =
  await slackweb.adminUsers.inviteUserToWorkspace({
    token: "token_example",
    channel_ids: "channel_ids_example",
    email: "email_example",
    team_id: "team_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### channelIds: `string`<a id="channelids-string"></a>

A comma-separated list of `channel_id`s for this user to join. At least one channel is required.

##### email: `string`<a id="email-string"></a>

The email address of the person to invite.

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### customMessage: `string`<a id="custommessage-string"></a>

An optional message to send to the user in the invite email.

##### guestExpirationTs: `string`<a id="guestexpirationts-string"></a>

Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date.

##### isRestricted: `boolean`<a id="isrestricted-boolean"></a>

Is this user a multi-channel guest user? (default: false)

##### isUltraRestricted: `boolean`<a id="isultrarestricted-boolean"></a>

Is this user a single channel guest user? (default: false)

##### realName: `string`<a id="realname-string"></a>

Full name of the user.

##### resend: `boolean`<a id="resend-boolean"></a>

Allow this invite to be resent in the future if a user has not signed up yet. (default: false)

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersInviteUserToWorkspaceResponse](./models/adminusers-invite-user-to-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.invite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.listWorkspaceUsers`<a id="slackwebadminuserslistworkspaceusers"></a>

List users on a workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorkspaceUsersResponse = await slackweb.adminUsers.listWorkspaceUsers(
  {
    token: "token_example",
    teamId: "teamId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:read`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### cursor: `string`<a id="cursor-string"></a>

Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.

##### limit: `number`<a id="limit-number"></a>

Limit for how many users to be retrieved per page

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersListWorkspaceUsersResponse](./models/adminusers-list-workspace-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.removeUserFromWorkspace`<a id="slackwebadminusersremoveuserfromworkspace"></a>

Remove a user from a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserFromWorkspaceResponse =
  await slackweb.adminUsers.removeUserFromWorkspace({
    token: "token_example",
    team_id: "team_id_example",
    user_id: "user_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to remove.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersRemoveUserFromWorkspaceResponse](./models/adminusers-remove-user-from-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.setAdminUser`<a id="slackwebadminuserssetadminuser"></a>

Set an existing guest, regular user, or owner to be an admin user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setAdminUserResponse = await slackweb.adminUsers.setAdminUser({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to designate as an admin.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetAdminUserResponse](./models/adminusers-set-admin-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setAdmin` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.setExpirationGuest`<a id="slackwebadminuserssetexpirationguest"></a>

Set an expiration for a guest user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setExpirationGuestResponse = await slackweb.adminUsers.setExpirationGuest(
  {
    token: "token_example",
    expiration_ts: 1,
    team_id: "team_id_example",
    user_id: "user_id_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### expirationTs: `number`<a id="expirationts-number"></a>

Timestamp when guest account should be disabled.

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to set an expiration for.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetExpirationGuestResponse](./models/adminusers-set-expiration-guest-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setExpiration` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.setRegularUser`<a id="slackwebadminuserssetregularuser"></a>

Set an existing guest user, admin user, or owner to be a regular user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setRegularUserResponse = await slackweb.adminUsers.setRegularUser({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

The ID of the user to designate as a regular user.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetRegularUserResponse](./models/adminusers-set-regular-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setRegular` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsers.setWorkspaceOwner`<a id="slackwebadminuserssetworkspaceowner"></a>

Set an existing guest, regular user, or admin user to be a workspace owner.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setWorkspaceOwnerResponse = await slackweb.adminUsers.setWorkspaceOwner({
  token: "token_example",
  team_id: "team_id_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### teamId: `string`<a id="teamid-string"></a>

The ID (`T1234`) of the workspace.

##### userId: `string`<a id="userid-string"></a>

Id of the user to promote to owner.

#### 🔄 Return<a id="🔄-return"></a>

[AdminusersSetWorkspaceOwnerResponse](./models/adminusers-set-workspace-owner-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.setOwner` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsersSession.invalidateSession`<a id="slackwebadminuserssessioninvalidatesession"></a>

Invalidate a single session for a user by session_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invalidateSessionResponse =
  await slackweb.adminUsersSession.invalidateSession({
    token: "token_example",
    session_id: 1,
    team_id: "team_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### sessionId: `number`<a id="sessionid-number"></a>

##### teamId: `string`<a id="teamid-string"></a>

ID of the team that the session belongs to

#### 🔄 Return<a id="🔄-return"></a>

[AdminuserssessionInvalidateSessionResponse](./models/adminuserssession-invalidate-session-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.session.invalidate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.adminUsersSession.resetSessions`<a id="slackwebadminuserssessionresetsessions"></a>

Wipes all valid sessions on all devices for a given user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resetSessionsResponse = await slackweb.adminUsersSession.resetSessions({
  token: "token_example",
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin.users:write`

##### userId: `string`<a id="userid-string"></a>

The ID of the user to wipe sessions for

##### mobileOnly: `boolean`<a id="mobileonly-boolean"></a>

Only expire mobile sessions (default: false)

##### webOnly: `boolean`<a id="webonly-boolean"></a>

Only expire web sessions (default: false)

#### 🔄 Return<a id="🔄-return"></a>

[AdminuserssessionResetSessionsResponse](./models/adminuserssession-reset-sessions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin.users.session.reset` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.api.test`<a id="slackwebapitest"></a>

Checks API calling code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const testResponse = await slackweb.api.test({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### error: `string`<a id="error-string"></a>

Error response to return

##### foo: `string`<a id="foo-string"></a>

example property to return

#### 🔄 Return<a id="🔄-return"></a>

[ApiTestResponse](./models/api-test-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api.test` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.additionalScopesRequest`<a id="slackwebappsadditionalscopesrequest"></a>

Allows an app to request additional scopes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const additionalScopesRequestResponse =
  await slackweb.apps.additionalScopesRequest({
    token: "token_example",
    scopes: "scopes_example",
    triggerId: "triggerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### scopes: `string`<a id="scopes-string"></a>

A comma separated list of scopes to request for

##### triggerId: `string`<a id="triggerid-string"></a>

Token used to trigger the permissions API

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsAdditionalScopesRequestResponse](./models/appspermissions-additional-scopes-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.request` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.getList`<a id="slackwebappsgetlist"></a>

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await slackweb.apps.getList({
  token: "token_example",
  eventContext: "eventContext_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `authorizations:read`

##### eventContext: `string`<a id="eventcontext-string"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AppseventauthorizationsGetListResponse](./models/appseventauthorizations-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.event.authorizations.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.getList_0`<a id="slackwebappsgetlist_0"></a>

Returns list of scopes this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getList_0Response = await slackweb.apps.getList_0({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsscopesGetListResponse](./models/appspermissionsscopes-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.scopes.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.getResourcesList`<a id="slackwebappsgetresourceslist"></a>

Returns list of resource grants this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResourcesListResponse = await slackweb.apps.getResourcesList({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsresourcesGetResourcesListResponse](./models/appspermissionsresources-get-resources-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.resources.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.listPermissions`<a id="slackwebappslistpermissions"></a>

Returns list of permissions this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPermissionsResponse = await slackweb.apps.listPermissions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsListPermissionsResponse](./models/appspermissions-list-permissions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.listUserGrants`<a id="slackwebappslistusergrants"></a>

Returns list of user grants and corresponding scopes this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserGrantsResponse = await slackweb.apps.listUserGrants({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsusersListUserGrantsResponse](./models/appspermissionsusers-list-user-grants-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.users.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.requestModal`<a id="slackwebappsrequestmodal"></a>

Enables an app to trigger a permissions modal to grant an app access to a user access scope.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestModalResponse = await slackweb.apps.requestModal({
  token: "token_example",
  scopes: "scopes_example",
  triggerId: "triggerId_example",
  user: "user_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### scopes: `string`<a id="scopes-string"></a>

A comma separated list of user scopes to request for

##### triggerId: `string`<a id="triggerid-string"></a>

Token used to trigger the request

##### user: `string`<a id="user-string"></a>

The user this scope is being requested for

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsusersRequestModalResponse](./models/appspermissionsusers-request-modal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.users.request` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.apps.uninstall`<a id="slackwebappsuninstall"></a>

Uninstalls your app from a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uninstallResponse = await slackweb.apps.uninstall({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### clientId: `string`<a id="clientid-string"></a>

Issued when you created your application.

##### clientSecret: `string`<a id="clientsecret-string"></a>

Issued when you created your application.

#### 🔄 Return<a id="🔄-return"></a>

[AppsUninstallResponse](./models/apps-uninstall-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.uninstall` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.appsEventAuthorizations.getList`<a id="slackwebappseventauthorizationsgetlist"></a>

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await slackweb.appsEventAuthorizations.getList({
  token: "token_example",
  eventContext: "eventContext_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `authorizations:read`

##### eventContext: `string`<a id="eventcontext-string"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AppseventauthorizationsGetListResponse](./models/appseventauthorizations-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.event.authorizations.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.appsPermissions.additionalScopesRequest`<a id="slackwebappspermissionsadditionalscopesrequest"></a>

Allows an app to request additional scopes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const additionalScopesRequestResponse =
  await slackweb.appsPermissions.additionalScopesRequest({
    token: "token_example",
    scopes: "scopes_example",
    triggerId: "triggerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### scopes: `string`<a id="scopes-string"></a>

A comma separated list of scopes to request for

##### triggerId: `string`<a id="triggerid-string"></a>

Token used to trigger the permissions API

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsAdditionalScopesRequestResponse](./models/appspermissions-additional-scopes-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.request` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.appsPermissions.listPermissions`<a id="slackwebappspermissionslistpermissions"></a>

Returns list of permissions this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPermissionsResponse = await slackweb.appsPermissions.listPermissions(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsListPermissionsResponse](./models/appspermissions-list-permissions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.appsPermissionsResources.getResourcesList`<a id="slackwebappspermissionsresourcesgetresourceslist"></a>

Returns list of resource grants this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResourcesListResponse =
  await slackweb.appsPermissionsResources.getResourcesList({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsresourcesGetResourcesListResponse](./models/appspermissionsresources-get-resources-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.resources.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.appsPermissionsScopes.getList`<a id="slackwebappspermissionsscopesgetlist"></a>

Returns list of scopes this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await slackweb.appsPermissionsScopes.getList({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsscopesGetListResponse](./models/appspermissionsscopes-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.scopes.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.appsPermissionsUsers.listUserGrants`<a id="slackwebappspermissionsuserslistusergrants"></a>

Returns list of user grants and corresponding scopes this app has on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserGrantsResponse =
  await slackweb.appsPermissionsUsers.listUserGrants({
    token: "token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsusersListUserGrantsResponse](./models/appspermissionsusers-list-user-grants-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.users.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.appsPermissionsUsers.requestModal`<a id="slackwebappspermissionsusersrequestmodal"></a>

Enables an app to trigger a permissions modal to grant an app access to a user access scope.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestModalResponse = await slackweb.appsPermissionsUsers.requestModal({
  token: "token_example",
  scopes: "scopes_example",
  triggerId: "triggerId_example",
  user: "user_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### scopes: `string`<a id="scopes-string"></a>

A comma separated list of user scopes to request for

##### triggerId: `string`<a id="triggerid-string"></a>

Token used to trigger the request

##### user: `string`<a id="user-string"></a>

The user this scope is being requested for

#### 🔄 Return<a id="🔄-return"></a>

[AppspermissionsusersRequestModalResponse](./models/appspermissionsusers-request-modal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps.permissions.users.request` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.auth.revoke`<a id="slackwebauthrevoke"></a>

Revokes a token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeResponse = await slackweb.auth.revoke({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### test: `boolean`<a id="test-boolean"></a>

Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked.

#### 🔄 Return<a id="🔄-return"></a>

[AuthRevokeResponse](./models/auth-revoke-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth.revoke` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.auth.test`<a id="slackwebauthtest"></a>

Checks authentication & identity.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const testResponse = await slackweb.auth.test({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

#### 🔄 Return<a id="🔄-return"></a>

[AuthTestResponse](./models/auth-test-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth.test` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.bots.info`<a id="slackwebbotsinfo"></a>

Gets information about a bot user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.bots.info({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users:read`

##### bot: `string`<a id="bot-string"></a>

Bot user to get info on

#### 🔄 Return<a id="🔄-return"></a>

[BotsInfoResponse](./models/bots-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bots.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.calls.add`<a id="slackwebcallsadd"></a>

Registers a new Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addResponse = await slackweb.calls.add({
  token: "token_example",
  external_unique_id: "external_unique_id_example",
  join_url: "join_url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:write`

##### externalUniqueId: `string`<a id="externaluniqueid-string"></a>

An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service.

##### joinUrl: `string`<a id="joinurl-string"></a>

The URL required for a client to join the Call.

##### title: `string`<a id="title-string"></a>

The name of the Call.

##### createdBy: `string`<a id="createdby-string"></a>

The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required.

##### dateStart: `number`<a id="datestart-number"></a>

Call start time in UTC UNIX timestamp format

##### desktopAppJoinUrl: `string`<a id="desktopappjoinurl-string"></a>

When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.

##### externalDisplayId: `string`<a id="externaldisplayid-string"></a>

An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object.

##### users: `string`<a id="users-string"></a>

The list of users to register as participants in the Call. [Read more on how to specify users here](https://slack.dev).

#### 🔄 Return<a id="🔄-return"></a>

[CallsAddResponse](./models/calls-add-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.calls.addNewParticipant`<a id="slackwebcallsaddnewparticipant"></a>

Registers new participants added to a Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewParticipantResponse = await slackweb.calls.addNewParticipant({
  token: "token_example",
  id: "id_example",
  users: "users_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:write`

##### id: `string`<a id="id-string"></a>

`id` returned by the [`calls.add`](https://slack.dev) method.

##### users: `string`<a id="users-string"></a>

The list of users to add as participants in the Call. [Read more on how to specify users here](https://slack.dev).

#### 🔄 Return<a id="🔄-return"></a>

[CallsparticipantsAddNewParticipantResponse](./models/callsparticipants-add-new-participant-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.participants.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.calls.end`<a id="slackwebcallsend"></a>

Ends a Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const endResponse = await slackweb.calls.end({
  token: "token_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:write`

##### id: `string`<a id="id-string"></a>

`id` returned when registering the call using the [`calls.add`](https://slack.dev) method.

##### duration: `number`<a id="duration-number"></a>

Call duration in seconds

#### 🔄 Return<a id="🔄-return"></a>

[CallsEndResponse](./models/calls-end-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.end` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.calls.info`<a id="slackwebcallsinfo"></a>

Returns information about a Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.calls.info({
  token: "token_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:read`

##### id: `string`<a id="id-string"></a>

`id` of the Call returned by the [`calls.add`](https://slack.dev) method.

#### 🔄 Return<a id="🔄-return"></a>

[CallsInfoResponse](./models/calls-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.calls.registerRemoved`<a id="slackwebcallsregisterremoved"></a>

Registers participants removed from a Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerRemovedResponse = await slackweb.calls.registerRemoved({
  token: "token_example",
  id: "id_example",
  users: "users_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:write`

##### id: `string`<a id="id-string"></a>

`id` returned by the [`calls.add`](https://slack.dev) method.

##### users: `string`<a id="users-string"></a>

The list of users to remove as participants in the Call. [Read more on how to specify users here](https://slack.dev).

#### 🔄 Return<a id="🔄-return"></a>

[CallsparticipantsRegisterRemovedResponse](./models/callsparticipants-register-removed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.participants.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.calls.update`<a id="slackwebcallsupdate"></a>

Updates information about a Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await slackweb.calls.update({
  token: "token_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:write`

##### id: `string`<a id="id-string"></a>

`id` returned by the [`calls.add`](https://slack.dev) method.

##### title: `string`<a id="title-string"></a>

The name of the Call.

##### desktopAppJoinUrl: `string`<a id="desktopappjoinurl-string"></a>

When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.

##### joinUrl: `string`<a id="joinurl-string"></a>

The URL required for a client to join the Call.

#### 🔄 Return<a id="🔄-return"></a>

[CallsUpdateResponse](./models/calls-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.callsParticipants.addNewParticipant`<a id="slackwebcallsparticipantsaddnewparticipant"></a>

Registers new participants added to a Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewParticipantResponse =
  await slackweb.callsParticipants.addNewParticipant({
    token: "token_example",
    id: "id_example",
    users: "users_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:write`

##### id: `string`<a id="id-string"></a>

`id` returned by the [`calls.add`](https://slack.dev) method.

##### users: `string`<a id="users-string"></a>

The list of users to add as participants in the Call. [Read more on how to specify users here](https://slack.dev).

#### 🔄 Return<a id="🔄-return"></a>

[CallsparticipantsAddNewParticipantResponse](./models/callsparticipants-add-new-participant-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.participants.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.callsParticipants.registerRemoved`<a id="slackwebcallsparticipantsregisterremoved"></a>

Registers participants removed from a Call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerRemovedResponse =
  await slackweb.callsParticipants.registerRemoved({
    token: "token_example",
    id: "id_example",
    users: "users_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `calls:write`

##### id: `string`<a id="id-string"></a>

`id` returned by the [`calls.add`](https://slack.dev) method.

##### users: `string`<a id="users-string"></a>

The list of users to remove as participants in the Call. [Read more on how to specify users here](https://slack.dev).

#### 🔄 Return<a id="🔄-return"></a>

[CallsparticipantsRegisterRemovedResponse](./models/callsparticipants-register-removed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/calls.participants.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.delete`<a id="slackwebchatdelete"></a>

Deletes a message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteResponse = await slackweb.chat.delete({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `chat:write`

##### asUser: `boolean`<a id="asuser-boolean"></a>

Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](https://slack.dev) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.

##### channel: `string`<a id="channel-string"></a>

Channel containing the message to be deleted.

##### ts: `number`<a id="ts-number"></a>

Timestamp of the message to be deleted.

#### 🔄 Return<a id="🔄-return"></a>

[ChatDeleteResponse](./models/chat-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.deleteScheduledMessage`<a id="slackwebchatdeletescheduledmessage"></a>

Deletes a pending scheduled message from the queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteScheduledMessageResponse =
  await slackweb.chat.deleteScheduledMessage({
    token: "token_example",
    channel: "channel_example",
    scheduled_message_id: "scheduled_message_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `chat:write`

##### channel: `string`<a id="channel-string"></a>

The channel the scheduled_message is posting to

##### scheduledMessageId: `string`<a id="scheduledmessageid-string"></a>

`scheduled_message_id` returned from call to chat.scheduleMessage

##### asUser: `boolean`<a id="asuser-boolean"></a>

Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](https://slack.dev) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.

#### 🔄 Return<a id="🔄-return"></a>

[ChatDeleteScheduledMessageResponse](./models/chat-delete-scheduled-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.deleteScheduledMessage` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.getPermalink`<a id="slackwebchatgetpermalink"></a>

Retrieve a permalink URL for a specific extant message

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPermalinkResponse = await slackweb.chat.getPermalink({
  token: "token_example",
  channel: "channel_example",
  messageTs: "messageTs_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### channel: `string`<a id="channel-string"></a>

The ID of the conversation or channel containing the message

##### messageTs: `string`<a id="messagets-string"></a>

A message\'s `ts` value, uniquely identifying it within a channel

#### 🔄 Return<a id="🔄-return"></a>

[ChatGetPermalinkResponse](./models/chat-get-permalink-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.getPermalink` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.list`<a id="slackwebchatlist"></a>

Returns a list of scheduled messages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.chat.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### channel: `string`<a id="channel-string"></a>

The channel of the scheduled messages

##### latest: `number`<a id="latest-number"></a>

A UNIX timestamp of the latest value in the time range

##### oldest: `number`<a id="oldest-number"></a>

A UNIX timestamp of the oldest value in the time range

##### limit: `number`<a id="limit-number"></a>

Maximum number of original entries to return.

##### cursor: `string`<a id="cursor-string"></a>

For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from.

#### 🔄 Return<a id="🔄-return"></a>

[ChatscheduledMessagesListResponse](./models/chatscheduled-messages-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.scheduledMessages.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.meMessage`<a id="slackwebchatmemessage"></a>

Share a me message into a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const meMessageResponse = await slackweb.chat.meMessage({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `chat:write`

##### channel: `string`<a id="channel-string"></a>

Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.

##### text: `string`<a id="text-string"></a>

Text of the message to send.

#### 🔄 Return<a id="🔄-return"></a>

[ChatMeMessageResponse](./models/chat-me-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.meMessage` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.postEphemeral`<a id="slackwebchatpostephemeral"></a>

Sends an ephemeral message to a user in a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postEphemeralResponse = await slackweb.chat.postEphemeral({
  token: "token_example",
  channel: "channel_example",
  user: "user_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `chat:write`

##### channel: `string`<a id="channel-string"></a>

Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.

##### user: `string`<a id="user-string"></a>

`id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument.

##### asUser: `boolean`<a id="asuser-boolean"></a>

Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false.

##### attachments: `string`<a id="attachments-string"></a>

A JSON-based array of structured attachments, presented as a URL-encoded string.

##### blocks: `string`<a id="blocks-string"></a>

A JSON-based array of structured blocks, presented as a URL-encoded string.

##### iconEmoji: `string`<a id="iconemoji-string"></a>

Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](https://slack.dev) below.

##### iconUrl: `string`<a id="iconurl-string"></a>

URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](https://slack.dev) below.

##### linkNames: `boolean`<a id="linknames-boolean"></a>

Find and link channel names and usernames.

##### parse: `string`<a id="parse-string"></a>

Change how messages are treated. Defaults to `none`. See [below](https://slack.dev).

##### text: `string`<a id="text-string"></a>

How this field works and whether it is required depends on other fields you use in your API call. [See below](https://slack.dev) for more detail.

##### threadTs: `string`<a id="threadts-string"></a>

Provide another message\\\'s `ts` value to post this message in a thread. Avoid using a reply\\\'s `ts` value; use its parent\\\'s value instead. Ephemeral messages in threads are only shown if there is already an active thread.

##### username: `string`<a id="username-string"></a>

Set your bot\\\'s user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](https://slack.dev) below.

#### 🔄 Return<a id="🔄-return"></a>

[ChatPostEphemeralResponse](./models/chat-post-ephemeral-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.postEphemeral` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.postMessage`<a id="slackwebchatpostmessage"></a>

Sends a message to a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postMessageResponse = await slackweb.chat.postMessage({
  token: "token_example",
  channel: "channel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `chat:write`

##### channel: `string`<a id="channel-string"></a>

Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](https://slack.dev) for more details.

##### asUser: `string`<a id="asuser-string"></a>

Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](https://slack.dev) below.

##### attachments: `string`<a id="attachments-string"></a>

A JSON-based array of structured attachments, presented as a URL-encoded string.

##### blocks: `string`<a id="blocks-string"></a>

A JSON-based array of structured blocks, presented as a URL-encoded string.

##### iconEmoji: `string`<a id="iconemoji-string"></a>

Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](https://slack.dev) below.

##### iconUrl: `string`<a id="iconurl-string"></a>

URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](https://slack.dev) below.

##### linkNames: `boolean`<a id="linknames-boolean"></a>

Find and link channel names and usernames.

##### mrkdwn: `boolean`<a id="mrkdwn-boolean"></a>

Disable Slack markup parsing by setting to `false`. Enabled by default.

##### parse: `string`<a id="parse-string"></a>

Change how messages are treated. Defaults to `none`. See [below](https://slack.dev).

##### replyBroadcast: `boolean`<a id="replybroadcast-boolean"></a>

Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.

##### text: `string`<a id="text-string"></a>

How this field works and whether it is required depends on other fields you use in your API call. [See below](https://slack.dev) for more detail.

##### threadTs: `string`<a id="threadts-string"></a>

Provide another message\\\'s `ts` value to make this message a reply. Avoid using a reply\\\'s `ts` value; use its parent instead.

##### unfurlLinks: `boolean`<a id="unfurllinks-boolean"></a>

Pass true to enable unfurling of primarily text-based content.

##### unfurlMedia: `boolean`<a id="unfurlmedia-boolean"></a>

Pass false to disable unfurling of media content.

##### username: `string`<a id="username-string"></a>

Set your bot\\\'s user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](https://slack.dev) below.

#### 🔄 Return<a id="🔄-return"></a>

[ChatPostMessageResponse](./models/chat-post-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.postMessage` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.scheduleMessage`<a id="slackwebchatschedulemessage"></a>

Schedules a message to be sent to a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const scheduleMessageResponse = await slackweb.chat.scheduleMessage({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `chat:write`

##### asUser: `boolean`<a id="asuser-boolean"></a>

Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship).

##### attachments: `string`<a id="attachments-string"></a>

A JSON-based array of structured attachments, presented as a URL-encoded string.

##### blocks: `string`<a id="blocks-string"></a>

A JSON-based array of structured blocks, presented as a URL-encoded string.

##### channel: `string`<a id="channel-string"></a>

Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](https://slack.dev) for more details.

##### linkNames: `boolean`<a id="linknames-boolean"></a>

Find and link channel names and usernames.

##### parse: `string`<a id="parse-string"></a>

Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting).

##### postAt: `string`<a id="postat-string"></a>

Unix EPOCH timestamp of time in future to send the message.

##### replyBroadcast: `boolean`<a id="replybroadcast-boolean"></a>

Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.

##### text: `string`<a id="text-string"></a>

How this field works and whether it is required depends on other fields you use in your API call. [See below](https://slack.dev) for more detail.

##### threadTs: `number`<a id="threadts-number"></a>

Provide another message\\\'s `ts` value to make this message a reply. Avoid using a reply\\\'s `ts` value; use its parent instead.

##### unfurlLinks: `boolean`<a id="unfurllinks-boolean"></a>

Pass true to enable unfurling of primarily text-based content.

##### unfurlMedia: `boolean`<a id="unfurlmedia-boolean"></a>

Pass false to disable unfurling of media content.

#### 🔄 Return<a id="🔄-return"></a>

[ChatScheduleMessageResponse](./models/chat-schedule-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.scheduleMessage` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.unfurl`<a id="slackwebchatunfurl"></a>

Provide custom unfurl behavior for user-posted URLs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unfurlResponse = await slackweb.chat.unfurl({
  token: "token_example",
  channel: "channel_example",
  ts: "ts_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `links:write`

##### channel: `string`<a id="channel-string"></a>

Channel ID of the message

##### ts: `string`<a id="ts-string"></a>

Timestamp of the message to add unfurl behavior to.

##### unfurls: `string`<a id="unfurls-string"></a>

URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments.

##### userAuthMessage: `string`<a id="userauthmessage-string"></a>

Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior

##### userAuthRequired: `boolean`<a id="userauthrequired-boolean"></a>

Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain

##### userAuthUrl: `string`<a id="userauthurl-string"></a>

Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded.

#### 🔄 Return<a id="🔄-return"></a>

[ChatUnfurlResponse](./models/chat-unfurl-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.unfurl` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chat.update`<a id="slackwebchatupdate"></a>

Updates a message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await slackweb.chat.update({
  token: "token_example",
  channel: "channel_example",
  ts: "ts_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `chat:write`

##### channel: `string`<a id="channel-string"></a>

Channel containing the message to be updated.

##### ts: `string`<a id="ts-string"></a>

Timestamp of the message to be updated.

##### asUser: `string`<a id="asuser-string"></a>

Pass true to update the message as the authed user. [Bot users](https://slack.dev) in this context are considered authed users.

##### attachments: `string`<a id="attachments-string"></a>

A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don\\\'t include this field, the message\\\'s previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field.

##### blocks: `string`<a id="blocks-string"></a>

A JSON-based array of [structured blocks](https://slack.dev), presented as a URL-encoded string. If you don\\\'t include this field, the message\\\'s previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field.

##### linkNames: `string`<a id="linknames-string"></a>

Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`.

##### parse: `string`<a id="parse-string"></a>

Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`.

##### text: `string`<a id="text-string"></a>

New text for the message, using the [default formatting rules](https://slack.dev). It\\\'s not required when presenting `blocks` or `attachments`.

#### 🔄 Return<a id="🔄-return"></a>

[ChatUpdateResponse](./models/chat-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.chatScheduledMessages.list`<a id="slackwebchatscheduledmessageslist"></a>

Returns a list of scheduled messages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.chatScheduledMessages.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### channel: `string`<a id="channel-string"></a>

The channel of the scheduled messages

##### latest: `number`<a id="latest-number"></a>

A UNIX timestamp of the latest value in the time range

##### oldest: `number`<a id="oldest-number"></a>

A UNIX timestamp of the oldest value in the time range

##### limit: `number`<a id="limit-number"></a>

Maximum number of original entries to return.

##### cursor: `string`<a id="cursor-string"></a>

For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from.

#### 🔄 Return<a id="🔄-return"></a>

[ChatscheduledMessagesListResponse](./models/chatscheduled-messages-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat.scheduledMessages.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.archive`<a id="slackwebconversationsarchive"></a>

Archives a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const archiveResponse = await slackweb.conversations.archive({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

ID of conversation to archive

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsArchiveResponse](./models/conversations-archive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.archive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.close`<a id="slackwebconversationsclose"></a>

Closes a direct message or multi-person direct message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const closeResponse = await slackweb.conversations.close({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

Conversation to close.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsCloseResponse](./models/conversations-close-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.close` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.create`<a id="slackwebconversationscreate"></a>

Initiates a public or private channel-based conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await slackweb.conversations.create({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### isPrivate: `boolean`<a id="isprivate-boolean"></a>

Create a private channel instead of a public one

##### name: `string`<a id="name-string"></a>

Name of the public or private channel to create

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsCreateResponse](./models/conversations-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.create` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.history`<a id="slackwebconversationshistory"></a>

Fetches a conversation's history of messages and events.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const historyResponse = await slackweb.conversations.history({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:history`

##### channel: `string`<a id="channel-string"></a>

Conversation ID to fetch history for.

##### latest: `number`<a id="latest-number"></a>

End of time range of messages to include in results.

##### oldest: `number`<a id="oldest-number"></a>

Start of time range of messages to include in results.

##### inclusive: `boolean`<a id="inclusive-boolean"></a>

Include messages with latest or oldest timestamp in results only when either timestamp is specified.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn\'t been reached.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsHistoryResponse](./models/conversations-history-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.info`<a id="slackwebconversationsinfo"></a>

Retrieve information about a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.conversations.info({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:read`

##### channel: `string`<a id="channel-string"></a>

Conversation ID to learn more about

##### includeLocale: `boolean`<a id="includelocale-boolean"></a>

Set this to `true` to receive the locale for this conversation. Defaults to `false`

##### includeNumMembers: `boolean`<a id="includenummembers-boolean"></a>

Set to `true` to include the member count for the specified conversation. Defaults to `false`

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsInfoResponse](./models/conversations-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.invite`<a id="slackwebconversationsinvite"></a>

Invites users to a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteResponse = await slackweb.conversations.invite({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

The ID of the public or private channel to invite user(s) to.

##### users: `string`<a id="users-string"></a>

A comma separated list of user IDs. Up to 1000 users may be listed.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsInviteResponse](./models/conversations-invite-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.invite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.join`<a id="slackwebconversationsjoin"></a>

Joins an existing conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const joinResponse = await slackweb.conversations.join({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `channels:write`

##### channel: `string`<a id="channel-string"></a>

ID of conversation to join

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsJoinResponse](./models/conversations-join-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.join` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.kick`<a id="slackwebconversationskick"></a>

Removes a user from a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const kickResponse = await slackweb.conversations.kick({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

ID of conversation to remove user from.

##### user: `string`<a id="user-string"></a>

User ID to be removed.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsKickResponse](./models/conversations-kick-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.kick` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.leave`<a id="slackwebconversationsleave"></a>

Leaves a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const leaveResponse = await slackweb.conversations.leave({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

Conversation to leave

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsLeaveResponse](./models/conversations-leave-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.leave` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.list`<a id="slackwebconversationslist"></a>

Lists all channels in a Slack team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.conversations.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:read`

##### excludeArchived: `boolean`<a id="excludearchived-boolean"></a>

Set to `true` to exclude archived channels from the list

##### types: `string`<a id="types-string"></a>

Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn\'t been reached. Must be an integer no larger than 1000.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListResponse](./models/conversations-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.mark`<a id="slackwebconversationsmark"></a>

Sets the read cursor in a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markResponse = await slackweb.conversations.mark({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

Channel or conversation to set the read cursor for.

##### ts: `number`<a id="ts-number"></a>

Unique identifier of message you want marked as most recently seen in this conversation.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsMarkResponse](./models/conversations-mark-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.mark` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.members`<a id="slackwebconversationsmembers"></a>

Retrieve members of a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const membersResponse = await slackweb.conversations.members({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:read`

##### channel: `string`<a id="channel-string"></a>

ID of the conversation to retrieve members for

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn\'t been reached.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsMembersResponse](./models/conversations-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.open`<a id="slackwebconversationsopen"></a>

Opens or resumes a direct message or multi-person direct message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const openResponse = await slackweb.conversations.open({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

Resume a conversation by supplying an `im` or `mpim`\\\'s ID. Or provide the `users` field instead.

##### returnIm: `boolean`<a id="returnim-boolean"></a>

Boolean, indicates you want the full IM channel definition in the response.

##### users: `string`<a id="users-string"></a>

Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsOpenResponse](./models/conversations-open-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.open` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.rename`<a id="slackwebconversationsrename"></a>

Renames a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renameResponse = await slackweb.conversations.rename({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

ID of conversation to rename

##### name: `string`<a id="name-string"></a>

New name for conversation.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsRenameResponse](./models/conversations-rename-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.rename` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.replies`<a id="slackwebconversationsreplies"></a>

Retrieve a thread of messages posted to a conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const repliesResponse = await slackweb.conversations.replies({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:history`

##### channel: `string`<a id="channel-string"></a>

Conversation ID to fetch thread from.

##### ts: `number`<a id="ts-number"></a>

Unique identifier of a thread\'s parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message.

##### latest: `number`<a id="latest-number"></a>

End of time range of messages to include in results.

##### oldest: `number`<a id="oldest-number"></a>

Start of time range of messages to include in results.

##### inclusive: `boolean`<a id="inclusive-boolean"></a>

Include messages with latest or oldest timestamp in results only when either timestamp is specified.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn\'t been reached.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsRepliesResponse](./models/conversations-replies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.replies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.setPurpose`<a id="slackwebconversationssetpurpose"></a>

Sets the purpose for a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setPurposeResponse = await slackweb.conversations.setPurpose({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

Conversation to set the purpose of

##### purpose: `string`<a id="purpose-string"></a>

A new, specialer purpose

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsSetPurposeResponse](./models/conversations-set-purpose-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.setPurpose` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.setTopic`<a id="slackwebconversationssettopic"></a>

Sets the topic for a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setTopicResponse = await slackweb.conversations.setTopic({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

Conversation to set the topic of

##### topic: `string`<a id="topic-string"></a>

The new topic string. Does not support formatting or linkification.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsSetTopicResponse](./models/conversations-set-topic-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.setTopic` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.conversations.unarchive`<a id="slackwebconversationsunarchive"></a>

Reverses conversation archival.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unarchiveResponse = await slackweb.conversations.unarchive({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:write`

##### channel: `string`<a id="channel-string"></a>

ID of conversation to unarchive

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsUnarchiveResponse](./models/conversations-unarchive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations.unarchive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.dialog.open`<a id="slackwebdialogopen"></a>

Open a dialog with a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const openResponse = await slackweb.dialog.open({
  token: "token_example",
  dialog: "dialog_example",
  triggerId: "triggerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### dialog: `string`<a id="dialog-string"></a>

The dialog definition. This must be a JSON-encoded string.

##### triggerId: `string`<a id="triggerid-string"></a>

Exchange a trigger to post to the user.

#### 🔄 Return<a id="🔄-return"></a>

[DialogOpenResponse](./models/dialog-open-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dialog.open` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.dnd.endDnd`<a id="slackwebdndenddnd"></a>

Ends the current user's Do Not Disturb session immediately.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const endDndResponse = await slackweb.dnd.endDnd({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `dnd:write`

#### 🔄 Return<a id="🔄-return"></a>

[DndEndDndResponse](./models/dnd-end-dnd-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dnd.endDnd` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.dnd.endSnooze`<a id="slackwebdndendsnooze"></a>

Ends the current user's snooze mode immediately.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const endSnoozeResponse = await slackweb.dnd.endSnooze({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `dnd:write`

#### 🔄 Return<a id="🔄-return"></a>

[DndEndSnoozeResponse](./models/dnd-end-snooze-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dnd.endSnooze` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.dnd.info`<a id="slackwebdndinfo"></a>

Retrieves a user's current Do Not Disturb status.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.dnd.info({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `dnd:read`

##### user: `string`<a id="user-string"></a>

User to fetch status for (defaults to current user)

#### 🔄 Return<a id="🔄-return"></a>

[DndInfoResponse](./models/dnd-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dnd.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.dnd.setSnooze`<a id="slackwebdndsetsnooze"></a>

Turns on Do Not Disturb mode for the current user, or changes its duration.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setSnoozeResponse = await slackweb.dnd.setSnooze({
  num_minutes: "num_minutes_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### numMinutes: `string`<a id="numminutes-string"></a>

Number of minutes, from now, to snooze until.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `dnd:write`

#### 🔄 Return<a id="🔄-return"></a>

[DndSetSnoozeResponse](./models/dnd-set-snooze-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dnd.setSnooze` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.dnd.teamInfo`<a id="slackwebdndteaminfo"></a>

Retrieves the Do Not Disturb status for up to 50 users on a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const teamInfoResponse = await slackweb.dnd.teamInfo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `dnd:read`

##### users: `string`<a id="users-string"></a>

Comma-separated list of users to fetch Do Not Disturb status for

#### 🔄 Return<a id="🔄-return"></a>

[DndTeamInfoResponse](./models/dnd-team-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dnd.teamInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.emoji.list`<a id="slackwebemojilist"></a>

Lists custom emoji for a team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.emoji.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `emoji:read`

#### 🔄 Return<a id="🔄-return"></a>

[EmojiListResponse](./models/emoji-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/emoji.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.addFromRemote`<a id="slackwebfilesaddfromremote"></a>

Adds a file from a remote service

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addFromRemoteResponse = await slackweb.files.addFromRemote({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of the file being shared.

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

##### externalUrl: `string`<a id="externalurl-string"></a>

URL of the remote file.

##### filetype: `string`<a id="filetype-string"></a>

type of file

##### indexableFileContents: `string`<a id="indexablefilecontents-string"></a>

A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file.

##### previewImage: `string`<a id="previewimage-string"></a>

Preview of the document via `multipart/form-data`.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:write`

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteAddFromRemoteResponse](./models/filesremote-add-from-remote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.delete`<a id="slackwebfilesdelete"></a>

Deletes a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteResponse = await slackweb.files.delete({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:write:user`

##### file: `string`<a id="file-string"></a>

ID of file to delete.

#### 🔄 Return<a id="🔄-return"></a>

[FilesDeleteResponse](./models/files-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.deleteComment`<a id="slackwebfilesdeletecomment"></a>

Deletes an existing comment on a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCommentResponse = await slackweb.files.deleteComment({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:write:user`

##### file: `string`<a id="file-string"></a>

File to delete a comment from.

##### id: `string`<a id="id-string"></a>

The comment to delete.

#### 🔄 Return<a id="🔄-return"></a>

[FilescommentsDeleteCommentResponse](./models/filescomments-delete-comment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.comments.delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.deleteFile`<a id="slackwebfilesdeletefile"></a>

Remove a remote file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFileResponse = await slackweb.files.deleteFile({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

##### file: `string`<a id="file-string"></a>

Specify a file by providing its ID.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:write`

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteDeleteFileResponse](./models/filesremote-delete-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.getInfo`<a id="slackwebfilesgetinfo"></a>

Retrieve information about a remote file added to Slack

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await slackweb.files.getInfo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:read`

##### file: `string`<a id="file-string"></a>

Specify a file by providing its ID.

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteGetInfoResponse](./models/filesremote-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.info`<a id="slackwebfilesinfo"></a>

Gets information about a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.files.info({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:read`

##### file: `string`<a id="file-string"></a>

Specify a file by providing its ID.

##### count: `string`<a id="count-string"></a>

##### page: `string`<a id="page-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn\'t been reached.

##### cursor: `string`<a id="cursor-string"></a>

Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection of comments. See [pagination](https://slack.dev) for more details.

#### 🔄 Return<a id="🔄-return"></a>

[FilesInfoResponse](./models/files-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.list`<a id="slackwebfileslist"></a>

List for a team, in a channel, or from a user with applied filters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.files.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:read`

##### user: `string`<a id="user-string"></a>

Filter files created by a single user.

##### channel: `string`<a id="channel-string"></a>

Filter files appearing in a specific channel, indicated by its ID.

##### tsFrom: `number`<a id="tsfrom-number"></a>

Filter files created after this timestamp (inclusive).

##### tsTo: `number`<a id="tsto-number"></a>

Filter files created before this timestamp (inclusive).

##### types: `string`<a id="types-string"></a>

Filter files by type ([see below](https://slack.dev)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list.

##### count: `string`<a id="count-string"></a>

##### page: `string`<a id="page-string"></a>

##### showFilesHiddenByLimit: `boolean`<a id="showfileshiddenbylimit-boolean"></a>

Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit.

#### 🔄 Return<a id="🔄-return"></a>

[FilesListResponse](./models/files-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.listRemoteFiles`<a id="slackwebfileslistremotefiles"></a>

Retrieve information about a remote file added to Slack

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRemoteFilesResponse = await slackweb.files.listRemoteFiles({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:read`

##### channel: `string`<a id="channel-string"></a>

Filter files appearing in a specific channel, indicated by its ID.

##### tsFrom: `number`<a id="tsfrom-number"></a>

Filter files created after this timestamp (inclusive).

##### tsTo: `number`<a id="tsto-number"></a>

Filter files created before this timestamp (inclusive).

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteListRemoteFilesResponse](./models/filesremote-list-remote-files-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.revokePublicURL`<a id="slackwebfilesrevokepublicurl"></a>

Revokes public/external sharing access for a file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokePublicURLResponse = await slackweb.files.revokePublicURL({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:write:user`

##### file: `string`<a id="file-string"></a>

File to revoke

#### 🔄 Return<a id="🔄-return"></a>

[FilesRevokePublicUrlResponse](./models/files-revoke-public-url-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.revokePublicURL` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.shareRemoteFile`<a id="slackwebfilesshareremotefile"></a>

Share a remote file into a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const shareRemoteFileResponse = await slackweb.files.shareRemoteFile({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:share`

##### file: `string`<a id="file-string"></a>

Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required.

##### externalId: `string`<a id="externalid-string"></a>

The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required.

##### channels: `string`<a id="channels-string"></a>

Comma-separated list of channel IDs where the file will be shared.

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteShareRemoteFileResponse](./models/filesremote-share-remote-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.share` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.sharedPublicURL`<a id="slackwebfilessharedpublicurl"></a>

Enables a file for public/external sharing.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sharedPublicURLResponse = await slackweb.files.sharedPublicURL({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:write:user`

##### file: `string`<a id="file-string"></a>

File to share

#### 🔄 Return<a id="🔄-return"></a>

[FilesSharedPublicUrlResponse](./models/files-shared-public-url-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.sharedPublicURL` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.updateRemoteFile`<a id="slackwebfilesupdateremotefile"></a>

Updates an existing remote file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRemoteFileResponse = await slackweb.files.updateRemoteFile({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of the file being shared.

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

##### externalUrl: `string`<a id="externalurl-string"></a>

URL of the remote file.

##### file: `string`<a id="file-string"></a>

Specify a file by providing its ID.

##### filetype: `string`<a id="filetype-string"></a>

type of file

##### indexableFileContents: `string`<a id="indexablefilecontents-string"></a>

File containing contents that can be used to improve searchability for the remote file.

##### previewImage: `string`<a id="previewimage-string"></a>

Preview of the document via `multipart/form-data`.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:write`

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteUpdateRemoteFileResponse](./models/filesremote-update-remote-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.files.upload`<a id="slackwebfilesupload"></a>

Uploads or creates a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadResponse = await slackweb.files.upload({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of file.

##### channels: `string`<a id="channels-string"></a>

Comma-separated list of channel names or IDs where the file will be shared.

##### content: `string`<a id="content-string"></a>

File contents via a POST variable. If omitting this parameter, you must provide a `file`.

##### file: `string`<a id="file-string"></a>

File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`.

##### filename: `string`<a id="filename-string"></a>

Filename of file.

##### filetype: `string`<a id="filetype-string"></a>

A [file type](https://slack.dev) identifier.

##### initialComment: `string`<a id="initialcomment-string"></a>

The message text introducing the file in specified `channels`.

##### threadTs: `number`<a id="threadts-number"></a>

Provide another message\\\'s `ts` value to upload this file as a reply. Never use a reply\\\'s `ts` value; use its parent instead.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:write:user`

#### 🔄 Return<a id="🔄-return"></a>

[FilesUploadResponse](./models/files-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.filesComments.deleteComment`<a id="slackwebfilescommentsdeletecomment"></a>

Deletes an existing comment on a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCommentResponse = await slackweb.filesComments.deleteComment({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `files:write:user`

##### file: `string`<a id="file-string"></a>

File to delete a comment from.

##### id: `string`<a id="id-string"></a>

The comment to delete.

#### 🔄 Return<a id="🔄-return"></a>

[FilescommentsDeleteCommentResponse](./models/filescomments-delete-comment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.comments.delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.filesRemote.addFromRemote`<a id="slackwebfilesremoteaddfromremote"></a>

Adds a file from a remote service

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addFromRemoteResponse = await slackweb.filesRemote.addFromRemote({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of the file being shared.

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

##### externalUrl: `string`<a id="externalurl-string"></a>

URL of the remote file.

##### filetype: `string`<a id="filetype-string"></a>

type of file

##### indexableFileContents: `string`<a id="indexablefilecontents-string"></a>

A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file.

##### previewImage: `string`<a id="previewimage-string"></a>

Preview of the document via `multipart/form-data`.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:write`

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteAddFromRemoteResponse](./models/filesremote-add-from-remote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.filesRemote.deleteFile`<a id="slackwebfilesremotedeletefile"></a>

Remove a remote file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFileResponse = await slackweb.filesRemote.deleteFile({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

##### file: `string`<a id="file-string"></a>

Specify a file by providing its ID.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:write`

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteDeleteFileResponse](./models/filesremote-delete-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.filesRemote.getInfo`<a id="slackwebfilesremotegetinfo"></a>

Retrieve information about a remote file added to Slack

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await slackweb.filesRemote.getInfo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:read`

##### file: `string`<a id="file-string"></a>

Specify a file by providing its ID.

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteGetInfoResponse](./models/filesremote-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.filesRemote.listRemoteFiles`<a id="slackwebfilesremotelistremotefiles"></a>

Retrieve information about a remote file added to Slack

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRemoteFilesResponse = await slackweb.filesRemote.listRemoteFiles({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:read`

##### channel: `string`<a id="channel-string"></a>

Filter files appearing in a specific channel, indicated by its ID.

##### tsFrom: `number`<a id="tsfrom-number"></a>

Filter files created after this timestamp (inclusive).

##### tsTo: `number`<a id="tsto-number"></a>

Filter files created before this timestamp (inclusive).

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteListRemoteFilesResponse](./models/filesremote-list-remote-files-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.filesRemote.shareRemoteFile`<a id="slackwebfilesremoteshareremotefile"></a>

Share a remote file into a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const shareRemoteFileResponse = await slackweb.filesRemote.shareRemoteFile({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:share`

##### file: `string`<a id="file-string"></a>

Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required.

##### externalId: `string`<a id="externalid-string"></a>

The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required.

##### channels: `string`<a id="channels-string"></a>

Comma-separated list of channel IDs where the file will be shared.

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteShareRemoteFileResponse](./models/filesremote-share-remote-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.share` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.filesRemote.updateRemoteFile`<a id="slackwebfilesremoteupdateremotefile"></a>

Updates an existing remote file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRemoteFileResponse = await slackweb.filesRemote.updateRemoteFile(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of the file being shared.

##### externalId: `string`<a id="externalid-string"></a>

Creator defined GUID for the file.

##### externalUrl: `string`<a id="externalurl-string"></a>

URL of the remote file.

##### file: `string`<a id="file-string"></a>

Specify a file by providing its ID.

##### filetype: `string`<a id="filetype-string"></a>

type of file

##### indexableFileContents: `string`<a id="indexablefilecontents-string"></a>

File containing contents that can be used to improve searchability for the remote file.

##### previewImage: `string`<a id="previewimage-string"></a>

Preview of the document via `multipart/form-data`.

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `remote_files:write`

#### 🔄 Return<a id="🔄-return"></a>

[FilesremoteUpdateRemoteFileResponse](./models/filesremote-update-remote-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files.remote.update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.migration.exchange`<a id="slackwebmigrationexchange"></a>

For Enterprise Grid workspaces, map local user IDs to global user IDs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const exchangeResponse = await slackweb.migration.exchange({
  token: "token_example",
  users: "users_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `tokens.basic`

##### users: `string`<a id="users-string"></a>

A comma-separated list of user ids, up to 400 per request

##### teamId: `string`<a id="teamid-string"></a>

Specify team_id starts with `T` in case of Org Token

##### toOld: `boolean`<a id="toold-boolean"></a>

Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`.

#### 🔄 Return<a id="🔄-return"></a>

[MigrationExchangeResponse](./models/migration-exchange-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migration.exchange` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.oauth.access`<a id="slackweboauthaccess"></a>

Exchanges a temporary OAuth verifier code for an access token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const accessResponse = await slackweb.oauth.access({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

Issued when you created your application.

##### clientSecret: `string`<a id="clientsecret-string"></a>

Issued when you created your application.

##### code: `string`<a id="code-string"></a>

The `code` param returned via the OAuth callback.

##### redirectUri: `string`<a id="redirecturi-string"></a>

This must match the originally submitted URI (if one was sent).

##### singleChannel: `boolean`<a id="singlechannel-boolean"></a>

Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).

#### 🔄 Return<a id="🔄-return"></a>

[OauthAccessResponse](./models/oauth-access-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth.access` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.oauth.exchangeToken`<a id="slackweboauthexchangetoken"></a>

Exchanges a temporary OAuth verifier code for an access token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const exchangeTokenResponse = await slackweb.oauth.exchangeToken({
  code: "code_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

The `code` param returned via the OAuth callback.

##### clientId: `string`<a id="clientid-string"></a>

Issued when you created your application.

##### clientSecret: `string`<a id="clientsecret-string"></a>

Issued when you created your application.

##### redirectUri: `string`<a id="redirecturi-string"></a>

This must match the originally submitted URI (if one was sent).

#### 🔄 Return<a id="🔄-return"></a>

[Oauthv2ExchangeTokenResponse](./models/oauthv2-exchange-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth.v2.access` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.oauth.token`<a id="slackweboauthtoken"></a>

Exchanges a temporary OAuth verifier code for a workspace token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tokenResponse = await slackweb.oauth.token({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

Issued when you created your application.

##### clientSecret: `string`<a id="clientsecret-string"></a>

Issued when you created your application.

##### code: `string`<a id="code-string"></a>

The `code` param returned via the OAuth callback.

##### redirectUri: `string`<a id="redirecturi-string"></a>

This must match the originally submitted URI (if one was sent).

##### singleChannel: `boolean`<a id="singlechannel-boolean"></a>

Request the user to add your app only to a single channel.

#### 🔄 Return<a id="🔄-return"></a>

[OauthTokenResponse](./models/oauth-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth.token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.oauthV2.exchangeToken`<a id="slackweboauthv2exchangetoken"></a>

Exchanges a temporary OAuth verifier code for an access token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const exchangeTokenResponse = await slackweb.oauthV2.exchangeToken({
  code: "code_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

The `code` param returned via the OAuth callback.

##### clientId: `string`<a id="clientid-string"></a>

Issued when you created your application.

##### clientSecret: `string`<a id="clientsecret-string"></a>

Issued when you created your application.

##### redirectUri: `string`<a id="redirecturi-string"></a>

This must match the originally submitted URI (if one was sent).

#### 🔄 Return<a id="🔄-return"></a>

[Oauthv2ExchangeTokenResponse](./models/oauthv2-exchange-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth.v2.access` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.pins.add`<a id="slackwebpinsadd"></a>

Pins an item to a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addResponse = await slackweb.pins.add({
  token: "token_example",
  channel: "channel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `pins:write`

##### channel: `string`<a id="channel-string"></a>

Channel to pin the item in.

##### timestamp: `string`<a id="timestamp-string"></a>

Timestamp of the message to pin.

#### 🔄 Return<a id="🔄-return"></a>

[PinsAddResponse](./models/pins-add-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pins.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.pins.list`<a id="slackwebpinslist"></a>

Lists items pinned to a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.pins.list({
  token: "token_example",
  channel: "channel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `pins:read`

##### channel: `string`<a id="channel-string"></a>

Channel to get pinned items for.

#### 🔄 Return<a id="🔄-return"></a>

[PinsListResponseInner](./models/pins-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pins.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.pins.remove`<a id="slackwebpinsremove"></a>

Un-pins an item from a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await slackweb.pins.remove({
  token: "token_example",
  channel: "channel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `pins:write`

##### channel: `string`<a id="channel-string"></a>

Channel where the item is pinned to.

##### timestamp: `string`<a id="timestamp-string"></a>

Timestamp of the message to un-pin.

#### 🔄 Return<a id="🔄-return"></a>

[PinsRemoveResponse](./models/pins-remove-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pins.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reactions.add`<a id="slackwebreactionsadd"></a>

Adds a reaction to an item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addResponse = await slackweb.reactions.add({
  token: "token_example",
  channel: "channel_example",
  name: "name_example",
  timestamp: "timestamp_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reactions:write`

##### channel: `string`<a id="channel-string"></a>

Channel where the message to add reaction to was posted.

##### name: `string`<a id="name-string"></a>

Reaction (emoji) name.

##### timestamp: `string`<a id="timestamp-string"></a>

Timestamp of the message to add reaction to.

#### 🔄 Return<a id="🔄-return"></a>

[ReactionsAddResponse](./models/reactions-add-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reactions.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reactions.get`<a id="slackwebreactionsget"></a>

Gets reactions for an item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await slackweb.reactions.get({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reactions:read`

##### channel: `string`<a id="channel-string"></a>

Channel where the message to get reactions for was posted.

##### file: `string`<a id="file-string"></a>

File to get reactions for.

##### fileComment: `string`<a id="filecomment-string"></a>

File comment to get reactions for.

##### full: `boolean`<a id="full-boolean"></a>

If true always return the complete reaction list.

##### timestamp: `string`<a id="timestamp-string"></a>

Timestamp of the message to get reactions for.

#### 🔄 Return<a id="🔄-return"></a>

[ReactionsGetResponseInner](./models/reactions-get-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reactions.get` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reactions.list`<a id="slackwebreactionslist"></a>

Lists reactions made by a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.reactions.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reactions:read`

##### user: `string`<a id="user-string"></a>

Show reactions made by this user. Defaults to the authed user.

##### full: `boolean`<a id="full-boolean"></a>

If true always return the complete reaction list.

##### count: `number`<a id="count-number"></a>

##### page: `number`<a id="page-number"></a>

##### cursor: `string`<a id="cursor-string"></a>

Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more details.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn\'t been reached.

#### 🔄 Return<a id="🔄-return"></a>

[ReactionsListResponse](./models/reactions-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reactions.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reactions.remove`<a id="slackwebreactionsremove"></a>

Removes a reaction from an item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await slackweb.reactions.remove({
  token: "token_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reactions:write`

##### name: `string`<a id="name-string"></a>

Reaction (emoji) name.

##### channel: `string`<a id="channel-string"></a>

Channel where the message to remove reaction from was posted.

##### file: `string`<a id="file-string"></a>

File to remove reaction from.

##### fileComment: `string`<a id="filecomment-string"></a>

File comment to remove reaction from.

##### timestamp: `string`<a id="timestamp-string"></a>

Timestamp of the message to remove reaction from.

#### 🔄 Return<a id="🔄-return"></a>

[ReactionsRemoveResponse](./models/reactions-remove-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reactions.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reminders.add`<a id="slackwebremindersadd"></a>

Creates a reminder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addResponse = await slackweb.reminders.add({
  token: "token_example",
  text: "text_example",
  time: "time_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reminders:write`

##### text: `string`<a id="text-string"></a>

The content of the reminder

##### time: `string`<a id="time-string"></a>

When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. \\\"in 15 minutes,\\\" or \\\"every Thursday\\\")

##### user: `string`<a id="user-string"></a>

The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.

#### 🔄 Return<a id="🔄-return"></a>

[RemindersAddResponse](./models/reminders-add-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reminders.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reminders.complete`<a id="slackwebreminderscomplete"></a>

Marks a reminder as complete.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeResponse = await slackweb.reminders.complete({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reminders:write`

##### reminder: `string`<a id="reminder-string"></a>

The ID of the reminder to be marked as complete

#### 🔄 Return<a id="🔄-return"></a>

[RemindersCompleteResponse](./models/reminders-complete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reminders.complete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reminders.delete`<a id="slackwebremindersdelete"></a>

Deletes a reminder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteResponse = await slackweb.reminders.delete({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reminders:write`

##### reminder: `string`<a id="reminder-string"></a>

The ID of the reminder

#### 🔄 Return<a id="🔄-return"></a>

[RemindersDeleteResponse](./models/reminders-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reminders.delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reminders.info`<a id="slackwebremindersinfo"></a>

Gets information about a reminder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.reminders.info({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reminders:read`

##### reminder: `string`<a id="reminder-string"></a>

The ID of the reminder

#### 🔄 Return<a id="🔄-return"></a>

[RemindersInfoResponse](./models/reminders-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reminders.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.reminders.list`<a id="slackwebreminderslist"></a>

Lists all reminders created by or for a given user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.reminders.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `reminders:read`

#### 🔄 Return<a id="🔄-return"></a>

[RemindersListResponse](./models/reminders-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reminders.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.rtm.connect`<a id="slackwebrtmconnect"></a>

Starts a Real Time Messaging session.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const connectResponse = await slackweb.rtm.connect({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `rtm:stream`

##### batchPresenceAware: `boolean`<a id="batchpresenceaware-boolean"></a>

Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](https://slack.dev).

##### presenceSub: `boolean`<a id="presencesub-boolean"></a>

Only deliver presence events when requested by subscription. See [presence subscriptions](https://slack.dev).

#### 🔄 Return<a id="🔄-return"></a>

[RtmConnectResponse](./models/rtm-connect-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rtm.connect` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.search.messages`<a id="slackwebsearchmessages"></a>

Searches for messages matching a query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const messagesResponse = await slackweb.search.messages({
  token: "token_example",
  query: "query_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `search:read`

##### query: `string`<a id="query-string"></a>

Search query.

##### count: `number`<a id="count-number"></a>

Pass the number of results you want per \"page\". Maximum of `100`.

##### highlight: `boolean`<a id="highlight-boolean"></a>

Pass a value of `true` to enable query highlight markers (see below).

##### page: `number`<a id="page-number"></a>

##### sort: `string`<a id="sort-string"></a>

Return matches sorted by either `score` or `timestamp`.

##### sortDir: `string`<a id="sortdir-string"></a>

Change sort direction to ascending (`asc`) or descending (`desc`).

#### 🔄 Return<a id="🔄-return"></a>

[SearchMessagesResponse](./models/search-messages-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search.messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.stars.add`<a id="slackwebstarsadd"></a>

Adds a star to an item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addResponse = await slackweb.stars.add({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `stars:write`

##### channel: `string`<a id="channel-string"></a>

Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`).

##### file: `string`<a id="file-string"></a>

File to add star to.

##### fileComment: `string`<a id="filecomment-string"></a>

File comment to add star to.

##### timestamp: `string`<a id="timestamp-string"></a>

Timestamp of the message to add star to.

#### 🔄 Return<a id="🔄-return"></a>

[StarsAddResponse](./models/stars-add-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stars.add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.stars.list`<a id="slackwebstarslist"></a>

Lists stars for a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.stars.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `stars:read`

##### count: `string`<a id="count-string"></a>

##### page: `string`<a id="page-string"></a>

##### cursor: `string`<a id="cursor-string"></a>

Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more details.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn\'t been reached.

#### 🔄 Return<a id="🔄-return"></a>

[StarsListResponse](./models/stars-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stars.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.stars.remove`<a id="slackwebstarsremove"></a>

Removes a star from an item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await slackweb.stars.remove({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `stars:write`

##### channel: `string`<a id="channel-string"></a>

Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`).

##### file: `string`<a id="file-string"></a>

File to remove star from.

##### fileComment: `string`<a id="filecomment-string"></a>

File comment to remove star from.

##### timestamp: `string`<a id="timestamp-string"></a>

Timestamp of the message to remove star from.

#### 🔄 Return<a id="🔄-return"></a>

[StarsRemoveResponse](./models/stars-remove-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stars.remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.team.accessLogs`<a id="slackwebteamaccesslogs"></a>

Gets the access logs for the current team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const accessLogsResponse = await slackweb.team.accessLogs({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin`

##### before: `string`<a id="before-string"></a>

End of time range of logs to include in results (inclusive).

##### count: `string`<a id="count-string"></a>

##### page: `string`<a id="page-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TeamAccessLogsResponse](./models/team-access-logs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team.accessLogs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.team.billableInfo`<a id="slackwebteambillableinfo"></a>

Gets billable users information for the current team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const billableInfoResponse = await slackweb.team.billableInfo({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin`

##### user: `string`<a id="user-string"></a>

A user to retrieve the billable information for. Defaults to all users.

#### 🔄 Return<a id="🔄-return"></a>

[TeamBillableInfoResponse](./models/team-billable-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team.billableInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.team.getProfile`<a id="slackwebteamgetprofile"></a>

Retrieve a team's profile.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProfileResponse = await slackweb.team.getProfile({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:read`

##### visibility: `string`<a id="visibility-string"></a>

Filter by visibility.

#### 🔄 Return<a id="🔄-return"></a>

[TeamprofileGetProfileResponse](./models/teamprofile-get-profile-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team.profile.get` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.team.info`<a id="slackwebteaminfo"></a>

Gets information about the current team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.team.info({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `team:read`

##### team: `string`<a id="team-string"></a>

Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels

#### 🔄 Return<a id="🔄-return"></a>

[TeamInfoResponse](./models/team-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.team.integrationLogs`<a id="slackwebteamintegrationlogs"></a>

Gets the integration logs for the current team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const integrationLogsResponse = await slackweb.team.integrationLogs({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `admin`

##### appId: `string`<a id="appid-string"></a>

Filter logs to this Slack app. Defaults to all logs.

##### changeType: `string`<a id="changetype-string"></a>

Filter logs with this change type. Defaults to all logs.

##### count: `string`<a id="count-string"></a>

##### page: `string`<a id="page-string"></a>

##### serviceId: `string`<a id="serviceid-string"></a>

Filter logs to this service. Defaults to all logs.

##### user: `string`<a id="user-string"></a>

Filter logs generated by this user’s actions. Defaults to all logs.

#### 🔄 Return<a id="🔄-return"></a>

[TeamIntegrationLogsResponse](./models/team-integration-logs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team.integrationLogs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.teamProfile.getProfile`<a id="slackwebteamprofilegetprofile"></a>

Retrieve a team's profile.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProfileResponse = await slackweb.teamProfile.getProfile({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:read`

##### visibility: `string`<a id="visibility-string"></a>

Filter by visibility.

#### 🔄 Return<a id="🔄-return"></a>

[TeamprofileGetProfileResponse](./models/teamprofile-get-profile-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team.profile.get` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroups.create`<a id="slackwebusergroupscreate"></a>

Create a User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await slackweb.usergroups.create({
  token: "token_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:write`

##### name: `string`<a id="name-string"></a>

A name for the User Group. Must be unique among User Groups.

##### description: `string`<a id="description-string"></a>

A short description of the User Group.

##### channels: `string`<a id="channels-string"></a>

A comma separated string of encoded channel IDs for which the User Group uses as a default.

##### handle: `string`<a id="handle-string"></a>

A mention handle. Must be unique among channels, users and User Groups.

##### includeCount: `boolean`<a id="includecount-boolean"></a>

Include the number of users in each User Group.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsCreateResponse](./models/usergroups-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.create` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroups.disable`<a id="slackwebusergroupsdisable"></a>

Disable an existing User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const disableResponse = await slackweb.usergroups.disable({
  token: "token_example",
  usergroup: "usergroup_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:write`

##### usergroup: `string`<a id="usergroup-string"></a>

The encoded ID of the User Group to disable.

##### includeCount: `boolean`<a id="includecount-boolean"></a>

Include the number of users in the User Group.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsDisableResponse](./models/usergroups-disable-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.disable` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroups.enable`<a id="slackwebusergroupsenable"></a>

Enable a User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const enableResponse = await slackweb.usergroups.enable({
  token: "token_example",
  usergroup: "usergroup_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:write`

##### usergroup: `string`<a id="usergroup-string"></a>

The encoded ID of the User Group to enable.

##### includeCount: `boolean`<a id="includecount-boolean"></a>

Include the number of users in the User Group.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsEnableResponse](./models/usergroups-enable-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.enable` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroups.list`<a id="slackwebusergroupslist"></a>

List all User Groups for a team

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.usergroups.list({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:read`

##### includeUsers: `boolean`<a id="includeusers-boolean"></a>

Include the list of users for each User Group.

##### includeCount: `boolean`<a id="includecount-boolean"></a>

Include the number of users in each User Group.

##### includeDisabled: `boolean`<a id="includedisabled-boolean"></a>

Include disabled User Groups.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsListResponse](./models/usergroups-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroups.listAllUsers`<a id="slackwebusergroupslistallusers"></a>

List all users in a User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllUsersResponse = await slackweb.usergroups.listAllUsers({
  token: "token_example",
  usergroup: "usergroup_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:read`

##### usergroup: `string`<a id="usergroup-string"></a>

The encoded ID of the User Group to update.

##### includeDisabled: `boolean`<a id="includedisabled-boolean"></a>

Allow results that involve disabled User Groups.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsusersListAllUsersResponse](./models/usergroupsusers-list-all-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.users.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroups.update`<a id="slackwebusergroupsupdate"></a>

Update an existing User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await slackweb.usergroups.update({
  token: "token_example",
  usergroup: "usergroup_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:write`

##### usergroup: `string`<a id="usergroup-string"></a>

The encoded ID of the User Group to update.

##### description: `string`<a id="description-string"></a>

A short description of the User Group.

##### channels: `string`<a id="channels-string"></a>

A comma separated string of encoded channel IDs for which the User Group uses as a default.

##### handle: `string`<a id="handle-string"></a>

A mention handle. Must be unique among channels, users and User Groups.

##### includeCount: `boolean`<a id="includecount-boolean"></a>

Include the number of users in the User Group.

##### name: `string`<a id="name-string"></a>

A name for the User Group. Must be unique among User Groups.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsUpdateResponse](./models/usergroups-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroups.updateList`<a id="slackwebusergroupsupdatelist"></a>

Update the list of users for a User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateListResponse = await slackweb.usergroups.updateList({
  token: "token_example",
  usergroup: "usergroup_example",
  users: "users_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:write`

##### usergroup: `string`<a id="usergroup-string"></a>

The encoded ID of the User Group to update.

##### users: `string`<a id="users-string"></a>

A comma separated string of encoded user IDs that represent the entire list of users for the User Group.

##### includeCount: `boolean`<a id="includecount-boolean"></a>

Include the number of users in the User Group.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsusersUpdateListResponse](./models/usergroupsusers-update-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.users.update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroupsUsers.listAllUsers`<a id="slackwebusergroupsuserslistallusers"></a>

List all users in a User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllUsersResponse = await slackweb.usergroupsUsers.listAllUsers({
  token: "token_example",
  usergroup: "usergroup_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:read`

##### usergroup: `string`<a id="usergroup-string"></a>

The encoded ID of the User Group to update.

##### includeDisabled: `boolean`<a id="includedisabled-boolean"></a>

Allow results that involve disabled User Groups.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsusersListAllUsersResponse](./models/usergroupsusers-list-all-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.users.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usergroupsUsers.updateList`<a id="slackwebusergroupsusersupdatelist"></a>

Update the list of users for a User Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateListResponse = await slackweb.usergroupsUsers.updateList({
  token: "token_example",
  usergroup: "usergroup_example",
  users: "users_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `usergroups:write`

##### usergroup: `string`<a id="usergroup-string"></a>

The encoded ID of the User Group to update.

##### users: `string`<a id="users-string"></a>

A comma separated string of encoded user IDs that represent the entire list of users for the User Group.

##### includeCount: `boolean`<a id="includecount-boolean"></a>

Include the number of users in the User Group.

#### 🔄 Return<a id="🔄-return"></a>

[UsergroupsusersUpdateListResponse](./models/usergroupsusers-update-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/usergroups.users.update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.conversations`<a id="slackwebusersconversations"></a>

List conversations the calling user may access.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const conversationsResponse = await slackweb.users.conversations({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `conversations:read`

##### user: `string`<a id="user-string"></a>

Browse conversations by a specific user ID\'s membership. Non-public channels are restricted to those where the calling user shares membership.

##### types: `string`<a id="types-string"></a>

Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`

##### excludeArchived: `boolean`<a id="excludearchived-boolean"></a>

Set to `true` to exclude archived channels from the list

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn\'t been reached. Must be an integer no larger than 1000.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

#### 🔄 Return<a id="🔄-return"></a>

[UsersConversationsResponse](./models/users-conversations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.deletePhoto`<a id="slackwebusersdeletephoto"></a>

Delete the user profile photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePhotoResponse = await slackweb.users.deletePhoto({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:write`

#### 🔄 Return<a id="🔄-return"></a>

[UsersDeletePhotoResponse](./models/users-delete-photo-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.deletePhoto` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.getPresence`<a id="slackwebusersgetpresence"></a>

Gets user presence information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPresenceResponse = await slackweb.users.getPresence({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users:read`

##### user: `string`<a id="user-string"></a>

User to get presence info on. Defaults to the authed user.

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetPresenceResponse](./models/users-get-presence-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.getPresence` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.getProfileInfo`<a id="slackwebusersgetprofileinfo"></a>

Retrieves a user's profile information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProfileInfoResponse = await slackweb.users.getProfileInfo({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:read`

##### includeLabels: `boolean`<a id="includelabels-boolean"></a>

Include labels for each ID in custom profile fields

##### user: `string`<a id="user-string"></a>

User to retrieve profile info for

#### 🔄 Return<a id="🔄-return"></a>

[UsersprofileGetProfileInfoResponse](./models/usersprofile-get-profile-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.profile.get` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.identity`<a id="slackwebusersidentity"></a>

Get a user's identity.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const identityResponse = await slackweb.users.identity({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `identity.basic`

#### 🔄 Return<a id="🔄-return"></a>

[UsersIdentityResponseInner](./models/users-identity-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.identity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.info`<a id="slackwebusersinfo"></a>

Gets information about a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await slackweb.users.info({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users:read`

##### includeLocale: `boolean`<a id="includelocale-boolean"></a>

Set this to `true` to receive the locale for this user. Defaults to `false`

##### user: `string`<a id="user-string"></a>

User to get info on

#### 🔄 Return<a id="🔄-return"></a>

[UsersInfoResponse](./models/users-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.list`<a id="slackwebuserslist"></a>

Lists all users in a Slack team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await slackweb.users.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users:read`

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn\'t been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors.

##### cursor: `string`<a id="cursor-string"></a>

Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail.

##### includeLocale: `boolean`<a id="includelocale-boolean"></a>

Set this to `true` to receive the locale for users. Defaults to `false`

#### 🔄 Return<a id="🔄-return"></a>

[UsersListResponse](./models/users-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.lookupByEmail`<a id="slackwebuserslookupbyemail"></a>

Find a user with an email address.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByEmailResponse = await slackweb.users.lookupByEmail({
  token: "token_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users:read.email`

##### email: `string`<a id="email-string"></a>

An email address belonging to a user in the workspace

#### 🔄 Return<a id="🔄-return"></a>

[UsersLookupByEmailResponse](./models/users-lookup-by-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.lookupByEmail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.setActive`<a id="slackwebuserssetactive"></a>

Marked a user as active. Deprecated and non-functional.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setActiveResponse = await slackweb.users.setActive({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users:write`

#### 🔄 Return<a id="🔄-return"></a>

[UsersSetActiveResponse](./models/users-set-active-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.setActive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.setPhoto`<a id="slackwebuserssetphoto"></a>

Set the user profile photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setPhotoResponse = await slackweb.users.setPhoto({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:write`

##### cropW: `string`<a id="cropw-string"></a>

Width/height of crop box (always square)

##### cropX: `string`<a id="cropx-string"></a>

X coordinate of top-left corner of crop box

##### cropY: `string`<a id="cropy-string"></a>

Y coordinate of top-left corner of crop box

##### image: `string`<a id="image-string"></a>

File contents via `multipart/form-data`.

#### 🔄 Return<a id="🔄-return"></a>

[UsersSetPhotoResponse](./models/users-set-photo-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.setPhoto` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.setPresence`<a id="slackwebuserssetpresence"></a>

Manually sets user presence.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setPresenceResponse = await slackweb.users.setPresence({
  token: "token_example",
  presence: "presence_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users:write`

##### presence: `string`<a id="presence-string"></a>

Either `auto` or `away`

#### 🔄 Return<a id="🔄-return"></a>

[UsersSetPresenceResponse](./models/users-set-presence-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.setPresence` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.users.setProfileInfo`<a id="slackwebuserssetprofileinfo"></a>

Set the profile information for a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setProfileInfoResponse = await slackweb.users.setProfileInfo({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:write`

##### name: `string`<a id="name-string"></a>

Name of a single key to set. Usable only if `profile` is not passed.

##### profile: `string`<a id="profile-string"></a>

Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.

##### user: `string`<a id="user-string"></a>

ID of user to change. This argument may only be specified by team admins on paid teams.

##### value: `string`<a id="value-string"></a>

Value to set a single key to. Usable only if `profile` is not passed.

#### 🔄 Return<a id="🔄-return"></a>

[UsersprofileSetProfileInfoResponse](./models/usersprofile-set-profile-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.profile.set` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usersProfile.getProfileInfo`<a id="slackwebusersprofilegetprofileinfo"></a>

Retrieves a user's profile information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProfileInfoResponse = await slackweb.usersProfile.getProfileInfo({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:read`

##### includeLabels: `boolean`<a id="includelabels-boolean"></a>

Include labels for each ID in custom profile fields

##### user: `string`<a id="user-string"></a>

User to retrieve profile info for

#### 🔄 Return<a id="🔄-return"></a>

[UsersprofileGetProfileInfoResponse](./models/usersprofile-get-profile-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.profile.get` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.usersProfile.setProfileInfo`<a id="slackwebusersprofilesetprofileinfo"></a>

Set the profile information for a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setProfileInfoResponse = await slackweb.usersProfile.setProfileInfo({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `users.profile:write`

##### name: `string`<a id="name-string"></a>

Name of a single key to set. Usable only if `profile` is not passed.

##### profile: `string`<a id="profile-string"></a>

Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.

##### user: `string`<a id="user-string"></a>

ID of user to change. This argument may only be specified by team admins on paid teams.

##### value: `string`<a id="value-string"></a>

Value to set a single key to. Usable only if `profile` is not passed.

#### 🔄 Return<a id="🔄-return"></a>

[UsersprofileSetProfileInfoResponse](./models/usersprofile-set-profile-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.profile.set` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.views.open`<a id="slackwebviewsopen"></a>

Open a view for a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const openResponse = await slackweb.views.open({
  token: "token_example",
  triggerId: "triggerId_example",
  view: "view_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### triggerId: `string`<a id="triggerid-string"></a>

Exchange a trigger to post to the user.

##### view: `string`<a id="view-string"></a>

A [view payload](https://slack.dev). This must be a JSON-encoded string.

#### 🔄 Return<a id="🔄-return"></a>

[ViewsOpenResponse](./models/views-open-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/views.open` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.views.publish`<a id="slackwebviewspublish"></a>

Publish a static view for a User.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const publishResponse = await slackweb.views.publish({
  token: "token_example",
  userId: "userId_example",
  view: "view_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### userId: `string`<a id="userid-string"></a>

`id` of the user you want publish a view to.

##### view: `string`<a id="view-string"></a>

A [view payload](https://slack.dev). This must be a JSON-encoded string.

##### hash: `string`<a id="hash-string"></a>

A string that represents view state to protect against possible race conditions.

#### 🔄 Return<a id="🔄-return"></a>

[ViewsPublishResponse](./models/views-publish-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/views.publish` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.views.push`<a id="slackwebviewspush"></a>

Push a view onto the stack of a root view.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pushResponse = await slackweb.views.push({
  token: "token_example",
  triggerId: "triggerId_example",
  view: "view_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### triggerId: `string`<a id="triggerid-string"></a>

Exchange a trigger to post to the user.

##### view: `string`<a id="view-string"></a>

A [view payload](https://slack.dev). This must be a JSON-encoded string.

#### 🔄 Return<a id="🔄-return"></a>

[ViewsPushResponse](./models/views-push-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/views.push` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.views.update`<a id="slackwebviewsupdate"></a>

Update an existing view.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await slackweb.views.update({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `none`

##### viewId: `string`<a id="viewid-string"></a>

A unique identifier of the view to be updated. Either `view_id` or `external_id` is required.

##### externalId: `string`<a id="externalid-string"></a>

A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required.

##### view: `string`<a id="view-string"></a>

A [view object](https://slack.dev). This must be a JSON-encoded string.

##### hash: `string`<a id="hash-string"></a>

A string that represents view state to protect against possible race conditions.

#### 🔄 Return<a id="🔄-return"></a>

[ViewsUpdateResponse](./models/views-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/views.update` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.workflows.stepCompleted`<a id="slackwebworkflowsstepcompleted"></a>

Indicate that an app's step in a workflow completed execution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stepCompletedResponse = await slackweb.workflows.stepCompleted({
  token: "token_example",
  workflowStepExecuteId: "workflowStepExecuteId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `workflow.steps:execute`

##### workflowStepExecuteId: `string`<a id="workflowstepexecuteid-string"></a>

Context identifier that maps to the correct workflow step execution.

##### outputs: `string`<a id="outputs-string"></a>

Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](https://slack.dev) array from your `workflow_step` object.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowsStepCompletedResponse](./models/workflows-step-completed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflows.stepCompleted` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.workflows.stepFailed`<a id="slackwebworkflowsstepfailed"></a>

Indicate that an app's step in a workflow failed to execute.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stepFailedResponse = await slackweb.workflows.stepFailed({
  token: "token_example",
  workflowStepExecuteId: "workflowStepExecuteId_example",
  error: "error_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `workflow.steps:execute`

##### workflowStepExecuteId: `string`<a id="workflowstepexecuteid-string"></a>

Context identifier that maps to the correct workflow step execution.

##### error: `string`<a id="error-string"></a>

A JSON-based object with a `message` property that should contain a human readable error message.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowsStepFailedResponse](./models/workflows-step-failed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflows.stepFailed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `slackweb.workflows.updateStep`<a id="slackwebworkflowsupdatestep"></a>

Update the configuration for a workflow extension step.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStepResponse = await slackweb.workflows.updateStep({
  token: "token_example",
  workflowStepEditId: "workflowStepEditId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

Authentication token. Requires scope: `workflow.steps:execute`

##### workflowStepEditId: `string`<a id="workflowstepeditid-string"></a>

A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`.

##### inputs: `string`<a id="inputs-string"></a>

A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](https://slack.dev).

##### outputs: `string`<a id="outputs-string"></a>

An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed.

##### stepName: `string`<a id="stepname-string"></a>

An optional field that can be used to override the step name that is shown in the Workflow Builder.

##### stepImageUrl: `string`<a id="stepimageurl-string"></a>

An optional field that can be used to override app image that is shown in the Workflow Builder.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowsUpdateStepResponse](./models/workflows-update-step-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflows.updateStep` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
