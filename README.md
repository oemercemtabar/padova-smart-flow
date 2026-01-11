# Padova Smart-Flow 🚦

An intelligent traffic management and ZTL (Zona a Traffico Limitato) verification system for the city of Padova. Built with NestJS, PostGIS, and Redis.

## Infrastructure (M3 Pro Optimized)
This project is configured to run on Apple Silicon using Docker.

- **Database:** PostgreSQL 16 + PostGIS (Spatial Extensions)
- **Cache:** Redis 7-Alpine
- **Backend:** NestJS (Node.js 20)

## Getting Started

### 1. Prerequisites
- Docker Desktop (Ensure Rosetta is configured correctly if using Intel images, though we use ARM64 natively).
- Node.js v20+

### 2. Environment Setup
Clone the repo and install dependencies:
```bash
npm install
```

### 3. Launch Services
We use port 5433 for the database to avoid conflicts with local Postgres installations on macOS:
```bash
docker-compose up -d
```

### 4. Run the Application
```bash
npm run start:dev
```
## API Endpoints
* GET /ztl/check?lng={longitude}&lat={latitude} Checks if a coordinate is inside the Padova ZTL zones.

## Roadmap / Next Steps
```text

Phase 1: Foundation (Current)
[x] Dockerization with PostGIS and Redis.
[x] ZTL Spatial Entity and TypeORM integration.
[x] Automated database seeding for Padova test zones.
[x] GitHub Actions CI pipeline on development branch.

Phase 2: Intelligence & Real-time
[ ] Redis Caching: Implement a caching layer for high-frequency GPS checks.
[ ] Real Data Import: Replace test squares with actual Padova ZTL GeoJSON polygons.
[ ] Traffic Simulation: Create a script to simulate multiple vehicles moving through the city.

Phase 3: Analytics
[ ] Vehicle History: Store breadcrumb trails of vehicle movements.
[ ] Congestion Heatmap: Visualize "hot zones" where traffic is most dense.

```