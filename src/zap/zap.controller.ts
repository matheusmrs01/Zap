import { Body, Controller, Post } from '@nestjs/common';
import { ZapService } from './zap.service';
import { SendMessageDto } from './dtos/send-message';

@Controller('zap')
export class ZapController {
  constructor(private readonly zapService: ZapService) {}

  @Post()
  async sendMessage(@Body() data: SendMessageDto) {
    return await this.zapService.sendSimpleMessage(data);
  }
}
