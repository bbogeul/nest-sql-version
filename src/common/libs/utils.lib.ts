import * as geoIp from 'geoip-lite';

export class Utils {
  private static _censorWord(str: string) {
    let result = str[0] + str[1] + '*'.repeat(str.length - 2);
    if (str.length > 3) {
      result += str.slice(-2);
    }
    return result;
  }
  // censor email
  static censorEmail(email: string) {
    const arr = email.split('@');
    return this._censorWord(arr[0]) + '@' + arr[1];
  }

  // password validator
  static passwordValidate(str: string) {
    if (!str) return false;
    return str.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&+])[A-Za-z\d$@$!%*#?&+]{6,}$/,
    );
  }

  static generateCategoryCode(parentCode: string, code: string) {
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

  // get request's user agent
  static getUserAgent(req) {
    return req && req.headers['user-agent'];
  }

  static getUserIp(req) {
    let ip =
      (req && req.headers['x-forwarded-for']) ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      (req.connection.socket ? req.connection.socket.remoteAddress : null);
    if (process.env.NODE_ENV === 'development') {
      ip = '1.212.71.98';
    }
    const ipInfo = geoIp.lookup(ip).country;
    return `IP: ${ip}, COUNTRY: ${ipInfo}`;
  }

  // maybe will not use..
  //   static getKRW2USD(currencyRate: CurrencyRate, priceKRW: number) {
  //     if (!priceKRW) return 0;
  //     // 소수점 3자리에서 반올림 (1.265 => 1.27)
  //     return Math.round((priceKRW / currencyRate.krw) * currencyRate.usd * 100) / 100;
  //   }

  // static getUSD2KRW(currencyRate: CurrencyRate, priceUSD: number) {
  //   if (!priceUSD) return 0;
  //   // 소수점 반올림
  //   return Math.round((priceUSD * currencyRate.krw) / currencyRate.usd);
  // }
}
