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
const user_entity_1 = require("./user.entity");
const common_2 = require("../../common");
const core_1 = require("../../core");
const user_service_1 = require("./user.service");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
const core_2 = require("../../core");
let UserController = class UserController extends core_1.BaseController {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    async create(userCreateDto) {
        return await this.userService.create(userCreateDto);
    }
    async findMe(user) {
        return await this.userService.findOne(user.id);
    }
    async update(user, userUpdateDto) {
        return await this.userService.updateUser(user.id, userUpdateDto);
    }
    async delete(user) {
        return await this.userService.delete(user.id);
    }
    async resetPassword(user, userResetPasswordDto) {
        return {
            isResetted: await this.userService.resetPassword(user.id, userResetPasswordDto),
        };
    }
};
__decorate([
    common_1.Post('/student'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserCreateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    common_1.Get('/my-page'),
    common_1.UseGuards(new core_2.AuthRolesGuard(common_2.STUDENT_ROLE.STUDENT_ROLE_APPROVED)),
    __param(0, common_2.UserInfo()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findMe", null);
__decorate([
    common_1.Put('/student'),
    common_1.UseGuards(new core_2.AuthRolesGuard(common_2.STUDENT_ROLE.STUDENT_ROLE_APPROVED)),
    __param(0, common_2.UserInfo()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        dto_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Delete('/student'),
    common_1.UseGuards(new core_2.AuthRolesGuard(common_2.STUDENT_ROLE.STUDENT_ROLE_APPROVED)),
    __param(0, common_2.UserInfo()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    common_1.Post('/student/reset-password'),
    common_1.UseGuards(new core_2.AuthRolesGuard(common_2.STUDENT_ROLE.STUDENT_ROLE_APPROVED)),
    __param(0, common_2.UserInfo()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        dto_1.UserResetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
UserController = __decorate([
    common_1.Controller(),
    swagger_1.ApiTags('Student', 'STUDENT'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map