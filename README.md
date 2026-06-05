# Cogio

AI-powered time tracking and workforce management platform.

## Overview

Cogio helps organizations manage projects, tasks, time entries, and timesheets with role-based access control and an AI timesheet assistant (in development).

Monorepo layout:

- `client/` — React + Vite customer app
- `admin/` — React + Vite admin console (platform admins)
- `backend/` — Fastify API, Prisma, PostgreSQL (shared)
- `docs/` — project documentation

## Prerequisites

- Node.js 20+
- PostgreSQL 16+
- Redis 7+ (queues, cache, Socket.IO adapter)

## Local setup

### 1. Database and Redis

Install and run PostgreSQL and Redis locally, or use managed services. Create a database:

```bash
createdb cogio
```

### 2. Backend

```bash
cd backend
cp .env.example .env
# Edit .env with DATABASE_URL, REDIS_URL, JWT secrets, CORS_ORIGINS, etc.
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

API default: `http://localhost:3001`

### 3. Client app

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

App default: `http://localhost:5173`

### 4. Admin app

```bash
cd admin
cp .env.example .env
npm install
npm run dev
```

Admin default: `http://localhost:5174`

After migrations, seed an admin user:

```bash
cd backend
npm run prisma:seed
```

Default login: `admin@cogio.app` / `Admin123!` (override via `ADMIN_SEED_EMAIL` and `ADMIN_SEED_PASSWORD` in `backend/.env`).

## Development workflow

1. Start PostgreSQL and Redis.
2. Run backend (`npm run dev` in `backend/`).
3. Run client app (`npm run dev` in `client/`) and/or admin (`npm run dev` in `admin/`).
4. Use `npm run lint` and `npm run format` in each package before commits.
5. After schema changes: `npm run prisma:migrate` in `backend/`.

## Scripts

| Package  | Command              | Description        |
|----------|----------------------|--------------------|
| client   | `npm run dev`        | Vite dev server    |
| client   | `npm run build`      | Production build   |
| client   | `npm run lint`       | ESLint             |
| client   | `npm run format`     | Prettier           |
| admin    | `npm run dev`        | Admin dev server (port 5174) |
| admin    | `npm run build`      | Admin production build |
| backend  | `npm run dev`        | API with hot reload|
| backend  | `npm run build`      | Compile TypeScript |
| backend  | `npm run start`      | Run compiled API   |
| backend  | `npm run prisma:generate` | Prisma client |
| backend  | `npm run prisma:migrate`  | Run migrations |
| backend  | `npm run prisma:seed`     | Seed roles + admin user |

See [tech-stack.md](./tech-stack.md) for the full technology map.
