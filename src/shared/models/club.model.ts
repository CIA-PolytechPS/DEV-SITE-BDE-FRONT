import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";
import { unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";

export interface Club {
    id         : number;
    name       : string;
    short_name : string;
    location   : string;
    logo_url   : string;
    banner_url : string;
    color      : string;
    alpha      : number;
    description: string;
}

export const mapClub = createMapper<Club>({
    id         : createConverter(unknownToNumber, -1),
    name       : createConverter(unknownToString, ""),
    short_name : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    location   : createConverter(unknownToString, ""),
    logo_url   : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    banner_url : createConverter(unknownToString, ""), // eslint-disable-line @typescript-eslint/naming-convention
    color      : createConverter(unknownToString, ""),
    alpha      : createConverter(unknownToNumber, 1),
    description: createConverter(unknownToString, ""),
});
