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
const typeorm_1 = require("typeorm");
const shared_1 = require("../../shared");
let PrivacyPolicy = class PrivacyPolicy extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        comment: '아이디',
    }),
    __metadata("design:type", Number)
], PrivacyPolicy.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('json', {
        nullable: false,
        name: 'category',
        comment: '카테고리',
    }),
    __metadata("design:type", Array)
], PrivacyPolicy.prototype, "category", void 0);
__decorate([
    typeorm_1.Column('int', {
        name: 'parent_id',
        nullable: true,
    }),
    __metadata("design:type", Number)
], PrivacyPolicy.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column('int', {
        name: 'depth',
        nullable: true,
    }),
    __metadata("design:type", Number)
], PrivacyPolicy.prototype, "depth", void 0);
__decorate([
    typeorm_1.Column('int', {
        name: 'admin_id',
        nullable: false,
    }),
    __metadata("design:type", Number)
], PrivacyPolicy.prototype, "adminId", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        name: 'header',
        nullable: true,
    }),
    __metadata("design:type", String)
], PrivacyPolicy.prototype, "header", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        name: 'content',
        nullable: true,
    }),
    __metadata("design:type", String)
], PrivacyPolicy.prototype, "content", void 0);
__decorate([
    typeorm_1.Column('timestamp', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        comment: '등록일시',
    }),
    __metadata("design:type", Date)
], PrivacyPolicy.prototype, "created", void 0);
__decorate([
    typeorm_1.Column('timestamp', {
        nullable: true,
        comment: '수정일시',
    }),
    __metadata("design:type", Date)
], PrivacyPolicy.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column('timestamp', {
        nullable: true,
        comment: '삭제일시',
    }),
    __metadata("design:type", Date)
], PrivacyPolicy.prototype, "deleted", void 0);
PrivacyPolicy = __decorate([
    typeorm_1.Entity('privacy-policy')
], PrivacyPolicy);
exports.PrivacyPolicy = PrivacyPolicy;
//# sourceMappingURL=privacy-policy.entity.js.map