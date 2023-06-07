import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';


@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async findAll() {
    return await this.clientsService.findAll();
  }

  @Get("/member/activity/last")
  async getMemberLastActivity() {
    return await this.clientsService.getMemberLastActivity();
  }

  
  
}
