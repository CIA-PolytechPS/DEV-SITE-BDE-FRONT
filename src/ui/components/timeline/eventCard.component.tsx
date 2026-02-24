import { FC } from "react";
import { Event } from "@/shared/models/event.model";
import DisplayComp from "@/ui/components/timeline/renderline.component";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface EventCardProps {
    event: Event;
}

const MemberCardComp: FC<EventCardProps> = (props: EventCardProps) => {
    return (
        <>
            <li
                className="flex flex-row mb-5 p-4 w-full max-w-5xl
            border-3 border-[#58aeff] shadow-2xl/50 rounded-3xl bg-[#d3d3d3]
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
            >
                <div className="flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 overflow-hidden">
                    <img src={props.event.photo} alt="Ceci n'est pas une image" className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col justify-between mx-3">
                    <div className="flex-2 flex flex-col justify-around item-center my-0">
                        <div className="flex inline-flex items-center my-0 mb-5">
                            <BookmarkIcon />

                            <a
                                className="text-[30px] sm:text-[30px] lg:text-[25px] my-0 leading-none pt-1 ml-1"
                                href={"/events/" + String(props.event.id)}
                            >
                                {props.event.name}
                            </a>

                        </div>

                        <div className="flex inline-flex items-center my-0">
                            <DisplayComp event={props.event} />
                        </div>
                    </div>

                    <div className="inline-flex flex-1 justify-between my-0 pt-2">
                        <h3 className="text-[15px] sm:text-[20px] text-gray-700 my-0 leading-none pl-1">{props.event.smalldescription}</h3>
                    </div>
                </div>
            </li>
        </>
    );
};

export default MemberCardComp;
