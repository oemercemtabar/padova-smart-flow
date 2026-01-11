// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZtlZone } from './ztl/entities/ztl-zone.entity';
import { ZtlController } from './ztl/ztl.controller';
import { ZtlSeedService } from './ztl/ztl-seed.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1', 
      port: 5433,       
      username: 'padovauser',
      password: 'waspeM-kuxzyp-mimco2',
      database: 'smart_flow_db',
      entities: [ZtlZone],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ZtlZone]),
  ],
  controllers: [ZtlController],
  providers: [ZtlSeedService],
})
export class AppModule {}