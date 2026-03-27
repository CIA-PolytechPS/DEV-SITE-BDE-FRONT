import { FC, ReactNode, useEffect, useState } from "react";
import ClubCard from "@/ui/components/clubs/clubscard.component";
import { getAllClubs } from "@/api/club.api";
import { Club } from "@/shared/models/club.model";
import { Event } from "@/shared/models/event.model";
import { getAllEvents } from "@/api/event.api";

const ClubsListComp: FC = (): ReactNode => {
    const [clubs, setClubs] = useState<Club[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    
    useEffect(() => {
        getAllClubs()
            .then(setClubs)
            .catch(console.error);
    }, []);

    useEffect(
        () => {
            getAllEvents()
                .then(setEvents)
                .catch(console.error);
        },
        [],
    );

    return (
        <div className="w-4/5 m-[2%]">
            <div className="w-full">
                <h1 className="underline text-5xl font-semibold">Clubs</h1>
            </div>

            <div className="mt-[3%]">
                <ul>
                    {
                        clubs.map((club) => {
                            return (
                                <li>
                                    <ClubCard
                                        club={club}
                                        events={events.filter((event) => { return event.club_id === club.id; })}
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default ClubsListComp;
