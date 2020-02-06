import Debug from 'debug';
import { basename } from 'path';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
// for webpack:hmr
import { getMetadataArgsStorage } from 'typeorm';

const debug = Debug(`app:${basename(__dirname)}:${basename(__filename)}`);

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mariadb' as 'mariadb',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      keepConnectionAlive: true,
      bigNumberStrings: false,
      supportBigNumbers: false,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      migrations: [],
      cli: {},
      subscribers: [],
      synchronize: false, // 테이블 스키마 변경 및 데이터 삭제될 수 있으므로 변경 금지
      logging: Boolean(process.env.MYSQL_DEBUG),
    };
  }
}
