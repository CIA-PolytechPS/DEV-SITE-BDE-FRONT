import { FC, ReactNode } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import PlaceIcon from "@mui/icons-material/Place";
import { Event } from "@/shared/models/event.model";
import FormatConverter from "@/ui/components/timeline/dateFormat.component";

interface EventCardProps {
    event: Event;
}

const DisplayComp: FC<EventCardProps> = (props: EventCardProps): ReactNode => {
    return (
        <div className="flex justify-center p-4">
            <GroupsIcon />

            <text className="whitespace-nowrap display-inline text-[20px] my-0 leading-none pt-1 ml-2 mr-4">
                {props.event.participants} participants
            </text>

            <PlaceIcon />
            <text className="flex text-[20px] my-0 leading-none pt-1 ml-1 mr-4">{props.event.place}</text>
            <FormatConverter startdate={props.event.startdate} enddate={props.event.enddate} />
        </div>
    );
};

export default DisplayComp;
