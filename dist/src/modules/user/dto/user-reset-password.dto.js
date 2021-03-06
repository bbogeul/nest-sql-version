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
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const common_1 = require("../../../common");
class UserResetPasswordDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_transformer_1.Expose(),
    common_1.IsPassword(),
    __metadata("design:type", String)
], UserResetPasswordDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_transformer_1.Expose(),
    common_1.IsPassword(),
    common_1.IsEqualTo('password'),
    __metadata("design:type", String)
], UserResetPasswordDto.prototype, "passwordConfirm", void 0);
exports.UserResetPasswordDto = UserResetPasswordDto;
//# sourceMappingURL=user-reset-password.dto.js.map