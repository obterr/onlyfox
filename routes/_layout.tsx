import type { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import SocialNavbar from "../components/social-nav.tsx";
import Navbar from "../components/nav.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        <title>OnlyFox</title>
      </Head>
      <header className="sticky z-50 mx-4 mt-2 sm:mx-auto backdrop-blur-md rounded-full px-8 border-2 border-purple-300">
        <Navbar />
      </header>
      <aside className="fixed sm:top-24 bottom-8 left-1 z-50">
        <SocialNavbar />
      </aside>
      <Component />
    </>
  );
}
