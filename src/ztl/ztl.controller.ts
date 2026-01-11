import { Controller, Get, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZtlZone } from './entities/ztl-zone.entity';

@Controller('ztl')
export class ZtlController {
  constructor(
    @InjectRepository(ZtlZone)
    private ztlRepository: Repository<ZtlZone>,
  ) {}

  @Get('check')
  async checkLocation(@Query('lng') lng: number, @Query('lat') lat: number) {
    const result = await this.ztlRepository.query(
      `
      SELECT name FROM ztl_zones 
      WHERE ST_Contains(boundary, ST_SetSRID(ST_Point($1, $2), 4326))
      LIMIT 1;
      `,
      [lng, lat],
    );

    return {
      insideZtl: result.length > 0,
      zoneName: result.length > 0 ? result[0].name : null,
      timestamp: new Date().toISOString(),
    };
  }
}