# Frontend Template

Production-ready frontend template built with Vite, React, TypeScript, TanStack Router, React Query, Better Auth client utilities, and Tailwind CSS.

## Stack

| Category     | Technology                     |
| ------------ | ------------------------------ |
| Framework    | React + Vite                   |
| Language     | TypeScript                     |
| Routing      | TanStack Router                |
| Server State | TanStack React Query           |
| Client State | Zustand                        |
| Styling      | Tailwind CSS                   |
| Forms        | React Hook Form                |
| Validation   | Zod                            |
| HTTP         | Axios                          |
| Auth         | Better Auth (client)           |
| Code Quality | ESLint + Prettier + Commitlint |
| Git Hooks    | Husky + lint-staged            |
| CI           | GitHub Actions                 |

## Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
pnpm install
```

3. Copy environment variables:

```bash
cp .env.example .env
```

4. Start development server:

```bash
pnpm dev
```

## Better Auth Note

This template includes Better Auth client-side integration helpers only. You must provide a compatible backend setup for auth endpoints and providers.

Docs: https://www.better-auth.com/docs

## Directory Structure

```text
root/
├── .github/
│   └── workflows/
│       └── ci.yml                        # CI workflow for type-check, lint, format, build
├── .husky/
│   ├── pre-commit                        # Runs lint-staged before commits
│   └── commit-msg                        # Runs commitlint for commit messages
├── src/
│   ├── app/
│   │   ├── providers.tsx                 # App-level providers (Router + QueryClient)
│   │   └── router.tsx                    # TanStack Router instance setup
│   ├── routes/
│   │   ├── __root.tsx                    # Root route and router devtools
│   │   ├── index.tsx                     # Landing page route
│   │   ├── _authenticated.tsx            # Protected layout route with auth guard
│   │   ├── _authenticated/
│   │   │   └── dashboard/
│   │   │       └── index.tsx             # Dashboard route
│   │   └── auth/
│   │       ├── login.tsx                 # Login route
│   │       └── register.tsx              # Register route
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── login-form.tsx        # Login form UI and behavior
│   │   │   │   ├── register-form.tsx     # Register form UI and behavior
│   │   │   │   └── google-auth-button.tsx # Google social sign-in action
│   │   │   ├── hooks/
│   │   │   │   ├── use-login.ts          # Login mutation hook
│   │   │   │   └── use-register.ts       # Register mutation hook
│   │   │   ├── schemas/
│   │   │   │   └── auth.schemas.ts       # Auth form schemas and inferred types
│   │   │   ├── services/
│   │   │   │   └── auth.service.ts       # Auth profile API service
│   │   │   └── stores/
│   │   │       └── auth.store.ts         # Auth-local state store
│   │   └── dashboard/
│   │       └── components/
│   │           └── dashboard-page.tsx    # Dashboard UI
│   └── shared/
│       ├── components/
│       │   └── ui/
│       │       ├── button.tsx            # Reusable button component
│       │       ├── input.tsx             # Reusable input component
│       │       └── form-field.tsx        # Field wrapper for labels/errors/hints
│       ├── hooks/
│       │   ├── use-debounce.ts           # Debounce utility hook
│       │   └── use-local-storage.ts      # LocalStorage state hook
│       ├── lib/
│       │   ├── env.ts                    # Runtime env validation via Zod
│       │   ├── axios.ts                  # Shared Axios instance + interceptors
│       │   ├── query-client.ts           # Shared React Query client config
│       │   └── auth-client.ts            # Better Auth client exports
│       ├── schemas/
│       │   └── common.ts                 # Shared Zod primitive schemas
│       ├── stores/
│       │   └── app.store.ts              # App-wide UI store with persistence
│       ├── types/
│       │   └── api.types.ts              # Shared API response/error types
│       └── utils/
│           └── cn.ts                     # Classname merge helper (clsx + twMerge)
├── index.html                             # Vite HTML entry
├── main.tsx                               # Entry import shim for template structure
├── index.css                              # Root-level style file in requested structure
├── vite.config.ts                         # Vite config + TanStack Router plugin + @ alias
├── tsconfig.json                          # TypeScript project references
├── tsconfig.app.json                      # App TypeScript config
├── tsconfig.node.json                     # Node/Vite TypeScript config
├── tailwind.config.ts                     # Tailwind theme config
├── postcss.config.js                      # PostCSS config
├── eslint.config.js                       # Flat ESLint config
├── .prettierrc                            # Prettier config
├── .prettierignore                        # Prettier ignore patterns
├── .gitignore                             # Git ignore patterns
├── .env.example                           # Environment variable template
├── commitlint.config.js                   # Conventional commit lint rules
├── lint-staged.config.mjs                 # Staged file formatting/linting rules
├── .npmrc                                 # pnpm behavior config
└── README.md                              # Project documentation
```

## Scripts

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `pnpm dev`          | Start Vite development server                             |
| `pnpm build`        | Type-check project references and build production assets |
| `pnpm lint`         | Run ESLint across the project                             |
| `pnpm lint:fix`     | Run ESLint and auto-fix issues                            |
| `pnpm format`       | Format the entire project with Prettier                   |
| `pnpm format:check` | Check formatting without writing changes                  |
| `pnpm type-check`   | Run TypeScript checks without emitting files              |
| `pnpm preview`      | Preview production build locally                          |
| `pnpm prepare`      | Initialize Husky hooks                                    |

## Environment Variables

| Variable                | Required | Description                                    |
| ----------------------- | -------- | ---------------------------------------------- |
| `VITE_API_URL`          | Yes      | Base URL for API requests used by Axios client |
| `VITE_AUTH_BASE_URL`    | Yes      | Base URL for Better Auth client                |
| `VITE_GOOGLE_CLIENT_ID` | Yes      | Google OAuth client ID for social auth flow    |

## Commit Convention

Commitlint enforces Conventional Commits with these allowed types:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`
- `build`
- `ci`
- `chore`
- `revert`

Subject rules:

- Max length: 72
- Case: lower-case

Examples:

- `feat(auth): add google social login button`
- `fix(router): redirect unauthenticated users to login`
- `chore(ci): run format check in workflow`

## Adding a New Feature

1. Create a new feature folder in `src/features/<feature-name>/` with component, hook, service, and schema boundaries as needed.
2. Add route files in `src/routes/` and wire UI with shared components from `src/shared/components/ui/`.
3. Add data fetching/mutations with React Query and shared Axios client, plus validation with Zod schemas.
4. Run `pnpm type-check`, `pnpm lint`, and `pnpm format:check` before opening a PR.
