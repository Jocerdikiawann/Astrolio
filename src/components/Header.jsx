import { useStore } from "@nanostores/react";
import { isNavbarOpen } from "../stores/navbarStore";

export default function Header() {
  const $isNavbarOpen = useStore(isNavbarOpen);

  return (
    <header
      className={`mx-auto px-4 max-w-screen-xl mt-${$isNavbarOpen ? "0" : "8"}`}
    >
      <nav className="bg-white">
        <div className="flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="z-10 self-center text-2xl font-semibold whitespace-nowrap">
              {"{dev}"}
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100"
            aria-expanded="false"
            aria-label="Aria Menu"
            role="button"
            onClick={() => isNavbarOpen.set(!$isNavbarOpen)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="false"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
