# App Directory Context
This folder contains the Next.js 15 App Router pages and layouts.
- Data fetching should happen here in server components.
- Security: Always validate data and ensure headers are secure (handled via next.config.ts and middleware if applicable).
- No cinematic UI logic here; import it from `components/blocks`.
