import { FC, ReactNode, useEffect, useState } from "react";
import EventCardComp from "@/ui/components/event/eventcard.component";
import { getAllEvents } from "@/api/event.api";
import { Event } from "@/shared/models/event.model";

const EventsListComp: FC = (): ReactNode => {
    const [events, setEvents] = useState<Event[]>([]);
    
    useEffect(() => {
        getAllEvents()
            .then(setEvents)
            .catch(console.error);
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="inline-block text-4xl font-bold text-primary border-b-4 border-primary pb-2">
                    Evenements à venir
                </h1>
            </div>

            {events.length === 0
                ? <p className="text-gray-500 italic mt-4">Aucun événement à venir pour le moment.</p>
                : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => {
                            return (
                                <EventCardComp
                                    key={event.id}
                                    event={event}
                                />
                            );
                        })}
                    </div>
                )}
        </div>
    );
};

export default EventsListComp;
