import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async search(@Query() query) {
    return this.appService.search(query.search);
  }

  @Get('getMeteorology')
  async getMeteorology(@Query() query) {
    const response = this.appService.getMeteorology(query.latitude, query.longitude);
    return response;
  }
}
