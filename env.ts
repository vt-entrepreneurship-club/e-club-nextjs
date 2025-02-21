// @ts-expect-error (depending on your TS config)
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NOTION_API_KEY: z.string(),
    NOTION_PAGE_ID: z.string(),
    DATABASE_ID_STUDENT: z.string(),
    DATABASE_ID_MENTOR: z.string(),
  },

  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string(),
    NEXT_PUBLIC_DATABASE_ID_STUDENT: z.string(),
    NEXT_PUBLIC_DATABASE_ID_MENTOR: z.string(),
  },

  runtimeEnv: {
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID,
    DATABASE_ID_STUDENT: process.env.DATABASE_ID_STUDENT,
    DATABASE_ID_MENTOR: process.env.DATABASE_ID_MENTOR,

    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_DATABASE_ID_STUDENT:
      process.env.NEXT_PUBLIC_DATABASE_ID_STUDENT,
    NEXT_PUBLIC_DATABASE_ID_MENTOR: process.env.NEXT_PUBLIC_DATABASE_ID_MENTOR,
  },
});
