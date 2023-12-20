import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <main>
        <div className="flex flex-col place-items-center">
          <div className="w-80 h-80">
            <video autoplay loop width="320">
              <source src="/anny_sussy.webm" type="video/webm" />
            </video>
          </div>
          <h1 className="text-4xl mt-4">
            Looks like this route is a bit...
            <br />
            <span className="font-bold">sussy</span>
          </h1>
        </div>
      </main>
    </>
  );
}
