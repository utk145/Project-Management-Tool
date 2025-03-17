// Internal imports
import { ServerApiAppType } from "@/app/api/[[...route]]/route";
// External Libraries
import { hc } from "hono/client";

export const client = hc<ServerApiAppType>(process.env.NEXT_PUBLIC_APP_URL!);
