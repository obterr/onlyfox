FROM denoland/deno:latest

WORKDIR /app
COPY . /app

RUN deno cache main.ts

EXPOSE 8000

CMD ["run", "-A", "main.ts"]