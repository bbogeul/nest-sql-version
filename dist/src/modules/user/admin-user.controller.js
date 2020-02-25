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
const core_1 = require("../../core");
const common_2 = require("../../common");
const common_3 = require("../../common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const user_service_1 = require("./user.service");
let AdminUserController = class AdminUserController extends core_1.BaseController {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    async findAll(adminUserListDto, pagination) {
        return await this.userService.findAll(adminUserListDto, pagination);
    }
    async findOne(userId) {
        return await this.userService.findOne(userId);
    }
    async findSigninHistory(userId, pagination) {
        return await this.userService.findSigninHistory(userId, pagination);
    }
    async deleteOne(userId) {
        return await this.userService.delete(userId);
    }
};
__decorate([
    common_1.Get('/admin/student'),
    __param(0, common_1.Query()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AdminUserListDto,
        common_3.PaginatedRequest]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "findAll", null);
__decorate([
    common_1.Get('/admin/student/:id([0-9]+)'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "findOne", null);
__decorate([
    common_1.Get('/admin/student/:id([0-9]+)/signin-history'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, common_3.PaginatedRequest]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "findSigninHistory", null);
__decorate([
    common_1.Delete('/admin/student/:id([0-9]+)'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "deleteOne", null);
AdminUserController = __decorate([
    common_1.Controller(),
    swagger_1.ApiTags('Student', 'ADMIN'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(new core_1.AuthRolesGuard(common_2.ADMIN_ROLE.ADMIN_SUPER)),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AdminUserController);
exports.AdminUserController = AdminUserController;
//# sourceMappingURL=admin-user.controller.js.map