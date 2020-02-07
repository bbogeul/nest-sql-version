import {
  Injectable,
  CacheOptionsFactory,
  CacheModuleOptions,
} from '@nestjs/common';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  createCacheOptions(): CacheModuleOptions {
    if (process.env.NODE_ENV === 'development') {
      return {};
    }
    return {
      ttl: 5,
      max: 100,
    };
  }
}
