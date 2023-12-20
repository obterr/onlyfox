interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

export function createRedirect({ title, description, image, url }: Props) {
  const html = `
  <html>
    <head>
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${image}" />
      <meta name="twitter:card" content="summary_large_image">
    </head>
  </html>
  `;
  const blob = new Blob([html], { type: "text/html" });
  const res = new Response(blob, { status: 301, headers: { location: url } });
  return res;
}
