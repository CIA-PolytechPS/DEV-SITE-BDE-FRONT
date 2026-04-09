import { unknownToString, unknownToDate, unknownToNumber } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Event {
    id                 : number;
    event_categories_id: number[];
    organisator        : string;
    name               : string;
    photo              : string;
    nbparticipants     : number;
    startdate          : Date;
    enddate            : Date;
    place              : string;
    description        : string;
}

export interface EventCategory {
    id  : number;
    name: string;
}

export const mapEvents = createMapper<Event>({
    id                 : createConverter(unknownToNumber, 0),
    event_categories_id: createConverter((data) => { // eslint-disable-line @typescript-eslint/naming-convention
        if (Array.isArray(data)) {
            return data.map((item) => { return unknownToNumber(item); });
        }

        return [];
    }, []),
    organisator   : createConverter(unknownToString, ""),
    name          : createConverter(unknownToString, ""),
    photo         : createConverter(unknownToString, ""),
    nbparticipants: createConverter(unknownToNumber, 0),
    startdate     : createConverter(unknownToDate, new Date()),
    enddate       : createConverter(unknownToDate, new Date()),
    place         : createConverter(unknownToString, ""),
    description   : createConverter(unknownToString, ""),
});

export const mapEventCategories = createMapper<EventCategory>({
    id  : createConverter(unknownToNumber, 0),
    name: createConverter(unknownToString, ""),
});
