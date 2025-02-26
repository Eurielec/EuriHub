"use client";

import { useParams } from "next/navigation";
import { eventsData } from "@/data/events"; // Assuming eventsData is an array of events

export default function EventDetail() {
  const { id } = useParams();  // Get the dynamic 'id' from the URL

  // Find the event with the matching id
  const event = eventsData.find((event) => event.id === Number(id));

  if (!event) {
    return <div className="text-center text-text py-8">Event not found</div>;
  }

  return (
    <section className="relative bg-background text-text py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-primary)/0.25,transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[var(--color-primary)/0.5] after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[var(--color-primary)/0.5]">
              <span className="inline-flex bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)] bg-clip-text text-transparent">
                Event Details
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)] bg-[length:200%_auto] bg-clip-text pb-4 font-semibold text-4xl text-transparent md:text-5xl">
              {event.title}
            </h2>
            <p className="text-lg text-text/65">{event.date}</p>
          </div>

          {/* Event content */}
          <div className="mx-auto max-w-5xl text-center">
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-6 px-8 rounded-lg shadow-xl mb-8">
              <p className="text-xl text-text mb-6">{event.description}</p>
              <div className="bg-white text-text py-4 px-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Event Highlights</h3>
                <ul className="list-disc pl-6 mt-4">
                  {/* Add event highlights or other content */}
                  <li>Keynote Speaker: {event.speaker}</li>
                  <li>Location: {event.location}</li>
                </ul>
              </div>
            </div>

            {/* Add more sections if needed */}
            <div className="mt-8 bg-[var(--color-primary)] text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Join Us for This Event!</h3>
              <p className="mt-2">Don't miss out on this exciting opportunity to connect, learn, and grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
