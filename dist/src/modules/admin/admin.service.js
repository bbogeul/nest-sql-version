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
const admin_entity_1 = require("./admin.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const password_service_1 = require("../auth/password.service");
const shared_1 = require("../../shared");
let AdminService = class AdminService {
    constructor(adminRepo, passwordService) {
        this.adminRepo = adminRepo;
        this.passwordService = passwordService;
    }
    async create(adminCreateDto) {
        adminCreateDto.password = await this.passwordService.hashPassword(adminCreateDto.password);
        const newAdmin = new admin_entity_1.Admin(adminCreateDto);
        newAdmin.userRoles = [shared_1.ADMIN_ROLE.ADMIN_SUPER];
        return await this.adminRepo.save(newAdmin);
    }
    async findOne(adminId) {
        return await this.adminRepo.findOne(adminId);
    }
    async update(adminId, adminUpdateDto) {
        await this.adminRepo.update(adminId, adminUpdateDto);
        return await this.adminRepo.findOne(adminId);
    }
    async resetPassword(adminId, resetPasswordDto) {
        const newPassword = await this.passwordService.hashPassword(resetPasswordDto.password);
        await this.adminRepo.update(adminId, {
            password: newPassword,
            passwordUpdated: new Date(),
        });
        return true;
    }
    async delete(adminId) {
        await this.adminRepo.delete(adminId);
        return true;
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        password_service_1.PasswordService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map