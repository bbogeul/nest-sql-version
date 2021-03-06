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
const shared_1 = require("../../shared");
const typeorm_1 = require("typeorm");
const base_user_entity_1 = require("../auth/base-user.entity");
const class_transformer_1 = require("class-transformer");
const role_type_1 = require("../auth/types/role.type");
let Admin = class Admin extends base_user_entity_1.BaseUser {
    get userType() {
        return role_type_1.UserType.ADMIN;
    }
};
__decorate([
    typeorm_1.Column('json', {
        name: 'user_roles',
        default: () => [shared_1.ADMIN_ROLE.ADMIN_SUPER],
        nullable: false,
        comment: '관리자 롤',
    }),
    __metadata("design:type", Array)
], Admin.prototype, "userRoles", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Admin.prototype, "userType", null);
Admin = __decorate([
    typeorm_1.Entity('admin')
], Admin);
exports.Admin = Admin;
//# sourceMappingURL=admin.entity.js.map