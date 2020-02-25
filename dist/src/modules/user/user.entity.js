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
const base_user_entity_1 = require("../auth/base-user.entity");
const common_1 = require("../../common");
const role_type_1 = require("../auth/types/role.type");
let User = class User extends base_user_entity_1.BaseUser {
    constructor(partial) {
        super(partial);
    }
    get userType() {
        return role_type_1.UserType.USER;
    }
};
__decorate([
    typeorm_1.Column('json', {
        name: 'user_roles',
        default: () => [common_1.STUDENT_ROLE.STUDENT_ROLE_APPROVED],
        nullable: false,
        comment: '유저 롤',
    }),
    __metadata("design:type", Array)
], User.prototype, "userRoles", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], User.prototype, "userType", null);
User = __decorate([
    typeorm_1.Entity('user'),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map