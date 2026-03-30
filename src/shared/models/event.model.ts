import { unknownToString, unknownToDate, unknownToNumber, unknownToArray } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Event {
    id                 : number;
    event_categories_id: number[];
    club_id            : number;
    name               : string;
    photo              : string;
    nb_participants    : number;
    start_date         : Date;
    end_date           : Date;
    places_id          : number[];
    description        : string;
    small_description  : string;
    
    // 0 if the event is free, otherwise the price in euros
    price: number;
}

export interface EventCategory {
    id   : number;
    name : string;
    color: string;
}

export const mapEvents = createMapper<Event>({
    id                 : createConverter(unknownToNumber, 0),
    event_categories_id: createConverter(unknownToArray(unknownToNumber), []), // eslint-disable-line @typescript-eslint/naming-convention
    club_id            : createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
    name               : createConverter(unknownToString, ""),
    photo              : createConverter(unknownToString, ""),
    nb_participants    : createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
    start_date         : createConverter(unknownToDate, new Date()), // eslint-disable-line @typescript-eslint/naming-convention
    end_date           : createConverter(unknownToDate, new Date()), // eslint-disable-line @typescript-eslint/naming-convention
    places_id          : createConverter(unknownToArray(unknownToNumber), []), // eslint-disable-line @typescript-eslint/naming-convention
    description        : createConverter(unknownToString, ""),
    small_description  : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    price              : createConverter(unknownToNumber, 0),
});

export const mapEventCategories = createMapper<EventCategory>({
    id   : createConverter(unknownToNumber, 0),
    name : createConverter(unknownToString, ""),
    color: createConverter(unknownToString, ""),
});
