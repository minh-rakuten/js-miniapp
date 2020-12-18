[js-miniapp-sdk](../README.md) › [MiniApp](miniapp.md)

# Class: MiniApp

## Hierarchy

* **MiniApp**

## Implements

* [MiniAppFeatures](../interfaces/miniappfeatures.md)
* [Ad](../interfaces/ad.md)
* [Platform](../interfaces/platform.md)

## Index

### Properties

* [user](miniapp.md#user)

### Methods

* [getPlatform](miniapp.md#getplatform)
* [getUniqueId](miniapp.md#getuniqueid)
* [loadInterstitialAd](miniapp.md#loadinterstitialad)
* [loadRewardedAd](miniapp.md#loadrewardedad)
* [requestCustomPermissions](miniapp.md#requestcustompermissions)
* [requestLocationPermission](miniapp.md#requestlocationpermission)
* [setScreenOrientation](miniapp.md#setscreenorientation)
* [shareInfo](miniapp.md#shareinfo)
* [showInterstitialAd](miniapp.md#showinterstitialad)
* [showRewardedAd](miniapp.md#showrewardedad)

## Properties

###  user

• **user**: *[UserInfoProvider](../interfaces/userinfoprovider.md)* = new UserInfo()

Defined in js-miniapp-sdk/src/miniapp.ts:170

## Methods

###  getPlatform

▸ **getPlatform**(): *string*

*Implementation of [Platform](../interfaces/platform.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:227

**Returns:** *string*

___

###  getUniqueId

▸ **getUniqueId**(): *Promise‹string›*

*Implementation of [MiniAppFeatures](../interfaces/miniappfeatures.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:176

**Returns:** *Promise‹string›*

___

###  loadInterstitialAd

▸ **loadInterstitialAd**(`id`: string): *Promise‹string›*

*Implementation of [Ad](../interfaces/ad.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:207

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹string›*

___

###  loadRewardedAd

▸ **loadRewardedAd**(`id`: string): *Promise‹string›*

*Implementation of [Ad](../interfaces/ad.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹string›*

___

###  requestCustomPermissions

▸ **requestCustomPermissions**(`permissions`: [CustomPermission](../interfaces/custompermission.md)[]): *Promise‹[CustomPermissionResult](../interfaces/custompermissionresult.md)[]›*

*Implementation of [MiniAppFeatures](../interfaces/miniappfeatures.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:199

**Parameters:**

Name | Type |
------ | ------ |
`permissions` | [CustomPermission](../interfaces/custompermission.md)[] |

**Returns:** *Promise‹[CustomPermissionResult](../interfaces/custompermissionresult.md)[]›*

___

###  requestLocationPermission

▸ **requestLocationPermission**(`permissionDescription`: string): *Promise‹string›*

*Implementation of [MiniAppFeatures](../interfaces/miniappfeatures.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:180

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`permissionDescription` | string | "" |

**Returns:** *Promise‹string›*

___

###  setScreenOrientation

▸ **setScreenOrientation**(`screenOrientation`: [ScreenOrientation](../enums/screenorientation.md)): *Promise‹string›*

*Implementation of [MiniAppFeatures](../interfaces/miniappfeatures.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`screenOrientation` | [ScreenOrientation](../enums/screenorientation.md) |

**Returns:** *Promise‹string›*

___

###  shareInfo

▸ **shareInfo**(`info`: [ShareInfoType](../interfaces/shareinfotype.md)): *Promise‹string›*

*Implementation of [MiniAppFeatures](../interfaces/miniappfeatures.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:223

**Parameters:**

Name | Type |
------ | ------ |
`info` | [ShareInfoType](../interfaces/shareinfotype.md) |

**Returns:** *Promise‹string›*

___

###  showInterstitialAd

▸ **showInterstitialAd**(`id`: string): *Promise‹string›*

*Implementation of [Ad](../interfaces/ad.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:215

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹string›*

___

###  showRewardedAd

▸ **showRewardedAd**(`id`: string): *Promise‹[Reward](../interfaces/reward.md)›*

*Implementation of [Ad](../interfaces/ad.md)*

Defined in js-miniapp-sdk/src/miniapp.ts:219

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[Reward](../interfaces/reward.md)›*