# Skyline Forms API — Hostinger Node.js deployment

Self-contained Express + MySQL + Nodemailer API. It does not depend on Lovable.

## Files
```
backend/
├── package.json          # dependencies + "start": "node server.js"
├── package-lock.json
├── server.js             # startup file (helmet, CORS, JSON limit, error handler)
├── routes/forms.js       # POST /api/forms/submit
├── controllers/formsController.js
├── middleware/validation.js   # zod validation + sanitising
├── middleware/rateLimiter.js  # 10 requests / 15 min / IP
├── config/database.js    # mysql2 connection pool
├── services/database.js  # parameterised INSERT
├── services/emailService.js   # customer + admin emails
├── schema.sql
├── .env.example
└── .gitignore            # ignores node_modules and .env
```

## 1. Requirements
- Node.js **18 or newer** (tested on 22). Choose 20 or 22 in hPanel.
- MySQL 5.7+ / MariaDB 10.3+ (Hostinger default is fine).
- An email mailbox with SMTP access (Hostinger Email: `smtp.hostinger.com`, port `465`, SSL).

## 2. MySQL
1. hPanel → **Databases → MySQL Databases** → create database + user (note name, user, password).
2. hPanel → **phpMyAdmin** → open the database → **Import** → choose `schema.sql` → Go
   (or paste its contents into the **SQL** tab). This creates table `form_submissions`.
3. `DB_HOST` is usually `localhost` when the Node app runs on the same Hostinger account;
   otherwise use the host shown in hPanel.

## 3. Create the Node.js app
hPanel → **Websites → Add website → Node.js app** (or **Advanced → Node.js**):
- **Application root:** the folder where you upload this `backend/` folder's contents (e.g. `skyline-api`)
- **Startup file:** `server.js`
- **Node version:** 20 or 22
- **Start command:** `npm start` (runs `node server.js`)
- Upload all files above (not `node_modules`, not `.env`), then run **npm install**
  (button in hPanel, or `npm ci --omit=dev` over SSH).

## 4. Environment variables
Add in the app's **Environment variables** panel (values from `.env.example`):

| Variable | Example |
|---|---|
| PORT | set by Hostinger automatically; `3000` locally |
| FRONTEND_URL | `https://www.your-domain.com,https://your-domain.com` (comma-separated, no trailing slash) |
| DB_HOST / DB_PORT | `localhost` / `3306` |
| DB_NAME / DB_USER / DB_PASSWORD | from step 2 |
| SMTP_HOST / SMTP_PORT / SMTP_SECURE | `smtp.hostinger.com` / `465` / `true` (use `587` + `false` for STARTTLS) |
| SMTP_USER / SMTP_PASSWORD | mailbox login |
| SMTP_FROM | `"Skyline Building Material Trading FZC <info@your-domain.com>"` (same mailbox as SMTP_USER) |
| ADMIN_EMAIL | inbox that receives enquiry notifications |

After **any** variable change, click **Restart** on the Node.js app (or redeploy) — values are read at startup.
The app logs `Missing environment variables: …` on start if something is blank.

## 5. API subdomain
1. hPanel → **Domains → Subdomains** → create `api.your-domain.com` and attach it to the Node.js app.
2. Enable **SSL** for the subdomain (hPanel → Security → SSL). The API must be served over HTTPS.

## 6. Test
```bash
curl https://api.your-domain.com/api/health
# {"ok":true}

curl -X POST https://api.your-domain.com/api/forms/submit \
  -H "Content-Type: application/json" \
  -H "Origin: https://www.your-domain.com" \
  -d '{"formType":"contact","name":"Test User","email":"you@example.com","phone":"+971 50 123 4567","message":"Test enquiry from curl"}'
# {"success":true,"message":"Your request has been submitted successfully."}
```
Then check the row in phpMyAdmin and both emails (customer + ADMIN_EMAIL).

## 7. Connect the website
Set `VITE_API_BASE_URL=https://api.your-domain.com` in the website and republish.

## Endpoints
- `GET /api/health` → `{"ok":true}`
- `POST /api/forms/submit` (JSON, max 20 kB)

Request body (only `formType`, `name`, `email`, `phone`, `message` required; unknown fields rejected):
```json
{
  "formType": "contact | quote | product-enquiry | other",
  "name": "string 2-120",
  "email": "valid email",
  "phone": "7-20 chars: digits, spaces, + ( ) -",
  "message": "string 10-5000",
  "companyName": "optional",
  "whatsapp": "optional",
  "product": "optional",
  "productName": "optional",
  "productId": "optional (product code)",
  "category": "optional (category slug)",
  "quantity": "optional",
  "sourcePage": "optional (page path)"
}
```
Responses: `200 {"success":true,...}`, `400` invalid input, `403` other website, `429` rate limited, `500` generic error — no internal details are ever returned.
