export enum ADMIN_ROLE {
  'ADMIN_FINANCE' = 'ADMIN_FINANCE',
  'ADMIN_LOGISTICS' = 'ADMIN_LOGISTICS',
  'ADMIN_NORMAL' = 'ADMIN_NORMAL',
  'ADMIN_OPERATION' = 'ADMIN_OPERATION',
  'ADMIN_SUPER' = 'ADMIN_SUPER',
}
export const CONST_ADMIN_ROLE = Object.values(ADMIN_ROLE);

export enum ADMIN_STATUS {
  'APPROVAL' = 'APPROVAL',
  'DELETED' = 'DELETED',
  'DENIED' = 'DENIED',
  'REFUSED' = 'REFUSED',
  'REREQUEST' = 'REREQUEST',
  'WAITING' = 'WAITING',
}
export const CONST_ADMIN_STATUS = Object.values(ADMIN_STATUS);

export enum APPROVED_STATUS {
  'APPROVAL' = 'APPROVAL',
  'DELETED' = 'DELETED',
  'OUT_OF_STOCK' = 'OUT_OF_STOCK',
  'REFUSED' = 'REFUSED',
  'WAITING' = 'WAITING',
}
export const CONST_APPROVED_STATUS = Object.values(APPROVED_STATUS);

export enum B2LINK_DEPT {
  'B2LABS' = 'B2LABS',
  'CBT' = 'CBT',
  'GS' = 'GS',
  'OTHERS' = 'OTHERS',
  'UO' = 'UO',
  'USP' = 'USP',
}
export const CONST_B2LINK_DEPT = Object.values(B2LINK_DEPT);

export enum BADGE_TYPE {
  'BEST' = 'BEST',
}
export const CONST_BADGE_TYPE = Object.values(BADGE_TYPE);

export enum BANNER_TYPE {
  'BRAND' = 'BRAND',
  'UMMA_BEAUTY' = 'UMMA_BEAUTY',
  'VISUAL' = 'VISUAL',
}
export const CONST_BANNER_TYPE = Object.values(BANNER_TYPE);

export enum BIZ_TYPE_RETAIL {
  'OFFLINE_BEAUTY_SALON' = 'OFFLINE_BEAUTY_SALON',
  'OFFLINE_COSMETICS_STORE' = 'OFFLINE_COSMETICS_STORE',
  'OFFLINE_MOM_&_POP' = 'OFFLINE_MOM_&_POP',
  'OFFLINE_SUPERMARKET' = 'OFFLINE_SUPERMARKET',
  'ONLINE_INFLUENCER' = 'ONLINE_INFLUENCER',
  'ONLINE_OPEN_MARKET' = 'ONLINE_OPEN_MARKET',
  'ONLINE_SOHO_MALL' = 'ONLINE_SOHO_MALL',
}
export const CONST_BIZ_TYPE_RETAIL = Object.values(BIZ_TYPE_RETAIL);

export enum BIZ_TYPE_WHOLE {
  'OFFLINE_BEAUTY_SALON' = 'OFFLINE_BEAUTY_SALON',
  'OFFLINE_COSMETICS_STORE' = 'OFFLINE_COSMETICS_STORE',
  'OFFLINE_MOM_&_POP' = 'OFFLINE_MOM_&_POP',
  'OFFLINE_SUPERMARKET' = 'OFFLINE_SUPERMARKET',
  'ONLINE_INFLUENCER' = 'ONLINE_INFLUENCER',
  'ONLINE_OPEN_MARKET' = 'ONLINE_OPEN_MARKET',
  'ONLINE_SOHO_MALL' = 'ONLINE_SOHO_MALL',
}
export const CONST_BIZ_TYPE_WHOLE = Object.values(BIZ_TYPE_WHOLE);

export enum BIZ_VOLUME {
  'LEVEL0' = 'LEVEL0',
  'LEVEL1' = 'LEVEL1',
  'LEVEL2' = 'LEVEL2',
  'LEVEL3' = 'LEVEL3',
  'LEVEL4' = 'LEVEL4',
  'LEVEL5' = 'LEVEL5',
  'LEVEL6' = 'LEVEL6',
  'LEVEL7' = 'LEVEL7',
  'LEVEL8' = 'LEVEL8',
  'LEVEL9' = 'LEVEL9',
}
export const CONST_BIZ_VOLUME = Object.values(BIZ_VOLUME);

