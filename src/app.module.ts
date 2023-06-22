import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZapModule } from './zap/zap.module';

@Module({
  imports: [ZapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
