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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../core/typeorm/select-query-builder-declaration");
const common_1 = require("@nestjs/common");
const core_1 = require("../../core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const common_2 = require("../../common");
const password_service_1 = require("../auth/password.service");
const user_history_entity_1 = require("./user-history.entity");
const user_signin_history_entity_1 = require("./user-signin-history.entity");
const user_withdraw_history_entity_1 = require("./user-withdraw-history.entity");
let UserService = class UserService extends core_1.BaseService {
    constructor(entityManager, userRepo, userHistoryRepo, userSigninHistoryRepo, passwordService) {
        super();
        this.entityManager = entityManager;
        this.userRepo = userRepo;
        this.userHistoryRepo = userHistoryRepo;
        this.userSigninHistoryRepo = userSigninHistoryRepo;
        this.passwordService = passwordService;
    }
    async findAll(adminUserListDto, pagination) {
        const qb = this.userRepo
            .createQueryBuilder()
            .WhereAndOrder(adminUserListDto)
            .Paginate(pagination);
        const [items, totalCount] = await qb.getManyAndCount();
        return { items, totalCount };
    }
    async findSigninHistory(userId, pagination) {
        const where = { userId: userId };
        const qb = this.userSigninHistoryRepo
            .createQueryBuilder()
            .WhereAndOrder(where)
            .Paginate(pagination);
        const [items, totalCount] = await qb.getManyAndCount();
        return { items, totalCount };
    }
    async findOne(userId) {
        return await this.userRepo.findOne(userId);
    }
    async create(userCreateDto) {
        await this.__checkUserEmail(userCreateDto.email);
        const user = await this.entityManager.transaction(async (entityManager) => {
            let user = new user_entity_1.User(userCreateDto);
            user.password = await this.passwordService.hashPassword(userCreateDto.password);
            user.userRoles = [common_2.STUDENT_ROLE.STUDENT_ROLE_APPROVED];
            user = await entityManager.save(user);
            let userHistory = new user_history_entity_1.UserHistory(user);
            userHistory.userId = user.id;
            userHistory = await entityManager.save(userHistory.set(user));
            return user;
        });
        return user;
    }
    async updateUser(userId, userUpdateDto) {
        const user = await this.entityManager.transaction(async (entityManager) => {
            let user = await this.userRepo.findOne(userId);
            user = await entityManager.save(user.set(userUpdateDto));
            let userHistory = new user_history_entity_1.UserHistory(user);
            userHistory.userId = userId;
            console.log(userHistory);
            userHistory = await entityManager.save(userHistory);
            return user;
        });
        return user;
    }
    async delete(userId) {
        const user = await this.entityManager.transaction(async (entityManager) => {
            const findUser = await this.userRepo.findOne(userId);
            let userWithdraw = new user_withdraw_history_entity_1.UserWithdrawHistory();
            userWithdraw.userId = findUser.id;
            userWithdraw.email = findUser.email;
            userWithdraw = await entityManager.save(userWithdraw);
            console.log(userWithdraw);
            await this.userHistoryRepo.delete({ userId: userId });
            await this.userRepo.delete(userId);
            await this.userSigninHistoryRepo.delete(userId);
            return findUser;
        });
        return user;
    }
    async resetPassword(userId, userResetPasswordDto) {
        try {
            const findUser = await this.userRepo.findOne(userId);
            if (!findUser)
                throw new common_1.BadRequestException('User not found!');
            const password = (userResetPasswordDto.password = await this.passwordService.hashPassword(userResetPasswordDto.password));
            await this.userRepo.update(userId, {
                password: password,
                passwordUpdated: new Date(),
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async __checkUserEmail(email) {
        const findUser = await this.userRepo.findOne({ email: email });
        if (findUser) {
            throw new common_1.BadRequestException('This email has signed up already. Please login.');
        }
        else {
            return true;
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(2, typeorm_1.InjectRepository(user_history_entity_1.UserHistory)),
    __param(3, typeorm_1.InjectRepository(user_signin_history_entity_1.UserSigninHistory)),
    __metadata("design:paramtypes", [typeorm_2.EntityManager,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        password_service_1.PasswordService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map