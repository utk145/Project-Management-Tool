import { Hono } from "hono";
import { handle } from "hono/vercel";

// Create the main Hono app
const app = new Hono().basePath("/api");

// Import the auth router
import authAppRouter from "@/lib/server/api/routes/auth/route";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/v1/auth", authAppRouter);

export const GET = handle(app);
export const POST = handle(app);
export type ServerApiAppType = typeof routes;
