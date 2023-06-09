import { useStore } from "@nanostores/react";
import { isNavbarOpen } from "../stores/navbarStore";

export default function MenuOverlay() {
  const $isNavbarOpen = useStore(isNavbarOpen);

  return (
    <div
      className={`absolute ${
        $isNavbarOpen ? "z-90 w-full h-full opacity-95" : "z-0 opacity-0"
      }  flex justify-center items-center bg-black duration-300`}
    >
      {$isNavbarOpen ? (
        <a
          className="fixed top-6 right-8 text-white hover:text-amber-500 text-7xl font-semibold duration-300"
          onClick={() => isNavbarOpen.set(false)}
        >
          &times;
        </a>
      ) : (
        <></>
      )}
      {$isNavbarOpen ? (
        <div className="flex flex-col text-white text-center text-xl font-light space-y-3">
          <a
            className="hover:text-amber-500 sm:text-3xl text-2xl"
            href="/aboutme"
          >
            About Me
          </a>
          <a
            className="hover:text-amber-500 sm:text-3xl text-2xl"
            href="/blog"
          >
            Blog
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
