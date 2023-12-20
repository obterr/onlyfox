# Onlyfox

This is the source code for [onlyfox.vip](https://www.onlyfox.vip/)

## Usage

Note: This project does require seperate PostgreSQL database.

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Set up environment variables to .env file.

Set TLS certificate and key to the root of project, with filenames: server.crt,
server.key Or modify [main.ts](main.ts) line 13 to

```js
await start(manifest, { config });
```

### Start project

```sh
deno task start
```

This will watch the project directory and restart as necessary.

### Start project with Docker

```sh
bash update.sh
```