export enum BRAND_STATUS {
  'APPROVAL' = 'APPROVAL',
  'DELETED' = 'DELETED',
  'WAITING' = 'WAITING',
}
export const CONST_BRAND_STATUS = Object.values(BRAND_STATUS);

export enum BUSINESS_TYPE {
  'BOTH' = 'BOTH',
  'RETAILER' = 'RETAILER',
  'WHOLESALE' = 'WHOLESALE',
}
export const CONST_BUSINESS_TYPE = Object.values(BUSINESS_TYPE);

export enum BUYER_COMPANY_STATUS {
  'APPROVAL' = 'APPROVAL',
  'EXPIRED' = 'EXPIRED',
  'OUT' = 'OUT',
  'REFUSE_REQUEST' = 'REFUSE_REQUEST',
  'REFUSE_SIGNUP' = 'REFUSE_SIGNUP',
  'UPDATE_REQUEST' = 'UPDATE_REQUEST',
  'WAITING' = 'WAITING',
}
export const CONST_BUYER_COMPANY_STATUS = Object.values(BUYER_COMPANY_STATUS);

export enum USER_ROLE {
  'USER_APPROVED' = 'USER_APPROVED',
  'USER_NOT_APPROVED' = 'USER_NOT_APPROVED',
}
export const CONST_USER_ROLE = Object.values(USER_ROLE);

export enum USER_STATUS {
  'APPROVAL' = 'APPROVAL',
  'DELETED' = 'DELETED',
  'DENIED' = 'DENIED',
  'REFUSED' = 'REFUSED',
  'REREQUEST' = 'REREQUEST',
  'WAITING' = 'WAITING',
}
export const CONST_USER_STATUS = Object.values(USER_STATUS);

export enum CAPACITY_UNIT_TYPE {
  'G' = 'G',
  'GML' = 'GML',
  'ML' = 'ML',
}
export const CONST_CAPACITY_UNIT_TYPE = Object.values(CAPACITY_UNIT_TYPE);

