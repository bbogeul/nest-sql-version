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
const core_1 = require("../../core");
const typeorm_1 = require("typeorm");
const shared_1 = require("../../shared");
let UserHistory = class UserHistory extends core_1.BaseEntity {
    constructor(partial) {
        super(partial);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], UserHistory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: false,
        unsigned: true,
        name: 'user_id',
        comment: '사용자 아이디',
    }),
    __metadata("design:type", Number)
], UserHistory.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: false,
        name: 'first_name',
        length: 512,
        comment: '사용자 이름',
    }),
    __metadata("design:type", String)
], UserHistory.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: false,
        name: 'last_name',
        length: 512,
        comment: '사용자 성',
    }),
    __metadata("design:type", String)
], UserHistory.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column('json', {
        name: 'user_roles',
        nullable: false,
        comment: '유저 롤',
    }),
    __metadata("design:type", Array)
], UserHistory.prototype, "userRoles", void 0);
UserHistory = __decorate([
    typeorm_1.Entity('user_update_history'),
    __metadata("design:paramtypes", [Object])
], UserHistory);
exports.UserHistory = UserHistory;
//# sourceMappingURL=user-history.entity.js.map