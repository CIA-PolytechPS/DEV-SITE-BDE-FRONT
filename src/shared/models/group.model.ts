import { unknownToNumber, unknownToString } from "@/shared/utils/common/convert.util";
import { createConverter, createMapper } from "@/shared/utils/common/mapper.util";

export interface Group {
    id   : number;
    name : string;
    color: string;
}

export const mapGroup = createMapper<Group>({
    id   : createConverter(unknownToNumber, 0),
    name : createConverter(unknownToString, ""),
    color: createConverter(unknownToString, ""),
});
