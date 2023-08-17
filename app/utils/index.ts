import { draftMode } from "next/headers";

export const preview = draftMode().isEnabled
? { token: process.env.SANITY_API_READ_TOKEN }
: undefined;