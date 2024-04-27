import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/end-new')
  newEndPoint() {
    return 'nuevo end point';
  }

  @Get('/test/')
  testRoute() {
    return 'test con slash';
  }

  @Get('sales/:date/persons/:personId')
  getSalesByPerson(@Param() { date, personId }) {
    return `sales of date ${date} by person ${personId} is null or empty`;
  }
}
