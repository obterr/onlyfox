FROM denoland/deno:latest
WORKDIR /app
COPY . /app

RUN deno task build

EXPOSE 8000

CMD ["task", "preview"]