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