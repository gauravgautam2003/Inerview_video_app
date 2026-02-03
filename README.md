# Video Calling Interview App

Simple full-stack video calling interview application (React + Node). Includes a client (Vite + React) and a server (Express) with basic DB setup and environment configuration.

## Repo structure

- **client/** — React frontend (Vite)
- **server/** — Express backend, controllers, routes, DB helpers

## Prerequisites

- Node.js 18+ and npm/yarn
- (Optional) A PostgreSQL or MongoDB instance if you configure persistent storage

## Environment

Create a `.env` file in `server/` with the variables documented in `server/src/lib/env.js` (or use the example below):

```
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

## Install

From the repo root, install both client and server dependencies:

```bash
# install server deps
cd server
npm install

# install client deps
cd ../client
npm install
```

## Run (development)

Open two terminals:

```bash
# Terminal 1: start server
cd server
npm run dev

# Terminal 2: start client
cd client
npm run dev
```

The client runs on the Vite dev server (usually `http://localhost:5173`) and the server on the port from your `.env` (default `5000`).

## Database setup

This project includes `server/src/lib/db.js` to centralize DB connection. If using a hosted DB, set `DATABASE_URL` in `.env`. For local DB, follow your DB provider's instructions.

## Scripts

- `npm run dev` (in `client`) — start Vite dev server
- `npm run dev` (in `server`) — start server with nodemon (if configured)

## Notes

- Check `client/src` for React components and `server/src` for routes/controllers.
- Update CORS settings in `server/server.js` if the client is served from a different origin in production.

## Contributing

PRs welcome. Open an issue for bugs or features.

## License

This project is provided as-is. Add a license file if needed.

