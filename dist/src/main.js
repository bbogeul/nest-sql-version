"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const body_parser_1 = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const packageInfo = require("../package.json");
const requestIp = require("request-ip");
const app_module_1 = require("./app.module");
const debug = debug_1.default(`app:${path_1.basename(__dirname)}:${path_1.basename(__filename)}`);
const env = process.env.NODE_ENV;
if (!env) {
    env === 'development';
}
let app;
async function bootstrap() {
    if (env === 'development') {
        console.log('Running in development mode. 개발 모드로 진행중');
        console.log(process.env.MYSQL_PORT);
    }
    app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    app.use(body_parser_1.urlencoded({ extended: true }));
    app.use(body_parser_1.json({ limit: '50mb' }));
    app.disable('x-powered-by');
    app.setViewEngine('hbs');
    app.use(compression());
    app.use(helmet());
    app.use(requestIp.mw());
    app.useGlobalPipes(new common_1.ValidationPipe({
        validationError: { target: false, value: false },
        transform: true,
        transformOptions: {
            excludeExtraneousValues: true,
        },
    }));
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    if (process.env.NODE_ENV === 'development') {
        const options = new swagger_1.DocumentBuilder()
            .setTitle(packageInfo.name.toUpperCase())
            .setDescription(packageInfo.description)
            .setVersion(packageInfo.version)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('swagger', app, document);
    }
    await app.listen(3000);
    const url = await app.getUrl();
    common_1.Logger.log(`${url}`, 'NestApplication');
    common_1.Logger.log(`${url}/swagger`, 'NestApplication');
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map