# Authentication Foundation

## Scope

- Single-admin CMS use case.
- Clerk sign in and sign up flow.
- Protected `/admin` routes.
- Minimal maintenance using Clerk-managed sessions.

## Core Files

- `src/proxy.ts`: Clerk middleware and route protection.
- `src/app/layout.tsx`: `ClerkProvider` root setup.
- `src/app/(public)/login/[[...rest]]/page.tsx`: Login page.
- `src/app/(public)/register/[[...rest]]/page.tsx`: Register page.
- `src/app/(admin)/layout.tsx`: Server-side user checks and admin shell.

## Security Principles

- Session and cookies are managed by Clerk.
- Server-side checks protect `/admin` routes before rendering.
- Secrets are only read from environment variables.

## Validation Layers

1. Clerk sign-in/sign-up validation.
2. Clerk session validation in middleware/server checks.
3. Database constraints for non-auth domain data.

## Future-safe Extensions

- Add OAuth providers from Clerk dashboard.
- Add role checks from Clerk metadata if multi-admin grows.
- Add audit logs as separate table without changing current route protection.
