import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SendMessageDto } from './dtos/send-message';

@Injectable()
export class ZapService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async sendSimpleMessage(data: SendMessageDto) {
    const body = this.createRequestBody(data.to, data.message);
    const url = this.createUrl();
    const header = this.createHeader();
    let res;

    try {
      res = await this.httpService.post(url, body, header).toPromise();
    } catch (error) {
      throw new BadRequestException(error.response.request);
    }

    return res.data;
  }

  createRequestBody(to: string, message: string) {
    return {
      messaging_product: 'whatsapp',
      preview_url: false,
      recipient_type: 'individual',
      to,
      type: 'text',
      text: {
        body: message,
      },
    };
  }

  createUrl() {
    return `https://graph.facebook.com/${this.config.get<string>(
      'VERSION',
    )}/${this.config.get<string>('PHONE_NUMBER_ID')}/messages`;
  }

  createHeader() {
    return {
      headers: {
        Authorization: `Bearer ${this.config.get<string>('TIOZAO_TOKEN')}`,
        'Content-Type': 'application/json',
      },
    };
  }
}
