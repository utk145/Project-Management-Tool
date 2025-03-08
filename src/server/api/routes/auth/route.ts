import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInSchema, signUpSchema } from "../../models/auth.schema";

const authAppRouter = new Hono()
    .post("/login", zValidator("json", signInSchema), (c) => {
        const { email, password } = c.req.valid("json");
        console.log({email, password}); // IMPORTANT: Remove this line
        return c.json({ email, password });
    })
    .post("/register", zValidator("json", signUpSchema), (c) => {
        const { email, password, name } = c.req.valid("json");
        console.log({email, password, name}); // IMPORTANT: Remove this line
        return c.json({ email, password, name });
    });
export default authAppRouter;
