import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";
import { unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";

export interface Club {
    id         : number;
    name       : string;
    short_name : string;
    place_id   : number;
    logo       : string;
    banner     : string;
    color      : string;
    alpha      : number;
    description: string;
}

export const mapClub = createMapper<Club>({
    id         : createConverter(unknownToNumber, -1),
    name       : createConverter(unknownToString, ""),
    short_name : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    place_id   : createConverter(unknownToNumber, -1), // eslint-disable-line @typescript-eslint/naming-convention
    logo       : createConverter(unknownToString, ""),
    banner     : createConverter(unknownToString, ""),
    color      : createConverter(unknownToString, ""),
    alpha      : createConverter(unknownToNumber, 1),
    description: createConverter(unknownToString, ""),
});
