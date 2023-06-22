import { Module } from '@nestjs/common';
import { ZapService } from './zap.service';
import { ZapController } from './zap.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  providers: [ZapService],
  controllers: [ZapController],
})
export class ZapModule {}
