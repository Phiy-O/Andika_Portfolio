# Authentication Foundation

## Scope

- Single-admin CMS use case.
- Credentials login (email + password).
- JWT sessions for stateless route protection.

## Core Files

- `src/lib/auth.ts`: Auth.js options and credentials provider.
- `src/app/api/auth/[...nextauth]/route.ts`: Auth handlers.
- `middleware.ts`: Centralized `/admin` route protection.
- `src/app/(public)/login/page.tsx`: Login page.

## Security Principles

- Passwords are hashed with bcrypt (`12` salt rounds).
- No plaintext password storage.
- Session cookies are managed by Auth.js (HTTP-only by default).
- Server-side checks protect admin routes before rendering.

## Validation Layers

1. Client form constraints (`required`, `minLength`).
2. Server schema validation with Zod.
3. Database constraints (`unique` email, required fields).

## Future-safe Extensions

- Add OAuth providers in `src/lib/auth.ts`.
- Add more roles by extending `UserRole` enum in Prisma.
- Add audit logs as separate table without changing auth flow.
