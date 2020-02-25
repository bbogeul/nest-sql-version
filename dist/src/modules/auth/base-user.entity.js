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
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const role_type_1 = require("./types/role.type");
const core_1 = require("../../core");
class BaseUser extends core_1.BaseEntity {
    get userType() {
        return role_type_1.UserType.USER;
    }
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], BaseUser.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: false,
        length: 512,
        unique: true,
        comment: '이메일',
    }),
    __metadata("design:type", String)
], BaseUser.prototype, "email", void 0);
__decorate([
    class_transformer_1.Exclude({ toPlainOnly: true }),
    typeorm_1.Column('varchar', {
        nullable: false,
        length: 512,
        comment: '비밀번호',
    }),
    __metadata("design:type", String)
], BaseUser.prototype, "password", void 0);
__decorate([
    class_transformer_1.Exclude({ toPlainOnly: true }),
    typeorm_1.Column('timestamp', {
        name: 'password_updated',
        nullable: true,
        comment: '비밀번호 수정일시',
    }),
    __metadata("design:type", Date)
], BaseUser.prototype, "passwordUpdated", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: false,
        length: 512,
        comment: '이름',
        name: 'first_name',
    }),
    __metadata("design:type", String)
], BaseUser.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: false,
        length: 512,
        comment: '성',
        name: 'last_name',
    }),
    __metadata("design:type", String)
], BaseUser.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column('int', {
        name: 'signin_count',
        nullable: false,
        unsigned: true,
        default: 0,
        comment: '로그인 카운트',
    }),
    __metadata("design:type", Number)
], BaseUser.prototype, "signinCount", void 0);
__decorate([
    typeorm_1.Column('timestamp', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        comment: '등록일시',
    }),
    __metadata("design:type", Date)
], BaseUser.prototype, "created", void 0);
exports.BaseUser = BaseUser;
//# sourceMappingURL=base-user.entity.js.map