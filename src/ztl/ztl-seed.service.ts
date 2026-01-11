import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZtlZone } from './entities/ztl-zone.entity';

@Injectable()
export class ZtlSeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(ZtlSeedService.name);

  constructor(
    @InjectRepository(ZtlZone)
    private ztlRepository: Repository<ZtlZone>,
  ) {}

  async onApplicationBootstrap() {
    const count = await this.ztlRepository.count();
    if (count === 0) {
      this.logger.log('Seeding Padova ZTL data...');
      await this.ztlRepository.save({
        name: 'ZTL Centro Storico',
        boundary: {
          type: 'Polygon',
          coordinates: [[
            [11.872, 45.410], [11.882, 45.410],
            [11.882, 45.402], [11.872, 45.402],
            [11.872, 45.410]
          ]],
        },
      });
      this.logger.log('Seeding complete.');
    }
  }
}