import { Head } from "$fresh/runtime.ts";
import Countdown from "../islands/countdown.tsx";
import MetaTags from "../components/meta-tags.tsx";
import { timerIsZero } from "../utils/calc-time.ts";
import { fetchMetadata } from "../utils/db.ts";
import { SOCIAL_LINKS } from "../utils/links.ts";

export default async function Home() {
  const timer = 1703181480;
  const redirect = timerIsZero(timer)
    ? 3
    : Math.floor(timer - (Date.now() / 1000));
  // implementation of fetching metadata from the database...
  const { title, description, image } = await fetchMetadata({
    column: "url",
    table: "images",
    identification: "stream",
  });
  return (
    <>
      <Head>
        <meta
          httpEquiv="refresh"
          content={`${redirect},url=${SOCIAL_LINKS.Twitch}`}
        />
        <MetaTags
          title={title}
          description={description}
          image={image}
        />
      </Head>
      <main>
        <Countdown
          timer={timer}
        />
      </main>
    </>
  );
}
