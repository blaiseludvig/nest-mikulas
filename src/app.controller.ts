import { Body, Controller, Get, Post, Render, Header } from '@nestjs/common';
import { PackageDto } from './package.dto';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {};
  }

  @Post()
  @Render('package')
  handlePackage(@Body() dto: PackageDto) {
    console.log(dto);
    return dto;
  }

  // @Post()
  // @Render('color')
  // handleColor(@Body() body: dto): object {
  //   return body;
  // }
}
