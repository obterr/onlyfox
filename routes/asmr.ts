import { fetchMetadata } from "../utils/db.ts";
import type { Handler } from "$fresh/server.ts";
import { SOCIAL_LINKS } from "../utils/links.ts";
import { createRedirect } from "../utils/redirect.ts";

export const handler: Handler = async (_req, _ctx) => {
  const { title, description, image } = await fetchMetadata({
    column: "url",
    table: "images",
    identification: "stream",
  });
  const res = createRedirect({
    title,
    description,
    image,
    url: SOCIAL_LINKS.Youtube[2],
  });
  return res;
};
