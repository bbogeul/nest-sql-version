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
const dto_1 = require("./dto");
const admin_service_1 = require("./admin.service");
const common_2 = require("../../common");
const admin_entity_1 = require("./admin.entity");
const swagger_1 = require("@nestjs/swagger");
const debug_1 = require("debug");
const path_1 = require("path");
const debug = debug_1.default(`app:${path_1.basename(__dirname)}:${path_1.basename(__filename)}`);
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async create(adminCreateDto) {
        debug();
        return await this.adminService.create(adminCreateDto);
    }
    async findMe(admin) {
        debug();
        console.log(admin);
        return await this.adminService.findOne(admin.id);
    }
    async findOne(adminId) {
        debug();
        return await this.adminService.findOne(adminId);
    }
    async resetPassword(admin, adminResetPasswordDto) {
        return {
            isResetted: await this.adminService.resetPassword(admin.id, adminResetPasswordDto),
        };
    }
    async update(adminId, adminUpdateDto) {
        debug();
        return await this.adminService.update(adminId, adminUpdateDto);
    }
    async deleteOne(adminId) {
        return { isDeleted: await this.adminService.delete(adminId) };
    }
    async delete(admin) {
        return { isDeleted: await this.adminService.delete(admin.id) };
    }
};
__decorate([
    common_1.Post('/admin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AdminCreateDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "create", null);
__decorate([
    common_1.Get('/admin/my-page'),
    common_1.UseGuards(new core_1.AuthRolesGuard(...common_2.CONST_ADMIN_ROLE)),
    __param(0, common_2.UserInfo()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_entity_1.Admin]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findMe", null);
__decorate([
    common_1.Get('/admin/:id([0-9]+)'),
    common_1.UseGuards(new core_1.AuthRolesGuard(...common_2.CONST_ADMIN_ROLE)),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOne", null);
__decorate([
    common_1.Post('/admin/reset-password'),
    common_1.UseGuards(new core_1.AuthRolesGuard(...common_2.CONST_ADMIN_ROLE)),
    __param(0, common_2.UserInfo()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_entity_1.Admin,
        dto_1.AdminResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "resetPassword", null);
__decorate([
    common_1.Put('/admin'),
    common_1.UseGuards(new core_1.AuthRolesGuard(...common_2.CONST_ADMIN_ROLE)),
    __param(0, common_2.UserInfo()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.AdminUpdateDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "update", null);
__decorate([
    common_1.Delete('/admin/:id([0-9]+)'),
    common_1.UseGuards(new core_1.AuthRolesGuard(common_2.ADMIN_ROLE.ADMIN_SUPER)),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteOne", null);
__decorate([
    common_1.Delete('/admin/me'),
    common_1.UseGuards(new core_1.AuthRolesGuard(...common_2.CONST_ADMIN_ROLE)),
    __param(0, common_2.UserInfo()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_entity_1.Admin]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "delete", null);
AdminController = __decorate([
    common_1.Controller(),
    swagger_1.ApiTags('Admin', 'ADMIN'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map