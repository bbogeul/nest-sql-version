"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const contextName = context.getClass().name;
        common_1.Logger.debug('Before...', contextName);
        const req = context.switchToHttp().getRequest();
        if (req) {
            common_1.Logger.debug(`${req.method} ${req.originalUrl}`, contextName);
            common_1.Logger.debug(`ip: ${req.ip}`, contextName);
            common_1.Logger.debug(`params: ${JSON.stringify(req.params)}`, contextName);
            common_1.Logger.debug(`query: ${JSON.stringify(req.query)}`, contextName);
            common_1.Logger.debug(`body: ${JSON.stringify(req.body)}`, contextName);
        }
        const now = Date.now();
        return next.handle().pipe(operators_1.tap(() => common_1.Logger.debug(`After... ${Date.now() - now}ms`, contextName)));
    }
};
LoggingInterceptor = __decorate([
    common_1.Injectable()
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map