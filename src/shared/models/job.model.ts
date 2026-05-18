import { unknownToBoolean, unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Job {
    id       : number;
    name     : string;
    group_id : number;
    parent_id: number;
    is_br    : boolean;
}

export const mapJob = createMapper<Job>({
    id       : createConverter(unknownToNumber, 0),
    name     : createConverter(unknownToString, ""),
    group_id : createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
    parent_id: createConverter(unknownToNumber, 0), // eslint-disable-line @typescript-eslint/naming-convention
    is_br    : createConverter(unknownToBoolean, false), // eslint-disable-line @typescript-eslint/naming-convention
});
