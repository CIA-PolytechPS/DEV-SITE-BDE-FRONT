import { FC } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Event } from "@/shared/models/event.model";

interface EventCardProp {
    event: Event;
}

const EventCardComp: FC<EventCardProp> = ({ event }) => {
    const start_date_formatted = new Date(event.start_date).toLocaleDateString("fr-FR");
    const end_date_formatted = new Date(event.end_date).toLocaleDateString("fr-FR");

    return (
        <div
            className="w-full bg-secondary border border-tertiary rounded-xl overflow-hidden
            shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
            <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${event.photo})` }}
            >
                <div
                    className="absolute top-3 right-3 bg-white text-primary p-1 rounded-md
                    shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
                >
                    <BookmarkIcon fontSize="small" />
                </div>

                <div className="absolute bottom-0 right-0 bg-secondary text-primary text-xs sm:text-sm font-bold px-3 py-1 rounded-tl-xl">
                    Du {start_date_formatted} au {end_date_formatted}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-primary">
                    {event.name}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                    Club ID : {event.club_id} • {event.nb_participants} participants
                </p>

                <div className="mt-auto pt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {event.event_categories_id.map((cat_id, index) => {
                            return (
                                <span
                                    key={index}
                                    className="bg-primary/20 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                                >
                                    Tag {cat_id}
                                </span>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-1 text-gray-800 text-sm font-medium whitespace-nowrap ml-2">
                        <PlaceIcon className="text-primary" fontSize="small" />
                        Lieu n°
                        {event.places_id}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCardComp;
