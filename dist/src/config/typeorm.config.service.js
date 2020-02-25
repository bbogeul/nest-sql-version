"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let TypeOrmConfigService = class TypeOrmConfigService {
    createTypeOrmOptions() {
        return {
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            keepConnectionAlive: true,
            bigNumberStrings: false,
            supportBigNumbers: false,
            entities: typeorm_1.getMetadataArgsStorage().tables.map(tbl => tbl.target),
            migrations: [],
            cli: {},
            subscribers: [],
            synchronize: false,
            logging: Boolean(process.env.MYSQL_DEBUG),
        };
    }
};
TypeOrmConfigService = __decorate([
    common_1.Injectable()
], TypeOrmConfigService);
exports.TypeOrmConfigService = TypeOrmConfigService;
//# sourceMappingURL=typeorm.config.service.js.map