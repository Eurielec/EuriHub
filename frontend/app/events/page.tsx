// events/page.tsx

export const metadata = {
    title: "Eventos - EuriHub",
    description: "Eventos de EuriHub",
  };
  
  import EventCard from "@/components/event-card";  // Componente de tarjeta de evento
  import { eventsData } from "@/data/events";  // Datos de eventos (podrías traerlos de una API o base de datos)
  
  export default function Events() {
    return (
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
              <h2 className="font-nacelle text-3xl font-semibold text-gray-200">
                Eventos de Eurielec
              </h2>
              <p className="text-lg text-white-200/65">
                Descubre los próximos eventos y actividades que organiza Eurielec.
              </p>
            </div>
  
            <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {eventsData.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  