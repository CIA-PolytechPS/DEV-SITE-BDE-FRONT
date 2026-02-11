import { unknownToDate, unknownToNumber, unknownToString } from "../utils/common/convert.util";
import { createConverter, createMapper } from "../utils/common/mapper.util";

export interface Event {
    id            : number;
    club_id       : number;
    title         : string;
    date          : Date;
    place         : string;
    description   : string;
    capacity      : number;
    others        : string;
    image_location: string;
}

export const mapEvent = createMapper<Event>({
    id            : createConverter(unknownToNumber, -1),
    club_id       : createConverter(unknownToNumber, -1), // eslint-disable-line @typescript-eslint/naming-convention
    title         : createConverter(unknownToString, ""),
    date          : createConverter(unknownToDate, new Date()),
    place         : createConverter(unknownToString, ""),
    description   : createConverter(unknownToString, ""),
    capacity      : createConverter(unknownToNumber, -1),
    others        : createConverter(unknownToString, ""),
    image_location: createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
});
