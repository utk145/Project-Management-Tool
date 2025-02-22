import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello-test", (c) => {
    return c.json({ hello: "Hello World" });
});

export const GET = handle(app);
