// External Libraries
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

// Internal imports
import { signInSchema, signUpSchema } from "../../models/auth.schema";

const authAppRouter = new Hono()
    .post("/login", zValidator("json", signInSchema), (c) => {
        const { email, password } = c.req.valid("json");
        return c.json({ email, password });
    })
    .post("/register", zValidator("json", signUpSchema), (c) => {
        const { email, password, name } = c.req.valid("json");
        return c.json({ email, password, name });
    });
export default authAppRouter;
