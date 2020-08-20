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
const user_entity_1 = require("./user.entity");
const user_controller_1 = require("./user.controller");
const admin_user_controller_1 = require("./admin-user.controller");
const user_service_1 = require("./user.service");
const password_service_1 = require("../auth/password.service");
const user_history_entity_1 = require("./user-history.entity");
const user_signin_history_entity_1 = require("./user-signin-history.entity");
const user_withdraw_history_entity_1 = require("./user-withdraw-history.entity");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                user_history_entity_1.UserHistory,
                user_signin_history_entity_1.UserSigninHistory,
                user_withdraw_history_entity_1.UserWithdrawHistory,
            ]),
        ],
        controllers: [user_controller_1.UserController, admin_user_controller_1.AdminUserController],
        providers: [user_service_1.UserService, password_service_1.PasswordService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map