import Debug from 'debug';
import { basename } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { json, urlencoded } from 'body-parser';
import { getConnection } from 'typeorm';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as packageInfo from '../package.json';
import * as requestIp from 'request-ip';
import { AppModule } from './app.module';
import { ClassTransformOptions } from '@nestjs/common/interfaces/external/class-transform-options.interface';

const debug = Debug(`app:${basename(__dirname)}:${basename(__filename)}`);
const env = process.env.NODE_ENV;

let app: NestExpressApplication;
declare const module: any;

async function bootstrap() {
  if (env === 'development') {
    console.log('Running in development mode.');
  }
  app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: true
  });
  app.use(urlencoded({ extended: true }));
  app.use(json({ limit: '50mb' }));
  app.disable('x-powered-by');
  app.setViewEngine('hbs');
  app.use(compression());
  app.use(helmet()); // https://helmetjs.github.io/
  app.use(requestIp.mw());

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      // skipMissingProperties: true,
      // skipNullProperties: true,
      // skipUndefinedProperties: false,
      validationError: { target: false, value: false }, // object 와 value 역전송 막기
      transform: true,
      transformOptions: {
        excludeExtraneousValues: true,
      } as ClassTransformOptions, // version문제로 실제 있지만 여기 없음.. down casting
    }),
  );

  // Cors
  // see https://github.com/expressjs/cors#configuration-options
  app.enableCors({
    origin: '*',
    // origin: /\.umma\.io$/,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // Swagger
  if (process.env.NODE_ENV === 'development') {
    const options = new DocumentBuilder()
      .setTitle(packageInfo.name.toUpperCase())
      .setDescription(packageInfo.description)
      .setVersion(packageInfo.version)
      // .addTag('umma')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(3000);

  const url = await app.getUrl();
  Logger.log(`${url}`, 'NestApplication');
  Logger.log(`${url}/swagger`, 'NestApplication');

  // HMR: Hot Reload (Webpack)
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

/**
 * Graceful shutdown
 */
// Prevents the program from closing instantly
process.stdin.resume();

async function shutdown() {
  if (app) {
    const conn = getConnection();
    debug('database connected: %o', conn.isConnected);
    if (conn.isConnected) {
      await conn.close();
      debug('database connection closed');
      debug('database connected: %o', conn.isConnected);
    }
    await app.close();
    app = null;
    debug('app closed');
    process.exit();
  }
}

// catch app is closing
process.on('exit', code => {
  console.log(`About to exit with code: ${code}`);
});

// catch ctrl+c event and exit normally
process.on('SIGINT', () => {
  console.log('SIGINT signal received.');
  shutdown();
});

// catch console is closing on windows
process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
  shutdown();
});

// catch "kill pid"
process.on('SIGUSR1', () => {
  console.log('Got SIGUSR1 signal.');
  shutdown();
});
process.on('SIGUSR2', () => {
  console.log('Got SIGUSR2 signal.');
  shutdown();
});

// catch uncaught exceptions
// process.on('uncaughtException', err => {
//   console.error('uncaughtException', err);
//   shutdown();
// });

bootstrap();
