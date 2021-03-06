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
const common_1 = require("../../../common");
const class_transformer_1 = require("class-transformer");
class AdminListDto extends core_1.BaseDto {
}
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsEmail(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminListDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminListDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminListDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ enum: common_1.ORDER_BY_VALUE }),
    common_1.Default(common_1.ORDER_BY_VALUE.DESC),
    class_validator_1.IsEnum(common_1.ORDER_BY_VALUE),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], AdminListDto.prototype, "orderById", void 0);
exports.AdminListDto = AdminListDto;
//# sourceMappingURL=admin-list.dto.js.map