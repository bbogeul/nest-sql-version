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
const core_1 = require("../../../core");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const common_1 = require("../../../common");
class AdminCreateDto extends core_1.BaseDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsEmail(),
    class_transformer_1.Expose(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AdminCreateDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    common_1.IsPassword(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminCreateDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    common_1.IsEqualTo('password'),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminCreateDto.prototype, "passwordConfirm", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminCreateDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminCreateDto.prototype, "lastName", void 0);
exports.AdminCreateDto = AdminCreateDto;
//# sourceMappingURL=admin-create.dto.js.map