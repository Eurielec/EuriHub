export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-5">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <nav>
            <ul className="mt-4 space-y-2">
              <li><a href="/dashboard" className="block p-2 hover:bg-gray-700">Inicio</a></li>
              <li><a href="/dashboard/users" className="block p-2 hover:bg-gray-700">Usuarios</a></li>
              <li><a href="/dashboard/settings" className="block p-2 hover:bg-gray-700">Configuración</a></li>
            </ul>
          </nav>
        </aside>
  
        {/* Contenido principal */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  }
  