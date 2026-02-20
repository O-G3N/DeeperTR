import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { RequestLoggingMiddleware } from './common/middleware/request-logging.middleware';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggingMiddleware).forRoutes('*');
  }
}
