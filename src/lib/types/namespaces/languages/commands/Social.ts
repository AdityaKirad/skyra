import type { ScheduleEntity } from '@lib/database';
import { FT, T } from '@lib/types';
import type { LanguageHelpDisplayOptions } from '@utils/LanguageHelp';
import type { Role, User } from 'discord.js';

export interface LevelTitles {
	experience: string;
	nextIn: string;
	level: string;
}

export interface ProfileTitles {
	globalRank: string;
	credits: string;
	reputation: string;
	experience: string;
	level: string;
}

export const AutoRoleAdd = FT<{ role: Role; points: number }, string>('commandAutoRoleAdd');
export const AutoRoleDescription = T<string>('commandAutoRoleDescription');
export const AutoRoleExtended = T<LanguageHelpDisplayOptions>('commandAutoRoleExtended');
export const AutoRoleListEmpty = T<string>('commandAutoRoleListEmpty');
export const AutoRolePointsRequired = T<string>('commandAutoRolePointsRequired');
export const AutoRoleRemove = FT<{ role: Role; before: number }, string>('commandAutoRoleRemove');
export const AutoRoleUnknownRole = FT<{ role: string }, string>('commandAutoRoleUnknownRole');
export const AutoRoleUpdate = FT<{ role: Role; points: number; before: number }, string>('commandAutoRoleUpdate');
export const AutoRoleUpdateConfigured = T<string>('commandAutoRoleUpdateConfigured');
export const AutoRoleUpdateUnconfigured = T<string>('commandAutoRoleUpdateUnconfigured');
export const Balance = FT<{ user: string; amount: string }, string>('commandBalance');
export const BalanceBots = T<string>('commandBalanceBots');
export const BalanceDescription = T<string>('commandBalanceDescription');
export const BalanceExtended = T<LanguageHelpDisplayOptions>('commandBalanceExtended');
export const BalanceSelf = FT<{ amount: string }, string>('commandBalanceSelf');
export const BannerBought = FT<{ prefix: string; banner: string }, string>('commandBannerBought');
export const BannerBuy = FT<{ banner: string }, string>('commandBannerBuy');
export const BannerDescription = T<string>('commandBannerDescription');
export const BannerExtended = T<LanguageHelpDisplayOptions>('commandBannerExtended');
export const BannerMissing = FT<{ type: string }, string>('commandBannerMissing');
export const BannerMoney = FT<{ money: number; cost: number }, string>('commandBannerMoney');
export const BannerNotexists = FT<{ prefix: string }, string>('commandBannerNotexists');
export const BannerPaymentCancelled = T<string>('commandBannerPaymentCancelled');
export const BannerPrompt = T<string>('commandBannerPrompt');
export const BannerReset = T<string>('commandBannerReset');
export const BannerResetDefault = T<string>('commandBannerResetDefault');
export const BannerSet = FT<{ banner: string }, string>('commandBannerSet');
export const BannerSetNotBought = T<string>('commandBannerSetNotBought');
export const BannerUserListEmpty = FT<{ prefix: string }, string>('commandBannerUserlistEmpty');
export const DailyCollect = T<string>('commandDailyCollect');
export const DailyDescription = T<string>('commandDailyDescription');
export const DailyExtended = T<LanguageHelpDisplayOptions>('commandDailyExtended');
export const DailyGrace = FT<{ remaining: number }, string[]>('commandDailyGrace');
export const DailyGraceAccepted = FT<{ amount: number; remaining: number }, string>('commandDailyGraceAccepted');
export const DailyGraceDenied = T<string>('commandDailyGraceDenied');
export const DailyTime = FT<{ time: number }, string>('commandDailyTime');
export const DailyTimeSuccess = FT<{ amount: number }, string>('commandDailyTimeSuccess');
export const DivorceCancel = T<string>('commandDivorceCancel');
export const DivorceDescription = T<string>('commandDivorceDescription');
export const DivorceDm = FT<{ user: string }, string>('commandDivorceDm');
export const DivorceExtended = T<LanguageHelpDisplayOptions>('commandDivorceExtended');
export const DivorceSelf = T<string>('commandDivorceSelf');
export const DivorceNotTaken = T<string>('commandDivorceNotTaken');
export const DivorcePrompt = T<string>('commandDivorcePrompt');
export const DivorceSuccess = FT<{ user: string }, string>('commandDivorceSuccess');
export const LeaderboardDescription = T<string>('commandLeaderboardDescription');
export const LeaderboardExtended = T<LanguageHelpDisplayOptions>('commandLeaderboardExtended');
export const Level = T<LevelTitles>('commandLevel');
export const LevelDescription = T<string>('commandLevelDescription');
export const LevelExtended = T<LanguageHelpDisplayOptions>('commandLevelExtended');
export const MarryAccepted = FT<{ author: User; user: User }, string>('commandMarryAccepted');
export const MarryAlreadyMarried = FT<{ user: User }, string>('commandMarryAlreadyMarried');
export const MarryAuthorMultipleCancel = FT<{ user: string }, string>('commandMarryAuthorMultipleCancel');
export const MarryAuthorTaken = FT<{ author: User }, string>('commandMarryAuthorTaken');
export const MarryAuthorTooMany = FT<{ limit: number }, string>('commandMarryAuthorTooMany');
export const MarryBots = T<string>('commandMarryBots');
export const MarryDenied = T<string>('commandMarryDenied');
export const MarryDescription = T<string>('commandMarryDescription');
export const MarryExtended = T<LanguageHelpDisplayOptions>('commandMarryExtended');
export const MarryMultipleCancel = T<string>('commandMarryMultipleCancel');
export const MarryNoreply = T<string>('commandMarryNoreply');
export const MarryNotTaken = T<string>('commandMarryNotTaken');
export const MarryPetition = FT<{ author: User; user: User }, string>('commandMarryPetition');
export const MarrySelf = T<string>('commandMarrySelf');
export const MarrySkyra = T<string>('commandMarrySkyra');
export const MarryAelia = T<string>('commandMarryAelia');
export const MarryTaken = FT<{ count: number }, string>('commandMarryTaken');
export const MarryTakenPlural = FT<{ count: number }, string>('commandMarryTakenPlural');
export const MarryTargetTooMany = FT<{ limit: number }, string>('commandMarryTargetTooMany');
export const MarryWith = FT<{ users: readonly string[] }, string>('commandMarryWith');
export const MarriedDescription = T<string>('commandMarriedDescription');
export const MarriedExtended = T<string>('commandMarriedExtended');
export const Mylevel = FT<{ points: number; next: string; user: string }, string>('commandMylevel');
export const MylevelDescription = T<string>('commandMylevelDescription');
export const MylevelExtended = T<LanguageHelpDisplayOptions>('commandMylevelExtended');
export const MylevelNext = FT<{ remaining: number; next: number }, string>('commandMylevelNext');
export const MylevelSelf = FT<{ points: number; next: string }, string>('commandMylevelSelf');
export const PayDescription = T<string>('commandPayDescription');
export const PayExtended = T<LanguageHelpDisplayOptions>('commandPayExtended');
export const PayMissingMoney = FT<{ needed: number; has: number }, string>('commandPayMissingMoney');
export const PayPrompt = FT<{ user: string; amount: number }, string>('commandPayPrompt');
export const PayPromptAccept = FT<{ user: string; amount: number }, string>('commandPayPromptAccept');
export const PayPromptDeny = T<string>('commandPayPromptDeny');
export const PaySelf = T<string>('commandPaySelf');
export const Profile = T<ProfileTitles>('commandProfile');
export const ProfileDescription = T<string>('commandProfileDescription');
export const ProfileExtended = T<LanguageHelpDisplayOptions>('commandProfileExtended');
export const RemindmeCreate = FT<{ id: string }, string>('commandRemindmeCreate');
export const RemindmeCreateNoDescription = T<string>('commandRemindmeCreateNoDescription');
export const RemindmeCreateNoDuration = T<string>('commandRemindmeCreateNoDuration');
export const RemindmeDelete = FT<{ task: ScheduleEntity; id: number }, string>('commandRemindmeDelete');
export const RemindmeDeleteNoId = T<string>('commandRemindmeDeleteNoId');
export const RemindmeDescription = T<string>('commandRemindmeDescription');
export const RemindmeExtended = T<LanguageHelpDisplayOptions>('commandRemindmeExtended');
export const RemindmeInvalidId = T<string>('commandRemindmeInvalidId');
export const RemindmeListEmpty = T<string>('commandRemindmeListEmpty');
export const RemindmeNotfound = T<string>('commandRemindmeNotfound');
export const RemindmeShowFooter = FT<{ id: number }, string>('commandRemindmeShowFooter');
export const Reputation = FT<{ count: number }, string>('commandReputation');
export const ReputationBots = T<string>('commandReputationBots');
export const ReputationDescription = T<string>('commandReputationDescription');
export const ReputationExtended = T<LanguageHelpDisplayOptions>('commandReputationExtended');
export const ReputationGive = FT<{ user: string }, string>('commandReputationGive');
export const ReputationPlural = FT<{ count: number }, string>('commandReputationPlural');
export const Reputations = FT<{ user: string; points: string }, string>('commandReputations');
export const ReputationsBots = T<string>('commandReputationsBots');
export const ReputationSelf = T<string>('commandReputationSelf');
export const ReputationsSelf = FT<{ points: number }, string>('commandReputationsSelf');
export const ReputationTime = FT<{ remaining: number }, string>('commandReputationTime');
export const ReputationUsable = T<string>('commandReputationUsable');
export const ReputationUserNotfound = T<string>('commandReputationUserNotfound');
export const SetColor = FT<{ color: string }, string>('commandSetColor');
export const SetColorDescription = T<string>('commandSetColorDescription');
export const SetColorExtended = T<LanguageHelpDisplayOptions>('commandSetColorExtended');
export const SocialAdd = FT<{ user: string; amount: number; count: number }, string>('commandSocialAdd');
export const SocialAddPlural = FT<{ user: string; amount: number; count: number }, string>('commandSocialAddPlural');
export const SocialDescription = T<string>('commandSocialDescription');
export const SocialExtended = T<LanguageHelpDisplayOptions>('commandSocialExtended');
export const SocialMemberNotexists = T<string>('commandSocialMemberNotexists');
export const SocialPayBot = T<string>('commandSocialPayBot');
export const SocialRemove = FT<{ user: string; amount: number; count: number }, string>('commandSocialRemove');
export const SocialRemovePlural = FT<{ user: string; amount: number; count: number }, string>('commandSocialRemovePlural');
export const SocialReset = FT<{ user: string }, string>('commandSocialReset');
export const SocialUnchanged = FT<{ user: string }, string>('commandSocialUnchanged');
export const ToggleDarkModeDescription = T<string>('commandToggleDarkModeDescription');
export const ToggleDarkModeDisabled = T<string>('commandToggleDarkModeDisabled');
export const ToggleDarkModeEnabled = T<string>('commandToggleDarkModeEnabled');
export const ToggleDarkModeExtended = T<LanguageHelpDisplayOptions>('commandToggleDarkModeExtended');
export const VaultDescription = T<string>('commandVaultDescription');
export const VaultEmbedData = FT<
	{
		coins?: number;
	},
	{
		depositedDescription: string;
		withdrewDescription: string;
		showDescription: string;
		accountMoney: string;
		accountVault: string;
	}
>('commandVaultEmbedData');
export const VaultExtended = T<LanguageHelpDisplayOptions>('commandVaultExtended');
export const VaultInvalidCoins = T<string>('commandVaultInvalidCoins');
export const VaultNotEnoughInVault = FT<{ vault: number }, string>('commandVaultNotEnoughInVault');
export const VaultNotEnoughMoney = FT<{ money: number }, string>('commandVaultNotEnoughMoney');
