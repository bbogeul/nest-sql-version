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
let UserWithdrawHistory = class UserWithdrawHistory extends core_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], UserWithdrawHistory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int', {
        name: 'user_id',
        nullable: false,
    }),
    __metadata("design:type", Number)
], UserWithdrawHistory.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        name: 'email',
        nullable: false,
        comment: '사용자 이메일',
    }),
    __metadata("design:type", String)
], UserWithdrawHistory.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('timestamp', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        comment: '등록일시',
    }),
    __metadata("design:type", Date)
], UserWithdrawHistory.prototype, "created", void 0);
UserWithdrawHistory = __decorate([
    typeorm_1.Entity('user_withdraw_history')
], UserWithdrawHistory);
exports.UserWithdrawHistory = UserWithdrawHistory;
//# sourceMappingURL=user-withdraw-history.entity.js.map