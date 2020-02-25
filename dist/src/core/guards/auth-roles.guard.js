"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const path_1 = require("path");
const debug = debug_1.default(`app:${path_1.basename(__dirname)}:${path_1.basename(__filename)}`);
let AuthRolesGuard = class AuthRolesGuard extends passport_1.AuthGuard('jwt') {
    constructor(...roles) {
        super();
        this.roles = roles;
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            debug(info);
            console.log(info);
            throw err || new common_1.UnauthorizedException('something wrong');
        }
        if (this.roles.length) {
            const hasRole = () => this.roles.some(role => user.userRoles.includes(role));
            if (!user.userRoles || !hasRole()) {
                throw new common_1.ForbiddenException('something wrong');
            }
        }
        return user;
    }
};
AuthRolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [String])
], AuthRolesGuard);
exports.AuthRolesGuard = AuthRolesGuard;
//# sourceMappingURL=auth-roles.guard.js.map