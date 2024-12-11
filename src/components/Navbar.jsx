import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Inicio</span>
              <img src="/guss.png" alt="logo" className="h-20" />
            </a>
          </div>

          <div className={`hidden md:block ${isMenuOpen ? "block" : ""}`}>
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-base text-gray-500 transition hover:text-blue-500/75"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    className="text-base text-gray-500 transition hover:text-blue-500/75"
                    href="#"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    className="text-base text-gray-500 transition hover:text-blue-500/75"
                    href="#"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="text-base rounded-md bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-white shadow"
                href="#"
              >
                Ver carrito
              </a>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 bg-gray-800 p-4 rounded-lg`}
        >
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-6 text-sm">
              <li>
                <a
                  className="text-base text-white transition hover:text-blue-500/75"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white transition hover:text-blue-500/75"
                  href="#"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white transition hover:text-blue-500/75"
                  href="#"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
