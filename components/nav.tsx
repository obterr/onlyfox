import { MenuIcon } from "./icons.tsx";

export default function Navbar() {
  return (
    <nav className="h-full flex justify-between items-center">
      <a
        className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-pink-300"
        href="/"
        f-partial="/"
      >
        OnlyFox
      </a>
      <div className="flex w-fit">
        <label htmlFor="nav-responsive" className="sm:hidden">
          <MenuIcon />
        </label>
        <input
          id="nav-responsive"
          type="checkbox"
          className="hidden peer"
          checked={false}
        />
        <menu className="hidden peer-checked:fixed peer-checked:flex peer-checked:flex-col peer-checked:backdrop-blur-lg peer-checked:py-4 peer-checked:border-2 peer-checked:border-purple-300 peer-checked:rounded-md peer-checked:h-fit peer-checked:w-full peer-checked:top-16 peer-checked:right-0 sm:flex sm:gap-4">
          <li>
            <a
              className="sm:bg-purple-400 pl-2 sm:py-2 sm:px-6 sm:rounded-full sm:hover:bg-purple-500"
              href="/mega"
              f-partial="/mega"
            >
              Mega Links
            </a>
          </li>
          <li>
            <a
              className="sm:bg-purple-400 pl-2 sm:py-2 sm:px-6 sm:rounded-full sm:hover:bg-purple-500"
              href="/hics"
              f-partial="/hics"
            >
              Hic Compilation
            </a>
          </li>
        </menu>
      </div>
    </nav>
  );
}
