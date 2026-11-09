# Preshel Dental Care — Backend starter

Single-clinic Express + MongoDB API designed around one resident dentist and visiting specialists when needed.

## Included models
- `Admin`: one administrator account (the dentist).
- `DentistProfile`: the permanent dentist's public profile.
- `Specialist`: visiting specialists; internal visit dates and specialist fees are admin-only.
- `Service`: patient-facing treatment details/prices plus private internal costs.
- `Appointment`: general or specialist consultation requests, confirmation, status and private accounting.
- `Enquiry`, `Testimonial`, `GalleryItem`.

## Setup
1. Install Node.js (LTS).
2. Copy `.env.example` to `.env`.
3. Fill `DATABASE_URL`, `JWT_SECRET`, `ADMIN_SETUP_SECRET`, and `CLIENT_ORIGIN`.
4. Run `npm install`.
5. Run `npm run dev`.

## Create the sole admin
Set a strong `ADMIN_SETUP_SECRET` in `.env`, then make one request:

`POST /api/auth/setup`

Header: `x-setup-secret: <your ADMIN_SETUP_SECRET>`

JSON body:
`{ "name": "Clinic Admin", "email": "admin@example.com", "password": "a-long-password-at-least-12-chars" }`

After creating the account, remove or rotate `ADMIN_SETUP_SECRET` and disable/remove the `/setup` route before production deployment. Login at `POST /api/auth/login`; use the returned token as `Authorization: Bearer <token>`.

## Privacy rules
- Specialist `visitingDates`, `specialistFee`, and `internalNotes` are schema-level `select:false`.
- Service `internalCost` and `specialistFee` are schema-level `select:false`.
- Appointment internal accounting, payment details and admin notes are schema-level `select:false`.
- Public service and specialist controllers explicitly whitelist fields.
- Patient-facing price (`patientPrice`) is separate from clinic cost and specialist remuneration.
- A patient can view their own appointment status only after you add a verification mechanism. The starter status endpoint is intentionally marked for this security hardening.

**Important:** `select:false` is a safeguard against accidental reads, not a substitute for API authorization. Never return raw Mongo documents from new public endpoints; use explicit field projections/DTOs.

## API outline
- `GET /api/health`
- `POST /api/auth/login`
- `POST /api/auth/setup` (temporary bootstrap only)
- `GET /api/services` / admin CRUD under `/api/services/admin`
- `GET /api/specialists` / admin CRUD under `/api/specialists/admin`
- `POST /api/appointments`; admin list/update under `/api/appointments/admin`
- `POST /api/enquiries`; admin list/update under `/api/enquiries/admin`
- `GET /api/testimonials`; admin CRUD under `/api/testimonials/admin`
- `GET /api/gallery`; admin CRUD under `/api/gallery/admin`
- `GET /api/admin/dashboard`

## Before production
Add rate limiting, request validation (e.g. Zod/Joi), CSRF strategy if using cookies, verified patient access to appointment status, email notifications, Cloudinary upload handling, audit logging, backups, and HTTPS. Review CORS origins and remove the bootstrap setup route.
