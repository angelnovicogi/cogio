You are a senior software architect and TypeScript engineer.

I am creating a new SaaS product called **Cogio**.

The root folder already exists and is named:

```
cogio
```

Your task is to fully bootstrap the project structure, install dependencies, create configuration files, and prepare a production-ready foundation.

Do NOT ask questions. Make reasonable decisions.

## Project Goals

Cogio is an AI-powered time tracking and workforce management platform.

Initial MVP features:

* Organizations
* Users
* Authentication
* Roles & Permissions
* Projects
* Tasks
* Time Tracking
* Timesheets
* Reports
* AI Timesheet Assistant
* Google Calendar Integration

Future features:

* LangGraph agents
* Slack integration
* Microsoft integrations
* Capacity planning
* Project health monitoring
* Mobile app

---

# Architecture

Use a monorepo structure:

```
cogio/
├── client/
├── admin/
├── backend/
├── docs/
├── .gitignore
├── README.md
└── tech-stack.md
```

---

# Client app requirements

Create a React application using:

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Shadcn/UI
- Radix UI
- TanStack Query
- TanStack Table
- React Hook Form
- Zod
- Zustand
- Axios

### UI Enhancements
- Framer Motion
- Lucide React
- Sonner
- Recharts
- DnD Kit

Configure:

* ESLint
* Prettier
* Path aliases
* Environment variables

Create the following structure:

```
client/src
├── api
├── assets
├── components
│   ├── common
│   ├── forms
│   ├── layout
│   └── ui
├── hooks
├── layouts
├── pages
│   ├── auth
│   ├── dashboard
│   ├── organizations
│   ├── projects
│   ├── tasks
│   ├── time-entries
│   ├── timesheets
│   ├── reports
│   └── settings
├── routes
├── services
├── store
├── types
├── utils
└── lib
```

Create placeholder pages for all modules.

Configure:

* Tailwind
* Shadcn
* React Router
* TanStack Query Provider
* Zustand store structure

Create a modern dashboard layout with:

* Sidebar
* Header
* Main content area

---

# Backend Requirements

Create a Fastify application using:

* Node.js
* TypeScript
* Fastify
* Prisma
* PostgreSQL
* JWT
* bcrypt
* Socket.IO
* Redis
* BullMQ
* Zod
* Pino Logger

Configure:

* ESLint
* Prettier
* tsconfig
* Environment variables

Create structure:

```
backend/src
├── app.ts
├── server.ts
├── config
├── plugins
├── middleware
├── modules
│   ├── auth
│   ├── organizations
│   ├── users
│   ├── roles
│   ├── projects
│   ├── tasks
│   ├── time-entries
│   ├── timesheets
│   ├── reports
│   └── ai
├── services
├── repositories
├── jobs
├── socket
├── utils
├── types
└── validations
```

Each module should contain:

```
controller
service
repository
routes
schema
types
```

Generate placeholder implementations.

---

# Database

Use Prisma.

Initialize PostgreSQL configuration.

Create initial Prisma schema with:

Organization

* id
* name
* createdAt
* updatedAt

User

* id
* email
* passwordHash
* firstName
* lastName
* verified
* suspended
* roleId
* organizationId
* createdAt
* updatedAt

Role

* id
* name

Project

* id
* name
* description
* organizationId

Task

* id
* title
* description
* projectId
* assigneeId

TimeEntry

* id
* userId
* taskId
* startTime
* endTime
* durationMinutes
* notes

Timesheet

* id
* userId
* weekStartDate
* status

Create proper relations.

Generate Prisma client.

---

# AI Foundation

Create:

```
backend/src/modules/ai
```

with:

* ai.service.ts
* ai.routes.ts
* ai.schema.ts

Install OpenAI SDK.

Create a placeholder AI service that can later become the AI Timesheet Assistant.

Add environment variables:

```
OPENAI_API_KEY=
```

but do not implement business logic yet.

---

# Environment Files

Generate:

client/.env.example

backend/.env.example

with all required variables.

---

# Scripts

Client app:

* dev
* build
* lint
* format

Backend:

* dev
* build
* start
* prisma:generate
* prisma:migrate
* lint
* format

---

# Documentation

Create:

README.md

with:

* project overview
* local setup instructions (PostgreSQL and Redis installed locally or via managed services)
* development workflow

---

# Important

Use latest stable package versions.

Follow clean architecture principles.

Keep code production-ready.

Install all dependencies.

Generate all files.

Do not only suggest code.

Actually create the entire project structure and execute the setup.