export enum CERTIFICATION_TYPE {
  'AUSTRALIAN_CERTIFIED_ORGANIC' = 'AUSTRALIAN_CERTIFIED_ORGANIC',
  'BANNED_SUBSTANCES_CONTROL_GROUP_BSCG' = 'BANNED_SUBSTANCES_CONTROL_GROUP_BSCG',
  'BFC' = 'BFC',
  'BPA_FREE' = 'BPA_FREE',
  'CCIC_CRUELTY_FREE' = 'CCIC_CRUELTY_FREE',
  'CCOF_ORGANIC' = 'CCOF_ORGANIC',
  'CERTIFIED_ORGANIC' = 'CERTIFIED_ORGANIC',
  'CHOOSE_CRUELTY_FREE' = 'CHOOSE_CRUELTY_FREE',
  'CODEX_GMP' = 'CODEX_GMP',
  'COSMOS_STANDARD' = 'COSMOS_STANDARD',
  'DESIGNLIGHTS_CONSORTIUM_DLC_CERTIFICATION' = 'DESIGNLIGHTS_CONSORTIUM_DLC_CERTIFICATION',
  'ECOCERT' = 'ECOCERT',
  'EWG_VERIFIED' = 'EWG_VERIFIED',
  'FAIR_TRADE_CERTIFIED' = 'FAIR_TRADE_CERTIFIED',
  'FDA_ANTIBIOTIC_FREE' = 'FDA_ANTIBIOTIC_FREE',
  'GENERALLY_RECOGNIZED_AS_SAFE_GRAS' = 'GENERALLY_RECOGNIZED_AS_SAFE_GRAS',
  'GLOBAL_CERTIFICATION_SERVICE_LTD' = 'GLOBAL_CERTIFICATION_SERVICE_LTD',
  'GLUTEN_REDUCED_CERTIFIED' = 'GLUTEN_REDUCED_CERTIFIED',
  'HALAL_CERTIFICATION' = 'HALAL_CERTIFICATION',
  'HEALTH_CANADA' = 'HEALTH_CANADA',
  'ISO_22716_2007' = 'ISO_22716_2007',
  'LEAPING_BUNNY_APPROVED' = 'LEAPING_BUNNY_APPROVED',
  'MADE_SAFE' = 'MADE_SAFE',
  'NON_GMO_TESTED' = 'NON_GMO_TESTED',
  'NPA_NATURAL_SEAL_PERSONAL_CARE' = 'NPA_NATURAL_SEAL_PERSONAL_CARE',
  'NSF_ANSI_305' = 'NSF_ANSI_305',
  'NSF_GMP' = 'NSF_GMP',
  'NSF_NON_GMO' = 'NSF_NON_GMO',
  'PALEO_CERTIFIED' = 'PALEO_CERTIFIED',
  'PDO_PROTECTED_DESIGNATION_OF_ORIGIN' = 'PDO_PROTECTED_DESIGNATION_OF_ORIGIN',
  'PEFC' = 'PEFC',
  'PETA_CRUELTY_FREE' = 'PETA_CRUELTY_FREE',
  'PETA_CRUELTY_FREE_AND_VEGAN' = 'PETA_CRUELTY_FREE_AND_VEGAN',
  'PFOA_FREE' = 'PFOA_FREE',
  'SEDEX_CERTIFIED' = 'SEDEX_CERTIFIED',
  'SGS_PRODUCT_CERTIFIED' = 'SGS_PRODUCT_CERTIFIED',
  'THE_GREEN_GOOD_HOUSEKEEPING_SEAL' = 'THE_GREEN_GOOD_HOUSEKEEPING_SEAL',
  'UL_CERTIFICATION' = 'UL_CERTIFICATION',
  'US_HALAL_CERTIFICATION' = 'US_HALAL_CERTIFICATION',
  'USDA_BIOPREFERRED' = 'USDA_BIOPREFERRED',
  'USDA_CERTIFIED_BIOBASED_PRODUCT' = 'USDA_CERTIFIED_BIOBASED_PRODUCT',
  'USDA_ORGANIC' = 'USDA_ORGANIC',
  'VEGAN_CERTIFIED' = 'VEGAN_CERTIFIED',
}
export const CONST_CERTIFICATION_TYPE = Object.values(CERTIFICATION_TYPE);

export enum EXCHANGE_TYPE {
  'BUY' = 'BUY',
  'SELL' = 'SELL',
}
export const CONST_EXCHANGE_TYPE = Object.values(EXCHANGE_TYPE);

export enum INCOTERMS {
  'CFR' = 'CFR',
  'CIF' = 'CIF',
  'CIP' = 'CIP',
  'CPT' = 'CPT',
  'DAP' = 'DAP',
  'DAT' = 'DAT',
  'DDP' = 'DDP',
  'DDU' = 'DDU',
  'EXW' = 'EXW',
  'FAS' = 'FAS',
  'FCA' = 'FCA',
  'FOB' = 'FOB',
}
export const CONST_INCOTERMS = Object.values(INCOTERMS);

export enum INQUIRY_TYPE {
  'DELIVERY' = 'DELIVERY',
  'ETC' = 'ETC',
  'ORDER' = 'ORDER',
  'PARTNERSHIP' = 'PARTNERSHIP',
  'PAYMENT' = 'PAYMENT',
  'PRODUCT' = 'PRODUCT',
  'SIGNUP' = 'SIGNUP',
  'SYSTEM' = 'SYSTEM',
}
export const CONST_INQUIRY_TYPE = Object.values(INQUIRY_TYPE);

export enum K_BIZ_SCALE {
  'LEVEL0' = 'LEVEL0',
  'LEVEL1' = 'LEVEL1',
  'LEVEL2' = 'LEVEL2',
  'LEVEL3' = 'LEVEL3',
  'LEVEL4' = 'LEVEL4',
  'LEVEL5' = 'LEVEL5',
  'LEVEL6' = 'LEVEL6',
  'LEVEL7' = 'LEVEL7',
  'LEVEL8' = 'LEVEL8',
}
export const CONST_K_BIZ_SCALE = Object.values(K_BIZ_SCALE);

