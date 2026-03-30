import { unknownToDate, unknownToNumber, unknownToString, unknownToBoolean } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Project {
    id         : number;
    club_id    : number;
    title      : string;
    date       : Date;
    description: string;
    image      : string;
    start_date : Date;
    end_date   : Date;
    ongoing    : boolean;
}

export const mapProject = createMapper<Project>({
    id         : createConverter(unknownToNumber, -1),
    club_id    : createConverter(unknownToNumber, -1), // eslint-disable-line @typescript-eslint/naming-convention
    title      : createConverter(unknownToString, ""),
    date       : createConverter(unknownToDate, new Date()),
    description: createConverter(unknownToString, ""),
    image      : createConverter(unknownToString, ""),
    start_date : createConverter(unknownToDate, new Date()), // eslint-disable-line @typescript-eslint/naming-convention
    end_date   : createConverter(unknownToDate, new Date()), // eslint-disable-line @typescript-eslint/naming-convention
    ongoing    : createConverter(unknownToBoolean, false),
});
