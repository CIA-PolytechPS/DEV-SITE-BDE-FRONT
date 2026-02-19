import { unknownToString, unknownToDate, unknownToNumber } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Event {
    id            : number;
    organisator   : string;
    name          : string;
    photo         : string;
    nbparticipants: number;
    startdate     : Date;
    enddate       : Date;
    place         : string;
    description   : string;
}

export const mapEvents = createMapper<Event>({
    id            : createConverter(unknownToNumber, 0),
    organisator   : createConverter(unknownToString, ""),
    name          : createConverter(unknownToString, ""),
    photo         : createConverter(unknownToString, ""),
    nbparticipants: createConverter(unknownToNumber, 0),
    startdate     : createConverter(unknownToDate, new Date()),
    enddate       : createConverter(unknownToDate, new Date()),
    place         : createConverter(unknownToString, ""),
    description   : createConverter(unknownToString, ""),
});
