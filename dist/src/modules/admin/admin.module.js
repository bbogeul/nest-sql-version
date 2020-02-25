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
const admin_entity_1 = require("./admin.entity");
const admin_service_1 = require("./admin.service");
const password_service_1 = require("../auth/password.service");
const user_service_1 = require("../user/user.service");
const admin_controller_1 = require("./admin.controller");
const user_entity_1 = require("../user/user.entity");
const user_history_entity_1 = require("../user/user-history.entity");
const user_signin_history_entity_1 = require("../user/user-signin-history.entity");
const user_withdraw_history_entity_1 = require("../user/user-withdraw-history.entity");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                admin_entity_1.Admin,
                user_entity_1.User,
                user_history_entity_1.UserHistory,
                user_signin_history_entity_1.UserSigninHistory,
                user_withdraw_history_entity_1.UserWithdrawHistory,
            ]),
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService, password_service_1.PasswordService, user_service_1.UserService],
        exports: [],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map