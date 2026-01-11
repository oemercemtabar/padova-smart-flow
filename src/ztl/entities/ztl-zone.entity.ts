import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import * as GeoJSON from 'geojson'; // Change this line

@Entity('ztl_zones')
export class ZtlZone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Polygon',
    srid: 4326,
  })
  @Index({ spatial: true }) 
  boundary: GeoJSON.Polygon; 
}