# Database and Data Layer Notes

## Philosophy

- Keep blog content in MDX for writing experience.
- Store relational, query-heavy metadata in PostgreSQL.
- Keep data access in feature services, not inside UI routes/components.

## Core Environment Variables

- `DATABASE_URL`: PostgreSQL connection string.
- `AUTH_SECRET`: secret for future Auth.js integration.
- `NEXT_PUBLIC_SITE_URL`: canonical site URL for metadata.

## Migration Workflow

1. Update `prisma/schema.prisma`.
2. Run `npm run db:migrate -- --name <change_name>`.
3. Run `npm run db:generate`.
4. Run `npm run db:seed` if needed.
5. Commit schema + migration files together.

## Production Safety

- Use `npm run db:deploy` in CI/CD to apply reviewed migrations only.
- Never modify production schema manually.
- Back up data before high-risk schema changes.
