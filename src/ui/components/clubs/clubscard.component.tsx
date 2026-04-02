import { FC } from "react";
import { Club } from "@/shared/models/club.model";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import { Event } from "@/shared/models/event.model";

interface ClubCardProp {
    club  : Club;
    events: Event[];
}

const ClubCardComp: FC<ClubCardProp> = (props: ClubCardProp) => {
    return (
        <div className="w-full max-w-5xl mx-auto my-5 bg-secondary border border-tertiary rounded-xl
       overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
            <div
                className="h-32 w-full"
                style={{ backgroundColor: props.club.color }}
            >
                <div
                    className="h-32 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${props.club.banner_url})`, opacity: props.club.alpha }}
                />
            </div>

            <div className="px-6 pb-6 relative">
                <div className="flex items-start gap-4">
                    <div className="w-24 h-24 shrink-0 rounded-xl border border-tertiary bg-secondary
                    shadow-sm overflow-hidden -mt-10 z-10 flex items-center justify-center p-1"
                    >
                        <img
                            src={props.club.logo_url}
                            alt={`Logo ${props.club.name}`}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex-1 mt-2">
                        <h2>
                            {props.club.name} ({props.club.short_name})
                        </h2>
                    </div>

                    <div className="flex items-center gap-1 text-gray-700 text-sm mt-2 font-medium">
                        <PlaceIcon className="text-primary" />{props.club.location}
                    </div>
                </div>

                <div className="mt-4 leading-relaxed">
                    <p>{props.club.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-2xl bg-primary/10 px-3 py-1">
                        <span className="text-sm text-primary">
                            {props.events.length} {props.events.length > 1 ? "événements à venir" : "événement à venir"}
                        </span>
                    </div>

                    <Link to={`/club/${props.club.short_name}`}>
                        <button>
                            Voir Plus
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClubCardComp;
