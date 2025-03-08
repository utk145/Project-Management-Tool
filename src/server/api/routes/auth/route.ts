import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInSchema } from "../../models/auth.schema";

const authAppRouter = new Hono().post(
    "/login",
    zValidator("json", signInSchema),
    (c) => {
        const { email, password } = c.req.valid("json");
        return c.json({ email, password });
    },
);

export default authAppRouter;
