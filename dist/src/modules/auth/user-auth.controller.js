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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const core_1 = require("../../core");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
let UserAuthController = class UserAuthController extends core_1.BaseController {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async signin(signinDto) {
        const token = await this.authService.signin(signinDto);
        return { token };
    }
};
__decorate([
    common_1.Post('/auth/signin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SigninDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signin", null);
UserAuthController = __decorate([
    common_1.Controller(),
    swagger_1.ApiTags('Auth', 'STUDENT'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], UserAuthController);
exports.UserAuthController = UserAuthController;
//# sourceMappingURL=user-auth.controller.js.map