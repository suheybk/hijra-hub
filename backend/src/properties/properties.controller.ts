import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Prisma } from '@prisma/client';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) { }

  @Post()
  create(@Body() createPropertyDto: Prisma.PropertyCreateInput) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  findAll(@Query() query: { location?: string; type?: string; minPrice?: string; maxPrice?: string; sort?: string }) {
    return this.propertiesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }
}
