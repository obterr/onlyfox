import { Client } from "postgres";
import { load } from "$std/dotenv/mod.ts";

const {
  DB_USER,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
} = await load();

if ((DB_USER || DB_NAME || DB_HOST || DB_PORT || DB_PASSWORD) === "") {
  console.error("Some env values are missing or undefined");
  Deno.exit(1);
}

const client = new Client({
  user: DB_USER,
  database: DB_NAME,
  hostname: DB_HOST,
  port: DB_PORT,
  password: DB_PASSWORD,
});

try {
  await client.connect();
} catch (e) {
  console.error(e);
  Deno.exit(1);
}

interface QueryProps {
  column: string;
  table: string;
  identification: string;
}

export async function fetchMetadata(
  { column, table, identification }: QueryProps,
) {
  const imageQuery = `SELECT ${column} FROM ${table} ORDER BY random() LIMIT 1`;
  const titleQuery =
    `SELECT title FROM titles WHERE identification = '${identification}'`;
  const descriptionQuery =
    `SELECT description FROM descriptions WHERE identification = '${identification}'`;

  const { rows: [{ url: image }] } = await client.queryObject<
    { id: number; url: string }
  >(
    imageQuery,
  );
  const { rows: [{ title }] } = await client.queryObject<
    { id: number; title: string; identification: string }
  >(
    titleQuery,
  );
  const { rows: [{ description }] } = await client.queryObject<
    { id: number; description: string; identification: string }
  >(
    descriptionQuery,
  );

  return {
    title,
    description,
    image,
  };
}
