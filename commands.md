# Cogio — Commands

Quick reference for common development commands.

## Client app (customer)

```bash
cd client && npm run dev
```

**http://localhost:5173**

### First-time setup

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

## Admin (platform console)

```bash
cd admin && npm run dev
```

**http://localhost:5174** — login: `admin@cogio.app` / `Admin123!` after `npm run prisma:seed` in backend

## Backend (shared API)

```bash
cd backend && npm run dev
```

**http://localhost:3001**

### First-time backend setup

```bash
cd backend
cp .env.example .env
npm install
npm run prisma:generate
npm run prisma:migrate   # when PostgreSQL is ready
npm run prisma:seed      # creates admin role + admin user
npm run dev
```

Update `CORS_ORIGINS` in `.env` to include both app URLs:

```
CORS_ORIGINS=http://localhost:5173,http://localhost:5174
```

---

## Run full stack (three terminals)

```bash
cd backend && npm run dev
cd client && npm run dev
cd admin && npm run dev
```

---

## URLs

| Service | URL |
|---------|-----|
| Client app | http://localhost:5173 |
| Admin console | http://localhost:5174 |
| Login | http://localhost:5173/login |
| API | http://localhost:3001 |
