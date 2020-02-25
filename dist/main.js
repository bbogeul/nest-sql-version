"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const debug = debug_1.default(`app:${path_1.basename(__dirname)}:${path_1.basename(__filename)}`);
const env = process.env.NODE_ENV;
async function bootstrap() {
    if (env === 'development') {
        console.log('Running in development mode.');
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map