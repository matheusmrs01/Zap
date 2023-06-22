import { Module } from '@nestjs/common';
import { ZapService } from './zap.service';
import { ZapController } from './zap.controller';

@Module({
  providers: [ZapService],
  controllers: [ZapController]
})
export class ZapModule {}
