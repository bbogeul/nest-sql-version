"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geoIp = require("geoip-lite");
class Utils {
    static _censorWord(str) {
        let result = str[0] + str[1] + '*'.repeat(str.length - 2);
        if (str.length > 3) {
            result += str.slice(-2);
        }
        return result;
    }
    static censorEmail(email) {
        const arr = email.split('@');
        return this._censorWord(arr[0]) + '@' + arr[1];
    }
    static passwordValidate(str) {
        if (!str)
            return false;
        return str.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&+])[A-Za-z\d$@$!%*#?&+]{6,}$/);
    }
    static generateCategoryCode(parentCode, code) {
        const codeLengthPerLevel = 3;
        const level = parentCode
            ? Math.ceil(parentCode.length / codeLengthPerLevel) + 1
            : 1;
        let newCode = code ? code.substring((level - 1) * codeLengthPerLevel) : '0';
        newCode = String(parseInt(newCode) + 1);
        newCode = newCode.padStart(codeLengthPerLevel, '0');
        newCode = parentCode ? parentCode + newCode : newCode;
        return newCode;
    }
    static getUserAgent(req) {
        return req && req.headers['user-agent'];
    }
    static getUserIp(req) {
        let ip = (req && req.headers['x-forwarded-for']) ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            (req.connection.socket ? req.connection.socket.remoteAddress : null);
        if (process.env.NODE_ENV === 'development') {
            ip = '1.212.71.98';
        }
        const ipInfo = geoIp.lookup(ip).country;
        return `IP: ${ip}, COUNTRY: ${ipInfo}`;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.lib.js.map