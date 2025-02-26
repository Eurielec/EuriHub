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
                Eventos PROTEGIDOS
              </h2>           
            </div>
          </div>
        </div>
      </section>
    );
  }
  