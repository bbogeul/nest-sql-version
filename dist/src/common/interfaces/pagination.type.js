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
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const __1 = require("..");
class PaginatedResponse {
}
exports.PaginatedResponse = PaginatedResponse;
class PaginatedRequest {
}
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_transformer_1.Type(() => Number),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    __1.Default(0),
    __metadata("design:type", Number)
], PaginatedRequest.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_transformer_1.Type(() => Number),
    class_validator_1.Min(0),
    class_validator_1.Max(80),
    class_transformer_1.Expose(),
    __1.Default(20),
    __metadata("design:type", Number)
], PaginatedRequest.prototype, "take", void 0);
exports.PaginatedRequest = PaginatedRequest;
//# sourceMappingURL=pagination.type.js.map