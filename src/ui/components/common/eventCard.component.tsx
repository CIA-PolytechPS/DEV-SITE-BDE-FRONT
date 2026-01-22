import { FC } from "react";
import { Events } from "@/shared/models/events.model";

// import PersonIcon from "@mui/icons-material/Person";

interface EventCardProps {
    event: Events;
}

const MemberCardComp: FC<EventCardProps> = (props: EventCardProps) => {
    return (
        <>
            <div
                className="flex flex-col md:flex-row items-start mx-auto my-5
            border border-[#FFAA00] shadow-2xl/50 rounded-3xl bg-[#E6E6E610] w-full max-w-5xl p-4
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
            >
                <div className="flex-shrink-0 w-64 h-64 overflow-hidden">
                    <img src={props.event.photo} alt="Ceci n'est pas une image" className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col justify-between ml-2">
                    <div className="flex flex-row md:flex-col justify-between items-start my-0">
                        <h3 className="text-[25px] my-0 leading-none pt-3">{props.event.fonction}</h3>
                    </div>
                </div>

                <div>
                    <img src={props.event.description} />
                </div>
            </div>
        </>
    );
};

export default MemberCardComp;
