"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const path_1 = require("path");
const debug = debug_1.default(`app:${path_1.basename(__dirname)}:${path_1.basename(__filename)}`);
const bcryptSaltRounds = 10;
let PasswordService = class PasswordService {
    async validatePassword(password, hashedPassword) {
        return await bcrypt_1.compare(password, hashedPassword);
    }
    async hashPassword(password) {
        return bcrypt_1.hash(password, bcryptSaltRounds);
    }
};
PasswordService = __decorate([
    common_1.Injectable()
], PasswordService);
exports.PasswordService = PasswordService;
//# sourceMappingURL=password.service.js.map