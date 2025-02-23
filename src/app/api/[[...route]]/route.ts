import { Hono } from "hono";
import { handle } from "hono/vercel";

// Create the main Hono app
const app = new Hono().basePath("/api");

// Import the auth router
import authRouter from "@/server/api/routes/auth/route";

const routes = app.route("/v1/auth", authRouter);

export const GET = handle(app);

export type ServerApiAppType = typeof routes;
