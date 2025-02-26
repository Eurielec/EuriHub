"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Logo from "./logo";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, loading } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const supabase = createClient();

  const router = useRouter()
   
  async function handleLogout() {
     await supabase.auth.signOut()
     router.push("/signin")
     router.refresh()
  }
  // Si aún se está cargando la sesión, puedes mostrar un spinner o nada
  if (loading) {
    return null;
  }

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Opcional: cierra el dropdown tras cerrar sesión
    setDropdownOpen(false);
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Enlaces de navegación */}
          <ul className="flex flex-1 items-center gap-3">
            <li>
              <Link
                href="/"
                className="btn-sm relative bg-background bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="btn-sm relative bg-background bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                href="/club"
                className="btn-sm relative bg-background bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
              >
                Club
              </Link>
            </li>
            <li>
              <Link
                href="/it"
                className="btn-sm relative bg-background bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
              >
                IT
              </Link>
            </li>
            <li>
              <Link
                href="/juegos"
                className="btn-sm relative bg-background bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
              >
                Juegos
              </Link>
            </li>
          </ul>

          {/* Enlaces de autenticación */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {user ? (
              <>
                {/* Botón desplegable para usuario autenticado */}
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="btn-sm bg-linear-to-t from-primary to-primary bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
                  >
                    {user.email}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg z-10">
                      <Link
                        href="/micuenta"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Mi cuenta
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/socios"
                    className="btn-sm relative bg-background bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
                  >
                    Socios
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm relative bg-background bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
                  >
                    Inicia Sesión
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm bg-linear-to-t from-primary to-primary bg-[length:100%_100%] bg-[bottom] py-[5px] text-white transition-transform duration-300 hover:scale-105 hover:rotate-3"
                  >
                    ¡Hazte socio!
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
