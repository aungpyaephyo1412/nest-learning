import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatHtaukBayDinModule } from './lat-htauk-bay-din/lat-htauk-bay-din.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [LatHtaukBayDinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
