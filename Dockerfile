FROM denoland/deno:latest

EXPOSE 8000
WORKDIR /app
COPY . /app

CMD ["run", "-A", "main.ts"]