import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { load } from "https://deno.land/std@0.202.0/dotenv/mod.ts";
import { Head } from "$fresh/runtime.ts";

const env = await load();

const client = new Client({
  user: env["DB_USER"],
  database: env["DB_NAME"],
  hostname: env["DB_HOST"],
  port: env["DB_PORT"],
  password: env["DB_PASSWORD"],
});

await client.connect();

export interface DatabaseProps {
    column: string;
    table: string,
    identification: string,
}

export interface MetaProperties {
    title: string,
    description: string,
    image: string,
    redirect_url: string,
}

export default async function MetaUrlPreview(props: DatabaseProps) {
    const image_query = `SELECT ${props.column} FROM ${props.table} ORDER BY random() LIMIT 1`;
    const title_query = `SELECT title FROM titles WHERE identification='${props.identification}'`;
    const description_query = `SELECT description FROM descriptions WHERE identification='${props.identification}'`;

    const title = await client.queryArray(title_query);
    const description = await client.queryArray(description_query);
    const image = await client.queryArray(image_query);

    const metaProperties: MetaProperties = {
        title: String(title["rows"][0][0]),
        description: String(description["rows"][0][0]),
        image: String(image["rows"][0][0]),
        redirect_url: "",
    }

    return metaProperties;
}
