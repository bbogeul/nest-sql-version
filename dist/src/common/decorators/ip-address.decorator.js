"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const requestIp = require("request-ip");
exports.IpAddress = common_1.createParamDecorator((data, req) => {
    if (req.clientIp)
        return req.clientIp;
    return requestIp.getClientIp(req);
});
//# sourceMappingURL=ip-address.decorator.js.map