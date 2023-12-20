import { Head } from "$fresh/runtime.ts";
import { MEGA_LINKS } from "../../utils/links.ts";

export default function MegaPage() {
  return (
    <>
      <Head>
        <title>Mega Links</title>
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
