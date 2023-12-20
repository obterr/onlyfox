export default function MetaTags({ title, description, image }: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
