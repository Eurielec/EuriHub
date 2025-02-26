"use client";

import { useEffect } from "react";
import { useUser } from "@/hooks/use-user";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function MiCuenta() {
  const { user, loading, error } = useUser();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // Si ya no hay usuario y la carga ha terminado, redirige
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [loading, user, router]);

  if (loading) return <p className="text-center mt-8 text-white">Cargando...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error.message}</p>;
  if (!user) return null; // Mientras se redirige, no renderizamos nada

  async function handleSignOut() {
    await supabase.auth.signOut();
    // Después de cerrar sesión, el hook useUser se actualizará y el efecto redirigirá al usuario
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Mi Cuenta</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Nombre:</strong> {user.user_metadata?.full_name || "No especificado"}
      </p>
      <div className="mt-6">
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
