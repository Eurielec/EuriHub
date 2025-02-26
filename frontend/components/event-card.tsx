// components/event-card.tsx

import Link from "next/link";
import { Event } from "@/types";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-primary">
      <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-black/65 mt-2">{event.description}</p>
      <Link
        href={`/events/${event.id}`}
        className="text-primary hover:text-primary-dark mt-4 inline-block"
      >
        Más información
      </Link>
    </div>
  );
}
