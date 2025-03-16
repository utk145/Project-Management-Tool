// External Libraries
import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";
import { ID } from "node-appwrite";

// Internal Modules
import { signInSchema, signUpSchema } from "../../models/auth.schema";
import { createAdminClient } from "@/lib/server/appwrite/appwrite";
import { AllCommonsConstants } from "@/lib/commons/AllCommonsConstants";
import { ApiResponse } from "@/lib/commons/ApiResponse";
import { sanitizeUser } from "@/lib/utils/utils";
import { logger } from "@/lib/logging/logger";
import { ApiError } from "@/lib/commons/ApiError";

const { CookieNames, HttpStatusCodes, CookieAuthExpiry } = AllCommonsConstants;

const authAppRouter = new Hono()
    .post("/login", zValidator("json", signInSchema), async (c) => {
        const { email, password } = c.req.valid("json");
        console.log({ email, password }); // IMPORTANT: Remove this line
        return c.json({ email, password });
    })

    .post("/register", zValidator("json", signUpSchema), async (c) => {
        const { email, password, name } = c.req.valid("json");
        console.log({ email, password, name }); // IMPORTANT: Remove this line

        try {
            const { account } = await createAdminClient();
            const user = await account.create(
                ID.unique(),
                email,
                password,
                name,
            );
            const session = await account.createEmailPasswordSession(
                email,
                password,
            );

            setCookie(c, CookieNames.AUTH_COOKIE_NAME, session.secret, {
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: CookieAuthExpiry,
            });

            logger.info("User registered successfully.", { user });

            const sanitizeUserForClientResponse = sanitizeUser(user);

            return c.json(
                new ApiResponse(
                    HttpStatusCodes.OK,
                    { user: sanitizeUserForClientResponse },
                    "User registered successfully.",
                ),
            );
        } catch (error: any) {
            logger.error("Error registering user.", { error });
            throw new ApiError(HttpStatusCodes.CONFLICT, error?.message);
        }
    });

export default authAppRouter;
