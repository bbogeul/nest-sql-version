"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ADMIN_ROLE;
(function (ADMIN_ROLE) {
    ADMIN_ROLE["ADMIN_FINANCE"] = "ADMIN_FINANCE";
    ADMIN_ROLE["ADMIN_LOGISTICS"] = "ADMIN_LOGISTICS";
    ADMIN_ROLE["ADMIN_NORMAL"] = "ADMIN_NORMAL";
    ADMIN_ROLE["ADMIN_OPERATION"] = "ADMIN_OPERATION";
    ADMIN_ROLE["ADMIN_SUPER"] = "ADMIN_SUPER";
})(ADMIN_ROLE = exports.ADMIN_ROLE || (exports.ADMIN_ROLE = {}));
exports.CONST_ADMIN_ROLE = Object.values(ADMIN_ROLE);
var ADMIN_STATUS;
(function (ADMIN_STATUS) {
    ADMIN_STATUS["APPROVAL"] = "APPROVAL";
    ADMIN_STATUS["DELETED"] = "DELETED";
    ADMIN_STATUS["DENIED"] = "DENIED";
    ADMIN_STATUS["REFUSED"] = "REFUSED";
    ADMIN_STATUS["REREQUEST"] = "REREQUEST";
    ADMIN_STATUS["WAITING"] = "WAITING";
})(ADMIN_STATUS = exports.ADMIN_STATUS || (exports.ADMIN_STATUS = {}));
exports.CONST_ADMIN_STATUS = Object.values(ADMIN_STATUS);
var APPROVED_STATUS;
(function (APPROVED_STATUS) {
    APPROVED_STATUS["APPROVAL"] = "APPROVAL";
    APPROVED_STATUS["DELETED"] = "DELETED";
    APPROVED_STATUS["OUT_OF_STOCK"] = "OUT_OF_STOCK";
    APPROVED_STATUS["REFUSED"] = "REFUSED";
    APPROVED_STATUS["WAITING"] = "WAITING";
})(APPROVED_STATUS = exports.APPROVED_STATUS || (exports.APPROVED_STATUS = {}));
exports.CONST_APPROVED_STATUS = Object.values(APPROVED_STATUS);
var PRIVACY_POLICY_CATEGORY;
(function (PRIVACY_POLICY_CATEGORY) {
    PRIVACY_POLICY_CATEGORY["HEADER"] = "HEADER";
    PRIVACY_POLICY_CATEGORY["CONTENT"] = "CONTENT";
})(PRIVACY_POLICY_CATEGORY = exports.PRIVACY_POLICY_CATEGORY || (exports.PRIVACY_POLICY_CATEGORY = {}));
exports.CONST_PRIVACY_POLICY_CATEGORY = Object.values(PRIVACY_POLICY_CATEGORY);
var STUDENT_ROLE;
(function (STUDENT_ROLE) {
    STUDENT_ROLE["STUDENT_ROLE_APPROVED"] = "STUDENT_ROLE_APPROVED";
    STUDENT_ROLE["STUDENT_ROLE_NOT_APPROVED"] = "STUDENT_ROLE_NOT_APPROVED";
})(STUDENT_ROLE = exports.STUDENT_ROLE || (exports.STUDENT_ROLE = {}));
exports.CONST_USER_ROLE = Object.values(STUDENT_ROLE);
var STUDENT_ROLE_STATUS;
(function (STUDENT_ROLE_STATUS) {
    STUDENT_ROLE_STATUS["APPROVAL"] = "APPROVAL";
    STUDENT_ROLE_STATUS["DELETED"] = "DELETED";
    STUDENT_ROLE_STATUS["DENIED"] = "DENIED";
    STUDENT_ROLE_STATUS["REFUSED"] = "REFUSED";
    STUDENT_ROLE_STATUS["REREQUEST"] = "REREQUEST";
    STUDENT_ROLE_STATUS["WAITING"] = "WAITING";
})(STUDENT_ROLE_STATUS = exports.STUDENT_ROLE_STATUS || (exports.STUDENT_ROLE_STATUS = {}));
exports.CONST_STUDENT_ROLE_STATUS = Object.values(STUDENT_ROLE_STATUS);
var CAPACITY_UNIT_TYPE;
(function (CAPACITY_UNIT_TYPE) {
    CAPACITY_UNIT_TYPE["G"] = "G";
    CAPACITY_UNIT_TYPE["GML"] = "GML";
    CAPACITY_UNIT_TYPE["ML"] = "ML";
})(CAPACITY_UNIT_TYPE = exports.CAPACITY_UNIT_TYPE || (exports.CAPACITY_UNIT_TYPE = {}));
exports.CONST_CAPACITY_UNIT_TYPE = Object.values(CAPACITY_UNIT_TYPE);
var CERTIFICATION_TYPE;
(function (CERTIFICATION_TYPE) {
    CERTIFICATION_TYPE["AUSTRALIAN_CERTIFIED_ORGANIC"] = "AUSTRALIAN_CERTIFIED_ORGANIC";
    CERTIFICATION_TYPE["BANNED_SUBSTANCES_CONTROL_GROUP_BSCG"] = "BANNED_SUBSTANCES_CONTROL_GROUP_BSCG";
    CERTIFICATION_TYPE["BFC"] = "BFC";
    CERTIFICATION_TYPE["BPA_FREE"] = "BPA_FREE";
    CERTIFICATION_TYPE["CCIC_CRUELTY_FREE"] = "CCIC_CRUELTY_FREE";
    CERTIFICATION_TYPE["CCOF_ORGANIC"] = "CCOF_ORGANIC";
    CERTIFICATION_TYPE["CERTIFIED_ORGANIC"] = "CERTIFIED_ORGANIC";
    CERTIFICATION_TYPE["CHOOSE_CRUELTY_FREE"] = "CHOOSE_CRUELTY_FREE";
    CERTIFICATION_TYPE["CODEX_GMP"] = "CODEX_GMP";
    CERTIFICATION_TYPE["COSMOS_STANDARD"] = "COSMOS_STANDARD";
    CERTIFICATION_TYPE["DESIGNLIGHTS_CONSORTIUM_DLC_CERTIFICATION"] = "DESIGNLIGHTS_CONSORTIUM_DLC_CERTIFICATION";
    CERTIFICATION_TYPE["ECOCERT"] = "ECOCERT";
    CERTIFICATION_TYPE["EWG_VERIFIED"] = "EWG_VERIFIED";
    CERTIFICATION_TYPE["FAIR_TRADE_CERTIFIED"] = "FAIR_TRADE_CERTIFIED";
    CERTIFICATION_TYPE["FDA_ANTIBIOTIC_FREE"] = "FDA_ANTIBIOTIC_FREE";
    CERTIFICATION_TYPE["GENERALLY_RECOGNIZED_AS_SAFE_GRAS"] = "GENERALLY_RECOGNIZED_AS_SAFE_GRAS";
    CERTIFICATION_TYPE["GLOBAL_CERTIFICATION_SERVICE_LTD"] = "GLOBAL_CERTIFICATION_SERVICE_LTD";
    CERTIFICATION_TYPE["GLUTEN_REDUCED_CERTIFIED"] = "GLUTEN_REDUCED_CERTIFIED";
    CERTIFICATION_TYPE["HALAL_CERTIFICATION"] = "HALAL_CERTIFICATION";
    CERTIFICATION_TYPE["HEALTH_CANADA"] = "HEALTH_CANADA";
    CERTIFICATION_TYPE["ISO_22716_2007"] = "ISO_22716_2007";
    CERTIFICATION_TYPE["LEAPING_BUNNY_APPROVED"] = "LEAPING_BUNNY_APPROVED";
    CERTIFICATION_TYPE["MADE_SAFE"] = "MADE_SAFE";
    CERTIFICATION_TYPE["NON_GMO_TESTED"] = "NON_GMO_TESTED";
    CERTIFICATION_TYPE["NPA_NATURAL_SEAL_PERSONAL_CARE"] = "NPA_NATURAL_SEAL_PERSONAL_CARE";
    CERTIFICATION_TYPE["NSF_ANSI_305"] = "NSF_ANSI_305";
    CERTIFICATION_TYPE["NSF_GMP"] = "NSF_GMP";
    CERTIFICATION_TYPE["NSF_NON_GMO"] = "NSF_NON_GMO";
    CERTIFICATION_TYPE["PALEO_CERTIFIED"] = "PALEO_CERTIFIED";
    CERTIFICATION_TYPE["PDO_PROTECTED_DESIGNATION_OF_ORIGIN"] = "PDO_PROTECTED_DESIGNATION_OF_ORIGIN";
    CERTIFICATION_TYPE["PEFC"] = "PEFC";
    CERTIFICATION_TYPE["PETA_CRUELTY_FREE"] = "PETA_CRUELTY_FREE";
    CERTIFICATION_TYPE["PETA_CRUELTY_FREE_AND_VEGAN"] = "PETA_CRUELTY_FREE_AND_VEGAN";
    CERTIFICATION_TYPE["PFOA_FREE"] = "PFOA_FREE";
    CERTIFICATION_TYPE["SEDEX_CERTIFIED"] = "SEDEX_CERTIFIED";
    CERTIFICATION_TYPE["SGS_PRODUCT_CERTIFIED"] = "SGS_PRODUCT_CERTIFIED";
    CERTIFICATION_TYPE["THE_GREEN_GOOD_HOUSEKEEPING_SEAL"] = "THE_GREEN_GOOD_HOUSEKEEPING_SEAL";
    CERTIFICATION_TYPE["UL_CERTIFICATION"] = "UL_CERTIFICATION";
    CERTIFICATION_TYPE["US_HALAL_CERTIFICATION"] = "US_HALAL_CERTIFICATION";
    CERTIFICATION_TYPE["USDA_BIOPREFERRED"] = "USDA_BIOPREFERRED";
    CERTIFICATION_TYPE["USDA_CERTIFIED_BIOBASED_PRODUCT"] = "USDA_CERTIFIED_BIOBASED_PRODUCT";
    CERTIFICATION_TYPE["USDA_ORGANIC"] = "USDA_ORGANIC";
    CERTIFICATION_TYPE["VEGAN_CERTIFIED"] = "VEGAN_CERTIFIED";
})(CERTIFICATION_TYPE = exports.CERTIFICATION_TYPE || (exports.CERTIFICATION_TYPE = {}));
exports.CONST_CERTIFICATION_TYPE = Object.values(CERTIFICATION_TYPE);
var EXCHANGE_TYPE;
(function (EXCHANGE_TYPE) {
    EXCHANGE_TYPE["BUY"] = "BUY";
    EXCHANGE_TYPE["SELL"] = "SELL";
})(EXCHANGE_TYPE = exports.EXCHANGE_TYPE || (exports.EXCHANGE_TYPE = {}));
exports.CONST_EXCHANGE_TYPE = Object.values(EXCHANGE_TYPE);
var INCOTERMS;
(function (INCOTERMS) {
    INCOTERMS["CFR"] = "CFR";
    INCOTERMS["CIF"] = "CIF";
    INCOTERMS["CIP"] = "CIP";
    INCOTERMS["CPT"] = "CPT";
    INCOTERMS["DAP"] = "DAP";
    INCOTERMS["DAT"] = "DAT";
    INCOTERMS["DDP"] = "DDP";
    INCOTERMS["DDU"] = "DDU";
    INCOTERMS["EXW"] = "EXW";
    INCOTERMS["FAS"] = "FAS";
    INCOTERMS["FCA"] = "FCA";
    INCOTERMS["FOB"] = "FOB";
})(INCOTERMS = exports.INCOTERMS || (exports.INCOTERMS = {}));
exports.CONST_INCOTERMS = Object.values(INCOTERMS);
var INQUIRY_TYPE;
(function (INQUIRY_TYPE) {
    INQUIRY_TYPE["DELIVERY"] = "DELIVERY";
    INQUIRY_TYPE["ETC"] = "ETC";
    INQUIRY_TYPE["ORDER"] = "ORDER";
    INQUIRY_TYPE["PARTNERSHIP"] = "PARTNERSHIP";
    INQUIRY_TYPE["PAYMENT"] = "PAYMENT";
    INQUIRY_TYPE["PRODUCT"] = "PRODUCT";
    INQUIRY_TYPE["SIGNUP"] = "SIGNUP";
    INQUIRY_TYPE["SYSTEM"] = "SYSTEM";
})(INQUIRY_TYPE = exports.INQUIRY_TYPE || (exports.INQUIRY_TYPE = {}));
exports.CONST_INQUIRY_TYPE = Object.values(INQUIRY_TYPE);
var K_BIZ_SCALE;
(function (K_BIZ_SCALE) {
    K_BIZ_SCALE["LEVEL0"] = "LEVEL0";
    K_BIZ_SCALE["LEVEL1"] = "LEVEL1";
    K_BIZ_SCALE["LEVEL2"] = "LEVEL2";
    K_BIZ_SCALE["LEVEL3"] = "LEVEL3";
    K_BIZ_SCALE["LEVEL4"] = "LEVEL4";
    K_BIZ_SCALE["LEVEL5"] = "LEVEL5";
    K_BIZ_SCALE["LEVEL6"] = "LEVEL6";
    K_BIZ_SCALE["LEVEL7"] = "LEVEL7";
    K_BIZ_SCALE["LEVEL8"] = "LEVEL8";
})(K_BIZ_SCALE = exports.K_BIZ_SCALE || (exports.K_BIZ_SCALE = {}));
exports.CONST_K_BIZ_SCALE = Object.values(K_BIZ_SCALE);
var MSDS_POSSESSION_STATUS;
(function (MSDS_POSSESSION_STATUS) {
    MSDS_POSSESSION_STATUS["IN_POSSESSION"] = "IN_POSSESSION";
    MSDS_POSSESSION_STATUS["NOT_IN_POSSESSION"] = "NOT_IN_POSSESSION";
})(MSDS_POSSESSION_STATUS = exports.MSDS_POSSESSION_STATUS || (exports.MSDS_POSSESSION_STATUS = {}));
exports.CONST_MSDS_POSSESSION_STATUS = Object.values(MSDS_POSSESSION_STATUS);
var NOTICE_TYPE;
(function (NOTICE_TYPE) {
    NOTICE_TYPE["BUYER_NOTICE"] = "BUYER_NOTICE";
})(NOTICE_TYPE = exports.NOTICE_TYPE || (exports.NOTICE_TYPE = {}));
exports.CONST_NOTICE_TYPE = Object.values(NOTICE_TYPE);
var PAYMENT_METHOD;
(function (PAYMENT_METHOD) {
    PAYMENT_METHOD["ALL_DEBIT"] = "ALL_DEBIT";
    PAYMENT_METHOD["PAYPAL"] = "PAYPAL";
    PAYMENT_METHOD["TT"] = "TT";
})(PAYMENT_METHOD = exports.PAYMENT_METHOD || (exports.PAYMENT_METHOD = {}));
exports.CONST_PAYMENT_METHOD = Object.values(PAYMENT_METHOD);
var PAYMENT_STATUS;
(function (PAYMENT_STATUS) {
    PAYMENT_STATUS["CANCEL"] = "CANCEL";
    PAYMENT_STATUS["COMPLETE"] = "COMPLETE";
    PAYMENT_STATUS["WAITING"] = "WAITING";
})(PAYMENT_STATUS = exports.PAYMENT_STATUS || (exports.PAYMENT_STATUS = {}));
exports.CONST_PAYMENT_STATUS = Object.values(PAYMENT_STATUS);
var PAYMENT_TYPE;
(function (PAYMENT_TYPE) {
    PAYMENT_TYPE["PAY"] = "PAY";
    PAYMENT_TYPE["REFUND"] = "REFUND";
})(PAYMENT_TYPE = exports.PAYMENT_TYPE || (exports.PAYMENT_TYPE = {}));
exports.CONST_PAYMENT_TYPE = Object.values(PAYMENT_TYPE);
var PRODUCT_OPTION_TYPE;
(function (PRODUCT_OPTION_TYPE) {
    PRODUCT_OPTION_TYPE["COMPOSITE"] = "COMPOSITE";
    PRODUCT_OPTION_TYPE["SINGLE"] = "SINGLE";
})(PRODUCT_OPTION_TYPE = exports.PRODUCT_OPTION_TYPE || (exports.PRODUCT_OPTION_TYPE = {}));
exports.CONST_PRODUCT_OPTION_TYPE = Object.values(PRODUCT_OPTION_TYPE);
var PRODUCT_TYPE;
(function (PRODUCT_TYPE) {
    PRODUCT_TYPE["OPTION"] = "OPTION";
    PRODUCT_TYPE["SINGLE"] = "SINGLE";
})(PRODUCT_TYPE = exports.PRODUCT_TYPE || (exports.PRODUCT_TYPE = {}));
exports.CONST_PRODUCT_TYPE = Object.values(PRODUCT_TYPE);
var PURCHASE_ORDER_STATUS;
(function (PURCHASE_ORDER_STATUS) {
    PURCHASE_ORDER_STATUS["CANCEL"] = "CANCEL";
    PURCHASE_ORDER_STATUS["COMPLETE"] = "COMPLETE";
    PURCHASE_ORDER_STATUS["PAID"] = "PAID";
    PURCHASE_ORDER_STATUS["WAITING"] = "WAITING";
})(PURCHASE_ORDER_STATUS = exports.PURCHASE_ORDER_STATUS || (exports.PURCHASE_ORDER_STATUS = {}));
exports.CONST_PURCHASE_ORDER_STATUS = Object.values(PURCHASE_ORDER_STATUS);
var REFUSE_TYPE;
(function (REFUSE_TYPE) {
    REFUSE_TYPE["ADDRESS"] = "ADDRESS";
    REFUSE_TYPE["CEO_NAME"] = "CEO_NAME";
    REFUSE_TYPE["COMPANY_NAME"] = "COMPANY_NAME";
    REFUSE_TYPE["ETC"] = "ETC";
    REFUSE_TYPE["TELEPHONE"] = "TELEPHONE";
})(REFUSE_TYPE = exports.REFUSE_TYPE || (exports.REFUSE_TYPE = {}));
exports.CONST_REFUSE_TYPE = Object.values(REFUSE_TYPE);
var SHIPPING_STATUS;
(function (SHIPPING_STATUS) {
    SHIPPING_STATUS["CANCEL"] = "CANCEL";
    SHIPPING_STATUS["COMPLETE"] = "COMPLETE";
    SHIPPING_STATUS["WAITING"] = "WAITING";
})(SHIPPING_STATUS = exports.SHIPPING_STATUS || (exports.SHIPPING_STATUS = {}));
exports.CONST_SHIPPING_STATUS = Object.values(SHIPPING_STATUS);
var WEIGHT_TYPE;
(function (WEIGHT_TYPE) {
    WEIGHT_TYPE["ABSOLUTE"] = "ABSOLUTE";
    WEIGHT_TYPE["MULTIPLE"] = "MULTIPLE";
})(WEIGHT_TYPE = exports.WEIGHT_TYPE || (exports.WEIGHT_TYPE = {}));
exports.CONST_WEIGHT_TYPE = Object.values(WEIGHT_TYPE);
var WITHDRAW_PERSONAL_TYPE;
(function (WITHDRAW_PERSONAL_TYPE) {
    WITHDRAW_PERSONAL_TYPE["EXPOSURE"] = "EXPOSURE";
    WITHDRAW_PERSONAL_TYPE["REAPPLY"] = "REAPPLY";
})(WITHDRAW_PERSONAL_TYPE = exports.WITHDRAW_PERSONAL_TYPE || (exports.WITHDRAW_PERSONAL_TYPE = {}));
exports.CONST_WITHDRAW_PERSONAL_TYPE = Object.values(WITHDRAW_PERSONAL_TYPE);
var WITHDRAWAL_SERVICE_TYPE;
(function (WITHDRAWAL_SERVICE_TYPE) {
    WITHDRAWAL_SERVICE_TYPE["CUSTOMER_SERVICE"] = "CUSTOMER_SERVICE";
    WITHDRAWAL_SERVICE_TYPE["LATE_DELIVERY"] = "LATE_DELIVERY";
    WITHDRAWAL_SERVICE_TYPE["OTHER_B2B_SERVICE"] = "OTHER_B2B_SERVICE";
    WITHDRAWAL_SERVICE_TYPE["REFUND_EXCHANGE"] = "REFUND_EXCHANGE";
})(WITHDRAWAL_SERVICE_TYPE = exports.WITHDRAWAL_SERVICE_TYPE || (exports.WITHDRAWAL_SERVICE_TYPE = {}));
exports.CONST_WITHDRAWAL_SERVICE_TYPE = Object.values(WITHDRAWAL_SERVICE_TYPE);
var WITHDRAWAL_SITE_TYPE;
(function (WITHDRAWAL_SITE_TYPE) {
    WITHDRAWAL_SITE_TYPE["BUYER_BENEFIT"] = "BUYER_BENEFIT";
    WITHDRAWAL_SITE_TYPE["LOW_USAGE"] = "LOW_USAGE";
    WITHDRAWAL_SITE_TYPE["PRODUCT_PRICE"] = "PRODUCT_PRICE";
})(WITHDRAWAL_SITE_TYPE = exports.WITHDRAWAL_SITE_TYPE || (exports.WITHDRAWAL_SITE_TYPE = {}));
exports.CONST_WITHDRAWAL_SITE_TYPE = Object.values(WITHDRAWAL_SITE_TYPE);
//# sourceMappingURL=common-code.type.js.map