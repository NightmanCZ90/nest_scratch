import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getRootRoure() {
    return 'Hi There from Scratch!';
  }
}