import { unknownToString, unknownToDate, unknownToNumber } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Event {
    id          : number;
    name        : string;
    photo       : string;
    participants: number;
    startdate   : Date;
    enddate     : Date;
    place       : string;
    description : string;
}

export const mapEvents = createMapper<Event>({
    id          : createConverter(unknownToNumber, -1),
    name        : createConverter(unknownToString, ""),
    photo       : createConverter(unknownToString, ""),
    participants: createConverter(unknownToNumber, 0),
    startdate   : createConverter(unknownToDate, new Date()),
    enddate     : createConverter(unknownToDate, new Date()),
    place       : createConverter(unknownToString, ""),
    description : createConverter(unknownToString, ""),
});
