import { Client } from "postgres";
import { load } from "$std/dotenv/mod.ts";

const {
  ENV,
  DB_USER,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
} = await load();

if (
  (DB_USER || DB_NAME || DB_HOST || DB_PORT || DB_PASSWORD) === "" &&
  ENV !== "dev"
) {
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

await client.connect();

interface QueryProps {
  column: string;
  table: string;
  identification: string;
}

interface QueryResult {
  title: string;
  description: string;
  image: string;
}

export async function fetchMetadata(
  { column, table, identification }: QueryProps,
) {
  const imageQuery = `SELECT ${column} FROM ${table} ORDER BY random() LIMIT 1`;
  const titleQuery =
    `SELECT title FROM titles WHERE identification=${identification}`;
  const descriptionQuery =
    `SELECT description FROM descriptions WHERE identification=${identification}`;

  const { rows: [imageResult] } = await client.queryObject<QueryResult>(
    imageQuery,
  );
  const { rows: [titleResult] } = await client.queryObject<QueryResult>(
    titleQuery,
  );
  const { rows: [descriptionResult] } = await client.queryObject<QueryResult>(
    descriptionQuery,
  );

  return {
    title: titleResult,
    description: descriptionResult,
    image: imageResult,
  };
}
