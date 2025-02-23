import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInSchema } from "../../models/auth.schema";

const authAppRouter = new Hono().post(
    "/login",
    zValidator("json", signInSchema),
    (c) => {
        return c.json({ success: 200 });
    },
);

export default authAppRouter;
