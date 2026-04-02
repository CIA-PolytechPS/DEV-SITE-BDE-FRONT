import { unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Place {
    id     : number;
    name   : string;
    address: string;
}

export const mapPlace = createMapper<Place>({
    id     : createConverter(unknownToNumber, 0),
    name   : createConverter(unknownToString, ""),
    address: createConverter(unknownToString, ""),
});
