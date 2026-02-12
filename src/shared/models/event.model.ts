import { unknownToString, unknownToDate, unknownToNumber } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Event {
    id          : number;
    nom         : string;
    photo       : string;
    participants: number;
    datedebut   : Date;
    datefin     : Date;
    lieu        : string;
    description : string;
}

export const mapEvents = createMapper<Event>({
    id          : createConverter(unknownToNumber, -1),
    nom         : createConverter(unknownToString, ""),
    photo       : createConverter(unknownToString, ""),
    participants: createConverter(unknownToNumber, 0),
    datedebut   : createConverter(unknownToDate, new Date()),
    datefin     : createConverter(unknownToDate, new Date()),
    lieu        : createConverter(unknownToString, ""),
    description : createConverter(unknownToString, ""),
});
