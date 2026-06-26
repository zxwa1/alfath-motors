# Al Fath Motors - Cybersecurity Rules & Policies

## 1. Input Validation & Sanitization
- **All user inputs** (search fields, filters, forms) MUST be validated on both the client side and the server side.
- Use libraries like `zod` for rigorous schema validation.
- Do not trust any input. Sanitize outputs to prevent Cross-Site Scripting (XSS). React automatically escapes string variables, but beware of `dangerouslySetInnerHTML`. NEVER use `dangerouslySetInnerHTML` unless absolutely necessary and the content is strictly sanitized using DOMPurify.

## 2. API & Server Actions Security
- All Server Actions must verify the user's authentication and authorization before processing the request.
- Use parameterized queries or ORMs (like Prisma/Drizzle) exclusively to prevent SQL Injection. **Never** construct SQL queries via string concatenation.
- Rate-limit API endpoints and Server Actions to prevent brute-force attacks or abuse.

## 3. Headers and Configurations
- HTTP security headers have been configured in `next.config.ts`, including a strict Content Security Policy (CSP).
- If additional external resources (like fonts, images from CDNs, analytics scripts) are needed, the CSP in `next.config.ts` MUST be updated explicitly to allow them.

## 4. Dependencies
- Run `npm audit` frequently.
- Keep all dependencies, especially Next.js and React, up to date with the latest security patches.

## 5. Data Handling
- Sensitive data must never be exposed to the client unnecessarily. Only send the exact fields required by the UI.
- API keys, secrets, and database connection strings MUST be stored securely in environment variables and never committed to source control.
