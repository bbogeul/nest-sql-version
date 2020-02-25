"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("../../config");
const jwt_strategy_1 = require("./jwt/jwt.strategy");
const auth_service_1 = require("./auth.service");
const password_service_1 = require("./password.service");
const user_entity_1 = require("../user/user.entity");
const user_auth_controller_1 = require("./user-auth.controller");
const user_signin_history_entity_1 = require("../user/user-signin-history.entity");
const admin_entity_1 = require("../admin/admin.entity");
const admin_auth_controller_1 = require("./admin-auth.controller");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({ useClass: config_1.JwtConfigService }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, user_signin_history_entity_1.UserSigninHistory, admin_entity_1.Admin]),
        ],
        providers: [auth_service_1.AuthService, password_service_1.PasswordService, jwt_strategy_1.JwtStrategy],
        controllers: [user_auth_controller_1.UserAuthController, admin_auth_controller_1.AdminAuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map