export enum MSDS_POSSESSION_STATUS {
  'IN_POSSESSION' = 'IN_POSSESSION',
  'NOT_IN_POSSESSION' = 'NOT_IN_POSSESSION',
}
export const CONST_MSDS_POSSESSION_STATUS = Object.values(
  MSDS_POSSESSION_STATUS,
);

export enum NOTICE_TYPE {
  'BUYER_NOTICE' = 'BUYER_NOTICE',
}
export const CONST_NOTICE_TYPE = Object.values(NOTICE_TYPE);

export enum PAYMENT_METHOD {
  'ALL_DEBIT' = 'ALL_DEBIT',
  'PAYPAL' = 'PAYPAL',
  'TT' = 'TT',
}
export const CONST_PAYMENT_METHOD = Object.values(PAYMENT_METHOD);

export enum PAYMENT_STATUS {
  'CANCEL' = 'CANCEL',
  'COMPLETE' = 'COMPLETE',
  'WAITING' = 'WAITING',
}
export const CONST_PAYMENT_STATUS = Object.values(PAYMENT_STATUS);

export enum PAYMENT_TYPE {
  'PAY' = 'PAY',
  'REFUND' = 'REFUND',
}
export const CONST_PAYMENT_TYPE = Object.values(PAYMENT_TYPE);

export enum PRODUCT_OPTION_TYPE {
  'COMPOSITE' = 'COMPOSITE',
  'SINGLE' = 'SINGLE',
}
export const CONST_PRODUCT_OPTION_TYPE = Object.values(PRODUCT_OPTION_TYPE);

export enum PRODUCT_TYPE {
  'OPTION' = 'OPTION',
  'SINGLE' = 'SINGLE',
}
export const CONST_PRODUCT_TYPE = Object.values(PRODUCT_TYPE);

export enum PURCHASE_ORDER_STATUS {
  'CANCEL' = 'CANCEL',
  'COMPLETE' = 'COMPLETE',
  'PAID' = 'PAID',
  'WAITING' = 'WAITING',
}
export const CONST_PURCHASE_ORDER_STATUS = Object.values(PURCHASE_ORDER_STATUS);

export enum REFUSE_TYPE {
  'ADDRESS' = 'ADDRESS',
  'CEO_NAME' = 'CEO_NAME',
  'COMPANY_NAME' = 'COMPANY_NAME',
  'ETC' = 'ETC',
  'TELEPHONE' = 'TELEPHONE',
}
export const CONST_REFUSE_TYPE = Object.values(REFUSE_TYPE);

export enum SHIPPING_STATUS {
  'CANCEL' = 'CANCEL',
  'COMPLETE' = 'COMPLETE',
  'WAITING' = 'WAITING',
}
export const CONST_SHIPPING_STATUS = Object.values(SHIPPING_STATUS);

export enum WEIGHT_TYPE {
  'ABSOLUTE' = 'ABSOLUTE',
  'MULTIPLE' = 'MULTIPLE',
}
export const CONST_WEIGHT_TYPE = Object.values(WEIGHT_TYPE);

export enum WITHDRAW_PERSONAL_TYPE {
  'EXPOSURE' = 'EXPOSURE',
  'REAPPLY' = 'REAPPLY',
}
export const CONST_WITHDRAW_PERSONAL_TYPE = Object.values(
  WITHDRAW_PERSONAL_TYPE,
);

export enum WITHDRAWAL_SERVICE_TYPE {
  'CUSTOMER_SERVICE' = 'CUSTOMER_SERVICE',
  'LATE_DELIVERY' = 'LATE_DELIVERY',
  'OTHER_B2B_SERVICE' = 'OTHER_B2B_SERVICE',
  'REFUND_EXCHANGE' = 'REFUND_EXCHANGE',
}
export const CONST_WITHDRAWAL_SERVICE_TYPE = Object.values(
  WITHDRAWAL_SERVICE_TYPE,
);

export enum WITHDRAWAL_SITE_TYPE {
  'BUYER_BENEFIT' = 'BUYER_BENEFIT',
  'LOW_USAGE' = 'LOW_USAGE',
  'PRODUCT_PRICE' = 'PRODUCT_PRICE',
}
export const CONST_WITHDRAWAL_SITE_TYPE = Object.values(WITHDRAWAL_SITE_TYPE);
