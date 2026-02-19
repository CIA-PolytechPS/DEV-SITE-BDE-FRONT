import { unknownToString, unknownToDate, unknownToNumber } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Event {
    id                 : number;
    event_categories_id: number[];
    organisateur       : string;
    nom                : string;
    photo              : string;
    participants       : number;
    datedebut          : Date;
    datefin            : Date;
    lieu               : string;
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
    organisateur: createConverter(unknownToString, ""),
    nom         : createConverter(unknownToString, ""),
    photo       : createConverter(unknownToString, ""),
    participants: createConverter(unknownToNumber, 0),
    datedebut   : createConverter(unknownToDate, new Date()),
    datefin     : createConverter(unknownToDate, new Date()),
    lieu        : createConverter(unknownToString, ""),
    description : createConverter(unknownToString, ""),
});

export const mapEventCategories = createMapper<EventCategory>({
    id  : createConverter(unknownToNumber, 0),
    name: createConverter(unknownToString, ""),
});
