# Onlyfox

This is the source code for [onlyfox.vip](https://www.onlyfox.vip/)

## Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Set up environmental values to .env file

Set TLS certificate and key to the root of project, with filenames: server.crt, server.key.
Or modify [main.ts](main.ts) line 13 to
```
await start(manifest, {config});
```

Start project:

```
deno task start
```

Start project with docker

```
bash update.sh
```

This will watch the project directory and restart as necessary.
