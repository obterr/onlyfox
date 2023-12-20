import { Head } from "$fresh/runtime.ts";
import { fetchMetadata } from "../../utils/db.ts";
import MetaTags from "../../components/meta-tags.tsx";
import { MEGA_LINKS } from "../../utils/links.ts";

export default async function MegaPage() {
  const { title, description, image } = await fetchMetadata({
    column: "url",
    table: "mega",
    identification: "mega",
  });
  return (
    <>
      <Head>
        <title>Mega Links</title>
        <MetaTags title={title} description={description} image={image} />
      </Head>
      <main>
        <h1 className="text-center text-xl sm:text-2xl mb-2">
          This mega folder is splitted in two links:
        </h1>
        <div className="flex gap-4 justify-center">
          <a
            className="bg-purple-400 py-2 px-6 rounded-full hover:bg-purple-500"
            href={MEGA_LINKS.Part1}
          >
            Part 1
          </a>
          <a
            className="bg-purple-400 py-2 px-6 rounded-full hover:bg-purple-500"
            href={MEGA_LINKS.Part2}
          >
            Part 2
          </a>
        </div>
      </main>
    </>
  );
}
