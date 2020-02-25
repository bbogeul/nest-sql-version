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
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const password_service_1 = require("./password.service");
const core_1 = require("../../core");
const shared_1 = require("../../shared");
const user_signin_history_entity_1 = require("../user/user-signin-history.entity");
const admin_entity_1 = require("../admin/admin.entity");
let AuthService = class AuthService extends core_1.BaseService {
    constructor(jwtService, passwordService, entityManager, userRepo, readonly, adminRepo) {
        super();
        this.jwtService = jwtService;
        this.passwordService = passwordService;
        this.entityManager = entityManager;
        this.userRepo = userRepo;
        this.readonly = readonly;
        this.adminRepo = adminRepo;
    }
    async signin(signinDto) {
        const user = await this.userRepo.findOne({ email: signinDto.email });
        if (!user) {
            throw new common_1.BadRequestException('User not found!');
        }
        if (user.userRoles === [shared_1.STUDENT_ROLE.STUDENT_ROLE_NOT_APPROVED]) {
            throw new common_1.BadRequestException('User is not approved to use this site');
        }
        const passwordValid = await this.passwordService.validatePassword(signinDto.password, user.password);
        if (!passwordValid) {
            throw new common_1.BadRequestException('Password does not match.');
        }
        await this.entityManager.transaction(async (entityManager) => {
            const newCount = user.signinCount + 1;
            user.signinCount = newCount;
            await entityManager.save(user);
            const signinHistory = new user_signin_history_entity_1.UserSigninHistory();
            signinHistory.userId = user.id;
            await entityManager.save(signinHistory);
        });
        return await this.sign(user);
    }
    async signinAdmin(signinDto) {
        const admin = await this.adminRepo.findOne({ email: signinDto.email });
        if (!admin)
            throw new common_1.BadRequestException('Admin not found');
        const passwordValid = await this.passwordService.validatePassword(signinDto.password, admin.password);
        if (!passwordValid) {
            throw new common_1.BadRequestException('Password does not match.');
        }
        await this.entityManager.transaction(async (entityManager) => {
            const newCount = admin.signinCount + 1;
            admin.signinCount = newCount;
            await entityManager.save(admin);
        });
        console.log(await this.sign(admin));
        return await this.sign(admin);
    }
    async validateUserById(userId) {
        return await this.userRepo.findOne(userId);
    }
    async validateAdminById(userId) {
        return await this.adminRepo.findOne(userId);
    }
    async sign(user, extend, rememberMe) {
        const options = rememberMe
            ? { expiresIn: process.env.JWT_REMEMBER_EXPIRES_IN }
            : {};
        const userSigninInfo = {
            userType: user.userType,
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            userRoles: user.userRoles,
        };
        return await this.jwtService.sign(Object.assign(Object.assign({}, userSigninInfo), extend), options);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(2, typeorm_1.InjectEntityManager()),
    __param(3, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(4, typeorm_1.InjectRepository(user_signin_history_entity_1.UserSigninHistory)),
    __param(5, typeorm_1.InjectRepository(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        password_service_1.PasswordService,
        typeorm_2.EntityManager,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map