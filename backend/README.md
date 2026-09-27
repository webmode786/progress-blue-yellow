# Skyline Forms API (Hostinger Node.js)

1. In hPanel create a MySQL database + user, then run `schema.sql` in phpMyAdmin.
2. Create a Node.js app (Node 18+), upload this `backend/` folder, entry file `server.js`.
3. Add the variables from `.env.example` in the app's environment settings (never commit `.env`).
4. Run `npm install`, start the app, point a subdomain (e.g. `api.your-domain.com`) at it with SSL.
5. Check `https://api.your-domain.com/api/health` returns `{"ok":true}`.
6. In the website, set `VITE_API_BASE_URL=https://api.your-domain.com` and publish.

Endpoint: `POST /api/forms/submit` (JSON). Rate limit: 10 requests / 15 min / IP. Body limit 20 kB.
